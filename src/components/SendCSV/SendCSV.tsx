/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from 'next/image';
import classes from './SendCSV.module.css';

const SendCSV = (): JSX.Element => (
  <label htmlFor="csv" className={classes['label-area']}>
    <input type="file" accept=".csv" id="csv" name="csv" style={{ display: 'none' }} />
    Enviar CSV
    <div className={classes.img}>
      <Image src="/csv.svg" width="40px" height="40px" />
    </div>
  </label>
);

export default SendCSV;
