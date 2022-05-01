import React from "react";
import { Link } from "react-router-dom";
import { NavUnlisted, linkStyle } from "../style/navbar";

const Header = () => {
  return (
    <NavUnlisted>
      <Link to="/" style={linkStyle}>
        HOME
      </Link>
      <Link to="/add" style={linkStyle}>
        ADD
      </Link>
    </NavUnlisted>
  );
};

export default Header;
