import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    grey: 'grey',
    blue: 'blue',
    white: 'white',
    black: 'black',
    yellow: 'yellow',
    error: 'red',
  },
  spacing: value => `${value * 2}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      basename="/Test-rent-cars"
    >
      <ThemeProvider
        theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
