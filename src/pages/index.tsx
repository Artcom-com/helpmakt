import React from 'react';
import type { NextPage } from 'next';
import Title from '../components/Title/Title';
import Form from '../components/Form/Form';
import classes from '../styles/Index.module.css';
import Modal from '../components/UI/Modal';
import Message from '../components/UI/Message';

const Home: NextPage = () => (
  <>
    <Title />
    <div className={classes.center}>
      <Modal>
        <Message error="Error" />
      </Modal>
      <Form />
    </div>
  </>
);

export default Home;
