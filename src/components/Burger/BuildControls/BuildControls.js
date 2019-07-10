import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: ${props.price.toFixed(2)}</p>
            {controls.map(control => {
                return <BuildControl 
                less={() => {props.less(control.type)}}
                more={() => {props.more(control.type)}}
                label={control.label} 
                key={control.label}
                disabled={props.disabled[control.type]}/>
            })}
            <button 
                onClick={props.purchasing}
                disabled={!props.purchaseable} 
                className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default buildControls