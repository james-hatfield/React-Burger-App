import React from "react";
import classes from "./BuildControls.module.css";
import { AddableIngredient, Ingredient } from "../../../data.types";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (ingredients: AddableIngredient) => {
  const controls = Object.keys(ingredients).map((k, i) => (
    <BuildControl key={i} ingredient={k as Ingredient} />
  ));
  return (
    <>
      <div className={classes.BuildControls}>{controls}</div>
    </>
  );
};

export default BuildControls;
