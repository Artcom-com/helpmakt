import React from 'react';
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
      <Select />
      <Field fieldId="location-name" labelName="Location name" placeholder="Nome da loja" />
      <Field fieldId="date-id" labelName="Data" type="date" placeholder="" />
    </form>
  );
};

export default Form;
