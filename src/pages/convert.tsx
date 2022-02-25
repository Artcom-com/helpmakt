import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Infos from '../components/Convert/Infos';
import Title from '../components/Title/Title';
import SheetsContext from '../store/SheetsContext';
import ConvertForm from '../components/Convert/Form/ConvertForm';

const Convert = (): JSX.Element => {
  const sheetsCtx = useContext(SheetsContext);
  const { push } = useRouter();

  useEffect(() => {
    if (sheetsCtx.operation === 'default') {
      push('/', '/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetsCtx.operation]);

  return (
    <>
      <Title />
      <Infos />
      <ConvertForm />
    </>
  );
};

export default Convert;
