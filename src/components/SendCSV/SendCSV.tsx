/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import classes from './SendCSV.module.css';
import { Calls } from '../../types/callsHours';

export interface SendCSVProps {
  handleSetCalls: (call: Calls) => void
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
}

const SendCSV = ({
  handleSetCalls, setErrorMessage, setHasError,
}: SendCSVProps): JSX.Element => {
  const [fileName, setFileName] = useState<string>('');

  const handleSetCSV = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.target.files) {
      setErrorMessage('Não foi possível enviar o CSV, tente novamente');
      setHasError(true);
    }

    e.target.files && setFileName(e.target.files[0].name);
    const rows = e.target.files && (await e.target.files[0].text()).split('\n');

    for (let i = 2; i < (rows as string[]).length - 1; i++) {
      const splitByAddress = rows?.[i].split('"');
      const locationName = splitByAddress?.[0].split(',')[1];
      const calls = splitByAddress?.[2].split(',').filter((call) => Number.isInteger(Number(call)) && call);
      const resultCalls = calls?.slice(15, 25);

      if (resultCalls !== undefined && locationName !== undefined) {
        handleSetCalls({
          locationName: (locationName as string),
          calls: (resultCalls as string[]),
        });

        e.target.files = null;
      }
    }
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
