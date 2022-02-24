import React from 'react';
import SendCSV from '../SendCSV/SendCSV';
import Field from './Field/Field';
import classes from './Form.module.css';
import Select from './Select/Select';

const Form = (): JSX.Element => {
  const t = 't';

  console.log(t);
  return (
    <form action="#" className={classes.form}>
      <Field fieldId="sheet-id" labelName="ID da planilhas" placeholder="ID gerado ao compartilhar uma planilha do Google" />
      <Field fieldId="table-name" labelName="Nome da tabela" placeholder="Google ADS - Campanha EX" />
      <Field fieldId="date-id" labelName="Data" type="date" placeholder="" />
      <Select />
      <Field fieldId="location-name" labelName="Location name" placeholder="Nome da loja" />
      <SendCSV />
    </form>
  );
};

export default Form;
