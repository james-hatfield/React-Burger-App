import React from "react";
import classes from "./Button.module.css";

interface Button {
  children: string;
  clicked: () => void;
  color: "Danger" | "Success";
}

const Button = (props: Button) => (
  <button
    className={`${classes.Button} ${classes[props.color]}`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
export default Button;
