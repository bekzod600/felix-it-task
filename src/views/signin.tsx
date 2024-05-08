import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";

const InputField = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const CustomInput = styled(Input)`
  border: 1px solid #ebebeb;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 20px;
  transition: all 0.1s ease-in-out;

  &:has(input:focus) {
    border: 1px solid var(--blue-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const Navigation = styled(Link)`
  color: var(--blue-color);
  text-decoration: none;
`;
const SubmitButton = styled(Button)`
  background-color: var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
  }
`;

const card = (
  <React.Fragment>
    <CardContent sx={{ padding: "10px auto" }}>
      <Typography
        sx={{ fontSize: 36, padding: "16px 0" }}
        textAlign={"center"}
        fontWeight={"bold"}
        color="text.black"
        gutterBottom
      >
        Sign in
      </Typography>

      <InputField>
        <label htmlFor="username" style={{ fontSize: "14px", fontWeight: 600 }}>
          Username
        </label>
        <CustomInput
          type="text"
          disableUnderline={true}
          id="username"
          placeholder="Enter your username"
        />
      </InputField>

      <InputField>
        <label htmlFor="password" style={{ fontSize: "14px", fontWeight: 600 }}>
          Password
        </label>
        <CustomInput
          type="password"
          disableUnderline={true}
          id="password"
          placeholder="Repeat the password"
        />
      </InputField>

      <Box mt={2}>
        <SubmitButton variant="contained" fullWidth>
          Button
        </SubmitButton>
      </Box>

      <Typography
        sx={{ fontSize: 14, padding: "16px 0" }}
        textAlign={"center"}
        color="text.black"
      >
        Already signed up? <Navigation to="/signup">Go to sign up</Navigation>.
      </Typography>
    </CardContent>
  </React.Fragment>
);

const CustomCard = styled(Card)`
  background-color: white;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const signin = () => {
  return (
    <Box sx={{ minWidth: 275 }} maxWidth={400} mx={"auto"} mt={"10%"}>
      <CustomCard>
        <Box component="form" noValidate>
          {card}
        </Box>
      </CustomCard>
    </Box>
  );
};

export default signin;
