import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { DropdownSimple } from "../dropdown/Dropdown";

export const Navbar = (props) => {
  const { logo, appName, auth } = props;
  return (
    <div className="navbar">
      <span className="logo">{logo}</span>
      <span className="appName">{appName}</span>
      <div className="loginRegister">
        <DropdownSimple
          dropdownName={"Login/Register"}
          dropdownOptions={["Login", "Register"]}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Navbar;
