import React from 'react';
import type { NextPage } from 'next';
import Title from '../components/Title/Title';
import Form from '../components/Form/Form';
import classes from '../styles/Index.module.css';

const Home: NextPage = () => (
  <>
    <Title />
    <div className={classes.center}>
      <Form />
    </div>
  </>
);

export default Home;
