import { useRouter } from 'next/router';
import React, { useState, ChangeEvent, useContext } from 'react';
import SheetsContext from '../../store/SheetsContext';
import { validationField } from '../../validations/validations';
import SendCSV from '../SendCSV/SendCSV';
import Field from './Field/Field';
import classes from './Form.module.css';
import HasError from './HasError/HasError';
import Select from './Select/Select';

export type OperationType = 'default' | 'callHours' | 'callDuration'

const Form = (): JSX.Element => {
  const [sheetId, setSheetId] = useState<string>('');
  const [tableName, setTableName] = useState<string>('');
  const [locationName, setLocationname] = useState<string>('');
  const [csv, setCSV] = useState<File | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [operation, setOperation] = useState<OperationType>('default');

  const sheetsCtx = useContext(SheetsContext);
  const { push } = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (validationField(sheetId) || validationField(tableName) || validationField(locationName) || operation === 'default') {
      setHasError(true);
      setErrorMessage('Necessário preencher todos os campos.');
    }

    if (date === undefined) {
      setHasError(true);
      setErrorMessage('Necessário preencher todos os campos.');
      return;
    }

    if (operation === 'callHours' && !csv) {
      setHasError(true);
      setErrorMessage('Necessário preencher todos os campos.');
      return;
    }

    if (operation === 'default') {
      setHasError(true);
      setErrorMessage('Selecione uma operação');
      return;
    }

    sheetsCtx.handleAddSheetInfos({
      sheetId,
      tableName,
      operation,
      date,
      csv,
      locationName,
    });

    push('/convert', '/convert');
  };

  const handleChangeOperation = (e: ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    setOperation(e.target.value as OperationType);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {hasError && <HasError errorMessage={errorMessage} />}
      <Field
        fieldId="sheet-id"
        labelName="ID da planilhas"
        placeholder="ID gerado ao compartilhar uma planilha do Google"
        setFunction={setSheetId}
      />
      <Field
        fieldId="table-name"
        labelName="Nome da tabela"
        placeholder="Google ADS - Campanha EX"
        setFunction={setTableName}
      />
      <Field
        fieldId="date-id"
        labelName="Data"
        type="date"
        placeholder=""
        setFunction={setDate}
      />
      <Select handleChangeOperation={handleChangeOperation} />
      {operation === 'callDuration' && (
        <Field
          fieldId="location-name"
          labelName="Location name"
          placeholder="Nome da loja"
          setFunction={setLocationname}
        />
      )}
      {operation === 'callHours' && (
        <SendCSV
          setCSV={setCSV}
          setErrorMessage={setErrorMessage}
          setHasError={setHasError}
        />
      )}

      <button type="submit" className={classes.button}>Converter</button>
    </form>
  );
};

export default Form;
