/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent } from 'react';
import classes from './Field.module.css';

export interface FieldProps {
  fieldId: string
  labelName: string
  placeholder: string
  type?: React.HTMLInputTypeAttribute
  setFunction: React.Dispatch<React.SetStateAction<any>>
}

const Field = ({
  fieldId, labelName, placeholder, type, setFunction,
}: FieldProps): JSX.Element => {
  const handleSetField = (e: ChangeEvent<HTMLInputElement>): void => {
    setFunction(e.target.value);
  };
  return (
    <div className={classes.formDiv}>
      <label htmlFor={fieldId} className={classes.label}>
        {labelName}
      </label>
      <input placeholder={placeholder} onChange={(e) => handleSetField(e)} type={type || 'text'} className={classes.input} id={fieldId} />
    </div>
  );
};

export default Field;
