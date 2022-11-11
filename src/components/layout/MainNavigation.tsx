import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

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
            <Link to="/Dashboard">Dashboard</Link>
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
