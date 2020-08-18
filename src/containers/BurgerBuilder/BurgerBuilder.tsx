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

  placeOrder = () => {
    const order = {
      ingredients: {
        salad: this.state.condiments[0][1],
        bacon: this.state.condiments[1][1],
        cheese: this.state.condiments[2][1],
        meat: this.state.condiments[3][1],
        breadTop: 1,
        breadBottom: 1,
      },
      price: this.state.totalPrice,
      customer: {
        name: "James Hatfield",
        address: {
          street: "Test Street",
          zipCode: "55555",
          country: "United States",
        },
        email: "test@test.com",
      },
    };

    console.log(JSON.stringify(order));
    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then(console.log);

    // fetch("http://localhost:5000/order")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  render() {
    return (
      <>
        <Modal show={this.state.purchasing} closeModal={this.purchaseHandler}>
          <OrderSummary
            condiments={this.state.condiments}
            price={this.state.totalPrice}
            cancel={this.purchaseHandler}
            continue={this.placeOrder}
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
