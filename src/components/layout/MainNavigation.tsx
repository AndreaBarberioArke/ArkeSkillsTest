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

export const MainNavigation = () => {
  return (
    <>
      <Item className="header">
        <div className="logo">Skills Test</div>
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
      </Item>

      <ItemMobile className="item-mobile">
        <IconButton
          className="burger-menu"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            margin: "25px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </ItemMobile>
    </>
  );
};

export default MainNavigation;