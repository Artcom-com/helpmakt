import React from 'react';
import classes from './HasError.module.css';

export interface HasErrorProps {
  errorMessage: string
}

const HasError = ({ errorMessage }: HasErrorProps): JSX.Element => (
  <div className={classes.hasError}>
    <p className={classes.error}>{errorMessage}</p>
  </div>
);

export default HasError;
