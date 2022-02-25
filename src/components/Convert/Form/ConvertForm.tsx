import React, { useState } from 'react';
import TextArea from '../TextArea';
import classes from './ConvertForm.module.css';

const ConvertForm = (): JSX.Element => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = (): void => {
    console.log(content);
  };

  return (

    <form onSubmit={handleSubmit} className={classes['convert-form']}>
      <div className={classes.buttonGroup}>
        <button type="button" className={`${classes.btn} ${classes['btn-back']}`}>Voltar</button>
        <button type="submit" className={`${classes.btn} ${classes['btn-submit']}`}>Converter</button>
        {content !== '' && <button type="submit" className={`${classes.btn} ${classes['btn-submit']}`}>Enviar</button>}
      </div>
      <div className={classes['convert-text']}>
        <TextArea title="Entrada" setContent={setContent} />
        <TextArea title="Convertido em segundos" />
        <TextArea title="Dados" />
      </div>
    </form>
  );
};

export default ConvertForm;
