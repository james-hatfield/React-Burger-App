import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props: { show: boolean; clicked: () => void }) => (
  <div
    style={{
      opacity: props.show ? "1" : "0",
      display: props.show ? "block" : "none",
    }}
    onClick={props.clicked}
    className={classes.Backdrop}
  ></div>
);
export default Backdrop;
