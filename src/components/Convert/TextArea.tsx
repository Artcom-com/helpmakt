import React, { ChangeEvent } from 'react';
import classes from './Infos.module.css';

export interface TextAreaProps {
  title: string
  setContent?: React.Dispatch<React.SetStateAction<string>>
  value?: string
}

const TextArea = ({ title, setContent, value }: TextAreaProps): JSX.Element => {
  const handleSetContent = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
    if (setContent !== undefined) {
      setContent(e.target.value);
    }
  };

  return (
    <div className={classes.text}>
      <h1 className={classes.title}>{title}</h1>
      <textarea
        className={classes.textArea}
        readOnly={setContent === undefined}
        onChange={(e) => {
          handleSetContent(e);
        }}
        value={value}
      />
    </div>
  );
};

export default TextArea;
