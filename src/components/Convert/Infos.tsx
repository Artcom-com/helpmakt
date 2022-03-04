import React, { useContext } from 'react';
import SheetsContext from '../../store/SheetsContext';
import classes from './Infos.module.css';

const Infos = (): JSX.Element => {
  const sheetsCtx = useContext(SheetsContext);
  let operation = '';
  if (sheetsCtx.operation === 'callDuration') {
    operation = 'Duração de Chamadas [ADS]';
  } else {
    operation = 'Horário de Ligação [Orgânico]';
  }

  return (
    <div className={classes.infos}>
      <p className={classes['p-infos']}>{sheetsCtx.sheetId}</p>
      <p className={classes['p-infos']}>{sheetsCtx.tableName}</p>
      <p className={classes['p-infos']}>{operation}</p>
    </div>
  );
};

export default Infos;
