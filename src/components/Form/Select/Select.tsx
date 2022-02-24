import React, { useState } from 'react';
import classes from './Select.module.css';
import globalFormClasses from '../Form.module.css';

const Select = (): JSX.Element => {
  const [selected, setSelected] = useState<string>('');

  console.log(selected);

  return (
    <div className={globalFormClasses.formDiv}>
      <p className={classes.label}>Operação</p>
      <select id="select-operation" className={classes.select} defaultValue="value1" onChange={(e) => setSelected(e.target.value)}>
        <option value="defaultValue">Selecionar</option>
        <option value="callDuration">Duração das ligações [ADS]</option>
        <option value="callHours">Horário das ligações [Orgânico]</option>
      </select>
    </div>
  );
};

export default Select;
