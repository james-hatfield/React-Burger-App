import React, { Component } from "react";

import Aux from "../../HOC/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.4,
    meat: 1.3
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4.0
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const updatedPrice = (oldPrice + INGREDIENT_PRICES[type]);

    this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });

  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] === 0) {
      return;
    } else {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;

      const oldPrice = this.state.totalPrice;
      const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
      console.log(typeof updatedPrice)
  
      this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
    }
  };

  render() {
      const disabledInfo = {
          ...this.state.ingredients
      };
      for (let key in disabledInfo){
          disabledInfo[key] = disabledInfo[key] <=0
      }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
            disabled={disabledInfo}
            price={this.state.totalPrice}
            less={this.removeIngredientHandler}
            more={this.addIngredientHandler}
            total={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
