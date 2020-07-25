import React from "react";
import { Condiment } from "../../../data.types";

const OrderSummary = (props: { condiments: Condiment[] }) => {
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
      <p>Continue to checkout?</p>
    </>
  );
};
export default OrderSummary;
