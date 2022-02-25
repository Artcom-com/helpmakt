import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SheetsProvider from '../store/SheetsProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SheetsProvider>
      <Component {...pageProps} />
    </SheetsProvider>
  );
}

export default MyApp;
