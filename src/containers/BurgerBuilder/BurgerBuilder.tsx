import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import { Ingredient, BuilderState } from "../../data.types";
import BuildControls from "../../components/Burger/BurgerControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {
  state: BuilderState = {
    condiments: [
      [Ingredient.SALAD, 1, 0.5],
      [Ingredient.BACON, 1, 1],
      [Ingredient.CHEESE, 1, 1],
      [Ingredient.MEAT, 1, 2],
    ],
    totalPrice: 4.5,
    canPurchase: true,
    purchasing: false,
  };

  addIngredientHandler = (index: number) => {
    const count = this.state.condiments[index][1];
    const updatedcondiments = { ...this.state.condiments };
    updatedcondiments[index][1] = count + 1;
    const updatedPrice = this.state.totalPrice + updatedcondiments[index][2];

    this.setState({
      condiments: updatedcondiments,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState();
  };

  deleteIngredientHandler = (index: number) => {
    const count = this.state.condiments[index][1];
    if (count !== 0) {
      const updatedcondiments = { ...this.state.condiments };
      updatedcondiments[index][1] = count - 1;
      const updatedPrice = this.state.totalPrice - updatedcondiments[index][2];

      this.setState({
        condiments: updatedcondiments,
        totalPrice: updatedPrice,
      });
      this.updatePurchaseState();
    }
  };

  updatePurchaseState = () => {
    const c = { ...this.state.condiments };

    const sum = Object.keys(c)
      .map((_, i) => c[i][1])
      .reduce((sum, el) => (sum += el), 0);
    this.setState({ canPurchase: sum > 0 });
  };

  purchaseHandler = () => this.setState({ purchasing: !this.state.purchasing });

  render() {
    return (
      <>
        <Modal show={this.state.purchasing} closeModal={this.purchaseHandler}>
          <OrderSummary
            condiments={this.state.condiments}
            price={this.state.totalPrice}
            cancel={this.purchaseHandler}
            continue={() => "test"}
          />
        </Modal>
        <Burger {...this.state.condiments} />
        <BuildControls
          condiments={this.state.condiments}
          price={this.state.totalPrice}
          canPurchase={this.state.canPurchase}
          order={this.purchaseHandler}
          add={this.addIngredientHandler}
          delete={this.deleteIngredientHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
