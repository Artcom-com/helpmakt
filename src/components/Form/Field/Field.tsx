import React from 'react';
import classes from './Field.module.css';

export interface FieldProps {
  fieldId: string
  labelName: string
  placeholder: string
  type?: React.HTMLInputTypeAttribute
}

const Field = ({
  fieldId, labelName, placeholder, type,
}: FieldProps): JSX.Element => (
  <div className={classes.formDiv}>
    <label htmlFor={fieldId} className={classes.label}>
      {labelName}
    </label>
    <input placeholder={placeholder} type={type || 'text'} className={classes.input} id={fieldId} />
  </div>
);

export default Field;
