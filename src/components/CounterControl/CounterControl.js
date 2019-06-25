import React from 'react';

import classes from './CounterControl.module.css';

const counterControl = (props) => (
  <div className={classes["counter-control"]} onClick={props.onClick}>
    {props.label}
  </div>
);

export default counterControl;