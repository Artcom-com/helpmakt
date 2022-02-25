/* eslint-disable no-useless-concat */
/* eslint-disable no-restricted-syntax */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  average, countGreaterThan5minute, countLessThan1minute, countLessThan2minute, countLessThan3minute, countLessThan4minute, countLessThan5minute, countZero,
} from '../../../conversions/calcs';
import convert from '../../../conversions/convert';
import TextArea from '../TextArea';
import classes from './ConvertForm.module.css';

const ConvertForm = (): JSX.Element => {
  const [content, setContent] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [formalData, setFormalData] = useState<string>('');
  const { push } = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const arr: string[] = content.split('\n');

    const phoneDuration = arr.filter((item) => item.includes('minutos') || item.includes('minuto') || item.includes('minutes') || item.includes('minute') || item.includes('segundo') || item.includes('segundos') || item.includes('second') || item.includes('seconds'));

    const replaceStr: string[] = (phoneDuration as string[]).map((item) => `${item.replace('\r', '')},` + '\n');
    const passToCSv = convert(replaceStr);
    const resultAverage = average(replaceStr);
    const numberOfZero = countZero(replaceStr);
    const numberOfLessThan1Minute = countLessThan1minute(replaceStr);
    const numberOfLessThan2Minute = countLessThan2minute(replaceStr);
    const numberOfLessThan3Minute = countLessThan3minute(replaceStr);
    const numberOfLessThan4Minute = countLessThan4minute(replaceStr);
    const numberOfLessThan5Minute = countLessThan5minute(replaceStr);
    const numberOfGreaterThan5Minute = countGreaterThan5minute(replaceStr);

    setFormalData(`${resultAverage}\n${numberOfZero}\n${numberOfLessThan1Minute}\n${numberOfLessThan2Minute}\n${numberOfLessThan3Minute}\n${numberOfLessThan4Minute}\n${numberOfLessThan5Minute}\n${numberOfGreaterThan5Minute}`);
    let print = '';
    for (const str of passToCSv) {
      print += String(str);
    }
    setData(print);
  };

  const handleBackPage = (): void => {
    push('/', '/');
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSendToGSheet = (): void => {

  };

  return (

    <form onSubmit={handleSubmit} className={classes['convert-form']}>
      <div className={classes.buttonGroup}>
        <button type="button" onClick={handleBackPage} className={`${classes.btn} ${classes['btn-back']}`}>Voltar</button>
        <button type="submit" className={`${classes.btn} ${classes['btn-submit']}`}>Converter</button>
        {data !== '' && <button onClick={handleSendToGSheet} type="submit" className={`${classes.btn} ${classes['btn-submit']}`}>Enviar</button>}
      </div>
      <div className={classes['convert-text']}>
        <TextArea title="Entrada" setContent={setContent} value={content} />
        <TextArea title="Convertido em segundos" value={data} />
        <TextArea title="Dados" value={formalData} />
      </div>
    </form>
  );
};

export default ConvertForm;
