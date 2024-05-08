import { Stack, Button } from "@mui/material";
import ErrorPageIcon from "../assets/icons/error-page.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <Stack
        justifyContent="center"
        spacing={6}
        alignItems="center"
        minHeight={"100vh"}
      >
        <img src={ErrorPageIcon} alt="error-page" />
        <Stack direction="row" spacing={2}>
          <Link to="/">
            <Button href="/" variant="contained" sx={{ width: "250px" }}>
              Go Home Page
            </Button>
          </Link>
          <Button
            onClick={() => window.location.reload()}
            variant="outlined"
            sx={{ width: "250px" }}
          >
            Reload Page
          </Button>
        </Stack>
      </Stack>
    </main>
  );
};

export default ErrorPage;
