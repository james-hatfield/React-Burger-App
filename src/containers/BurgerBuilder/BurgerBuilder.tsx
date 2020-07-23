import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import { Ingredient } from "../../data.types";
import BuildControls from "../../components/Burger/BurgerControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      [Ingredient.SALAD]: 0,
      [Ingredient.BACON]: 0,
      [Ingredient.CHEESE]: 0,
      [Ingredient.MEAT]: 0,
    },
  };

  render() {
    return (
      <>
        <Burger {...this.state.ingredients} />
        <BuildControls {...this.state.ingredients} />
      </>
    );
  }
}

export default BurgerBuilder;
