import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Ingredient, Condiment } from "../../data.types";

const Burger = (ingredients: Condiment[]) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((_, i) => {
      return [...Array(ingredients[i][1])].map((_, j) => (
        <BurgerIngredient
          key={ingredients[i][0] + j}
          ingredKey={ingredients[i][0] as Ingredient}
        />
      ));
    })
    .reduce((arr, curr) => arr.concat(curr), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients.push(<h1 key="1">Please add an ingredient</h1>);
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient ingredKey={Ingredient.BREADTOP} />
      {transformedIngredients}
      <BurgerIngredient ingredKey={Ingredient.BREADBOTTOM} />
    </div>
  );
};
export default Burger;
