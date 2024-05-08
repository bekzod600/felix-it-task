import { useState, Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Header from "../components/Header";
import { Add, Close, Link } from "@mui/icons-material";

const SubmitButton = styled(Button)`
  background-color: var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
  }
`;

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Fragment>
      <main>
        <Header />
        <Box>
          <Toolbar>
            <Box flex={1} mb={4}>
              <Typography
                component={"h2"}
                fontSize={40}
                fontWeight={"bold"}
                color={"white"}
              >
                You’ve got{" "}
                <Typography
                  component={"span"}
                  fontSize={40}
                  fontWeight={"bold"}
                  color={"var(--primary-color)"}
                >
                  7 book
                </Typography>
              </Typography>
              <Typography component={"h3"} fontSize={20} color={"white"}>
                Your books today
              </Typography>
            </Box>
            <SubmitButton
              onClick={() => setOpenModal(true)}
              variant="contained"
              startIcon={<Add />}
            >
              Create a Book
            </SubmitButton>
          </Toolbar>
          <Toolbar>
            <Grid container spacing={2}>
              {Array.from(Array(5)).map((_, i) => (
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography
                        component={"h3"}
                        fontSize={20}
                        fontWeight={"bold"}
                      >
                        Raspberry Pi User Guide
                      </Typography>
                      <Typography color={"#333"} component={"p"} fontSize={16}>
                        Cover: http://url.to.book.cover
                      </Typography>
                      <Typography color={"#333"} component={"p"} fontSize={16}>
                        Pages: 221
                      </Typography>
                      <Typography color={"#333"} component={"p"} fontSize={16}>
                        Published: 2012
                      </Typography>
                      <Typography color={"#333"} component={"p"} fontSize={16}>
                        Isbn: 9781118464465
                      </Typography>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mt={2}
                      >
                        <Typography
                          color={"#333"}
                          component={"p"}
                          fontSize={16}
                          flex={1}
                        >
                          Isbn: 9781118464465
                        </Typography>
                        <Chip
                          label="New"
                          sx={{ py: 0.5, height: "auto" }}
                          color="error"
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Toolbar>
        </Box>
        <Dialog onClose={handleClose} open={openModal}>
          <Box>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Modal title
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <DialogContent sx={{ px: "16px", pt: 0 }}>
            <FormControl
              sx={{ m: 0, width: "380px", mb: 4 }}
              variant="outlined"
            >
              <FormHelperText sx={{ mx: 0 }} id="outlined-weight-helper-text">
                ISBN
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">
                    <Link />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                placeholder="______________"
              />
            </FormControl>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  color: "var(--primary-color)",
                  borderColor: "var(--primary-color)",
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ flex: 1, backgroundColor: "var(--primary-color)" }}
              >
                Submit
              </Button>
            </Stack>
          </DialogContent>

          {/* <DialogTitle>salom</DialogTitle> */}
        </Dialog>
      </main>
    </Fragment>
  );
};

export default Home;
