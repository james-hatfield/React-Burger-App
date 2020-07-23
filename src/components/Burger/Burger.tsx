import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Ingredient, AddableIngredient } from "../../data.types";

const Burger = (ingredients: AddableIngredient) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((key) => {
      return [
        ...Array(ingredients[key as keyof AddableIngredient]),
      ].map((_, i) => (
        <BurgerIngredient key={key + i} type={key as Ingredient} />
      ));
    })
    .reduce((arr, curr) => arr.concat(curr), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients.push(<h1 key="1">Please add an ingredient</h1>);
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={Ingredient.BREADTOP} />
      {transformedIngredients}
      <BurgerIngredient type={Ingredient.BREADBOTTOM} />
    </div>
  );
};
export default Burger;
