import React from "react";
import classes from "./BuildControl.module.css";
import { Ingredient } from "../../../../data.types";

const BuildControl = (props: { ingredient: Partial<Ingredient> }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.ingredient}</div>
      <button className={classes.Less}>Less</button>
      <button className={classes.More}>More</button>
    </div>
  );
};
export default BuildControl;
