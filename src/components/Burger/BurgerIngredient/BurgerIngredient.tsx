import React from "react";
import classes from "./BurgerIngredient.module.css";
import { Ingredient } from "../../../data.types";

const BurgerIngredient = (props: { ingredKey: Ingredient }) => {
  let ingredient = null;

  switch (props.ingredKey) {
    case Ingredient.BREADBOTTOM:
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case Ingredient.BREADTOP:
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case Ingredient.MEAT:
      ingredient = <div className={classes.Meat}></div>;
      break;
    case Ingredient.CHEESE:
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case Ingredient.SALAD:
      ingredient = <div className={classes.Salad}></div>;
      break;
    case Ingredient.BACON:
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};
export default BurgerIngredient;
