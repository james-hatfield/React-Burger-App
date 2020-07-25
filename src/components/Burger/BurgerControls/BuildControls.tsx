import React from "react";
import classes from "./BuildControls.module.css";
import { Condiment } from "../../../data.types";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props: {
  condiments: Condiment[];
  price: number;
  canPurchase: boolean;
  order: () => void;
  add: (arg0: number) => void;
  delete: (arg0: number) => void;
}) => {
  const ingred = props.condiments;
  const controls = Object.keys(ingred).map((_, i) => (
    <BuildControl
      add={() => props.add(i)}
      delete={() => props.delete(i)}
      key={i}
      condiment={ingred[i]}
    />
  ));
  return (
    <>
      <div className={classes.BuildControls}>
        <p>Current Price: ${props.price.toFixed(2)}</p>
        {controls}
        <button
          disabled={!props.canPurchase}
          className={classes.OrderButton}
          onClick={props.order}
        >
          Order Now
        </button>
      </div>
    </>
  );
};

export default BuildControls;
