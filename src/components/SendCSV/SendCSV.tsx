/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import classes from './SendCSV.module.css';

export interface SendCSVProps {
  setCalls: React.Dispatch<React.SetStateAction<string[] | undefined>>
  setLocationName: React.Dispatch<React.SetStateAction<string>>
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
}

const SendCSV = ({
  setCalls, setLocationName, setErrorMessage, setHasError,
}: SendCSVProps): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');

  const handleSetCSV = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.target.files) {
      setErrorMessage('Não foi possível enviar o CSV, tente novamente');
      setHasError(true);
    }

    e.target.files && setFileName(e.target.files[0].name);
    const rows = e.target.files && (await e.target.files[0].text()).split('\n');

    const t = rows?.[2];
    const splitByAddress = t?.split('"');
    const locationName = splitByAddress?.[0].split(',')[1];
    const calls = splitByAddress?.[2].split(',').filter((call) => Number.isInteger(Number(call)) && call);
    const resultCalls = calls?.slice(15, 25);
    console.log(locationName);
    console.log(resultCalls);
    setLocationName(locationName as string);
    setCalls(resultCalls);
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
