import React from 'react';
import Image from 'next/image';
import classes from './Modal.module.css';

export interface MessageProps {
  error?: string
  message?: string
}

const Message = ({ error, message }: MessageProps): JSX.Element => (
  <div className={`${classes.container} ${error ? classes.error : classes.success}`}>
    <Image src={error ? '/error.gif' : '/confetti.gif'} width="150px" height="150px" />
    <p className={classes.message}>{error || message}</p>
    <span className={classes.time} />
  </div>
);

export default Message;
