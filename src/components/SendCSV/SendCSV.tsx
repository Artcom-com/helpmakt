/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import classes from './SendCSV.module.css';

export interface SendCSVProps {
  setCSV: React.Dispatch<React.SetStateAction<File | undefined>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
}

const SendCSV = ({ setCSV, setErrorMessage, setHasError }: SendCSVProps): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');

  const handleSetCSV = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.target.files) {
      setErrorMessage('Não foi possível enviar o CSV, tente novamente');
      setHasError(true);
    }

    e.target.files && setCSV(e.target.files[0]);
    e.target.files && setFileName(e.target.files[0].name);
    console.log((e.target.files && (await e.target.files[0].text()).split('\n')) || 'vazio');
  };
  return (
    <label htmlFor="csv" className={classes['label-area']}>
      <input type="file" accept=".csv" id="csv" name="csv" style={{ display: 'none' }} onChange={(e) => handleSetCSV(e)} />
      {fileName === '' ? 'Enviar CSV' : fileName}
      <div className={classes.img}>
        <Image src="/csv.svg" width="40px" height="40px" />
      </div>
    </label>
  );
};

export default SendCSV;
