import React from "react";
import { Link } from "react-router-dom";
import "../../styles/MainNavigation.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const Item = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const ItemMobile = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Item = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const ItemMobile = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">React Skills Test</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
          <Link to="/table">Table</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
