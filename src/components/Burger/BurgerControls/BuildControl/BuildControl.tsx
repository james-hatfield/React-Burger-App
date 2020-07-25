import React from "react";
import classes from "./BuildControl.module.css";
import { Condiment } from "../../../../data.types";

const BuildControl = (props: {
  condiment: Condiment;
  add: (arg0: Condiment) => void;
  delete: (arg0: Condiment) => void;
}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>
        {props.condiment[0].charAt(0).toUpperCase() +
          props.condiment[0].slice(1)}
      </div>
      <button
        disabled={props.condiment[1] === 0}
        onClick={() => props.delete(props.condiment)}
        className={classes.Less}
      >
        Less
      </button>
      <button
        onClick={() => props.add(props.condiment)}
        className={classes.More}
      >
        More
      </button>
    </div>
  );
};
export default BuildControl;
