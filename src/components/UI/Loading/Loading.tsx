import React from 'react';
import classes from './Loading.module.css';

const Loading = (): JSX.Element => (
  <div className={classes['lds-ripple']}>
    <div />
    <div />
  </div>
);

export default Loading;
