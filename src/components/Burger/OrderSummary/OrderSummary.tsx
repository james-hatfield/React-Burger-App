import React from "react";
import { Condiment } from "../../../data.types";
import Button from "../../UI/Button/Button";

const OrderSummary = (props: {
  condiments: Condiment[];
  price: number;
  cancel: () => void;
  continue: () => void;
}) => {
  const cond = props.condiments;
  const ingredSummary = Object.keys(cond).map((_, i) => (
    <li key={i}>
      {cond[i][0].charAt(0).toUpperCase() + cond[i][0].slice(1)}: {cond[i][1]}
    </li>
  ));
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      {ingredSummary}
      <p>
        <strong>Total price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button color="Danger" clicked={props.cancel}>
        Cancel
      </Button>
      <Button color="Success" clicked={props.continue}>
        Continue
      </Button>
    </>
  );
};
export default OrderSummary;
