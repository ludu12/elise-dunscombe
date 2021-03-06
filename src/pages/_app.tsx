import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import '../styles/hamburger.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
