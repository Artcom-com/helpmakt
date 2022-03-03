import { useRouter } from 'next/router';
import React, { useState, ChangeEvent, useContext } from 'react';
import api from '../../services/api';
import SheetsContext from '../../store/SheetsContext';
import { Calls } from '../../types/callsHours';
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
  const [locationName, setLocationName] = useState<string>('');
  const [calls, setCalls] = useState<Calls[]>([]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [operation, setOperation] = useState<OperationType>('default');

  const sheetsCtx = useContext(SheetsContext);
  const { push } = useRouter();

  const handleSetCalls = (call: Calls): void => {
    calls.push(call);
    setCalls([...(calls as Calls[])]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (validationField(sheetId) || validationField(locationName) || operation === 'default') {
      setHasError(true);
      setErrorMessage('Necessário preencher todos os campos.');
    }

    if (date === undefined) {
      setHasError(true);
      setErrorMessage('Necessário preencher todos os campos.');
      return;
    }

    if (operation === 'callHours' && !calls) {
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
      calls,
      locationName,
    });

    if (operation === 'callDuration') push('/convert', '/convert');
    if (operation === 'callHours') {
      await api.post('/table', {
        docId: sheetId,
        tableName,
        data: {
          month: date as unknown as string,
          locationName,
          calls,
        },
      });
    }
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
          setFunction={setLocationName}
        />
      )}
      {operation === 'callHours' && (
        <SendCSV
          handleSetCalls={handleSetCalls}
          setErrorMessage={setErrorMessage}
          setHasError={setHasError}
        />
      )}

      <button type="submit" className={classes.button}>Converter</button>
    </form>
  );
};

export default Form;
