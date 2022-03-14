import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { HelmetComponent } from '../components/_helmet';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <React.Fragment>

      <HelmetComponent />
      <Component {...pageProps} /> 
    </React.Fragment>
  )
}

export default MyApp
