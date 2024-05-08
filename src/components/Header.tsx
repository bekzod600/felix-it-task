import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logo from "../assets/images/logo_img.png";
import styled from "styled-components";
import { Avatar, Box, InputBase } from "@mui/material";
import SearchIcon from "../assets/icons/search.svg";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "transparent",
  width: "380px",
  borderRadius: "6px",
  "&:has(input:focus)": {
    backgroundColor: "#fefefe",

    "& input::placeholder": {
      color: "black",
    },
  },
  marginRight: "8px",
  marginLeft: 0,
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "0 8px",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8px 8px 8px 0px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + 24px)`,
    transition: "whidth",
    width: "100%",
    "&::placeholder": {
      color: "#fefefe",
      fontWeight: 500,
    },
    "&::-webkit-search-cancel-button": {
      position: "relative",
      right: "6px",
    },
  },
}));

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Header() {
  return (
    <React.Fragment>
      <Toolbar sx={{ mb: 3 }}>
        <IconButton sx={{ mr: "20px" }}>
          <img src={logo} alt="logo" />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <img src={SearchIcon} alt="search" />
          </SearchIconWrapper>
          <StyledInputBase
            type="search"
            placeholder="Search for any training you want"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        ></Typography>

        <Box>
          <IconButton>
            <NotificationsOutlinedIcon sx={{ fontSize: "32px" }} />
          </IconButton>
          <IconButton sx={{ ml: 2 }}>
            <Avatar
              {...stringAvatar("Bekzod Baratov")}
              sx={{
                bgcolor: stringToColor("Bekzod Baratov"),
                width: 36,
                height: 36,
                fontSize: "16px",
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}
