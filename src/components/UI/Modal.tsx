import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

export interface ModalProps {
  children: JSX.Element | JSX.Element[]
  setOnClose?: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalOverlay = ({ children }: ModalProps): JSX.Element => (
  <div className={classes.overlay}>
    {children}
  </div>
);

const Modal = ({ children }: ModalProps): JSX.Element => {
  const [portalElem, setPortalElem] = useState<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleSetMounted = () => {
      setMounted(true);
    };

    handleSetMounted();
  }, []);

  useEffect(() => {
    const handleSetPortalElem = () => {
      setPortalElem(document.getElementById('overlay'));
    };

    handleSetPortalElem();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {mounted ? ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElem as HTMLElement) : null}
    </>
  );
};

export default Modal;
