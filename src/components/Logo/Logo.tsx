import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = (props: { class?: string }) => (
  <div className={`${classes.Logo} ${props.class ? props.class : ""}`}>
    <img src={burgerLogo} alt="Burger icon" />
  </div>
);
export default Logo;
