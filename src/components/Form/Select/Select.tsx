import React, { ChangeEvent } from 'react';
import classes from './Select.module.css';
import globalFormClasses from '../Form.module.css';

export interface SelectProps {
  handleChangeOperation (e: ChangeEvent<HTMLSelectElement>): void
}

const Select = ({ handleChangeOperation }: SelectProps): JSX.Element => (
  <div className={globalFormClasses.formDiv}>
    <p className={classes.label}>Operação</p>
    <select id="select-operation" className={classes.select} defaultValue="value1" onChange={(e) => handleChangeOperation(e)}>
      <option value="default">Selecionar</option>
      <option value="callDuration">Duração das ligações [ADS]</option>
      <option value="callHours">Horário das ligações [Orgânico]</option>
    </select>
  </div>
);

export default Select;
