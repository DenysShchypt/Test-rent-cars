import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { persistor, store } from './redux/store';

// const theme = {
//   colors: {
//     grey: 'grey',
//     blue: 'blue',
//     white: 'white',
//     black: 'black',
//     yellow: 'yellow',
//     error: 'red',
//   },
//   spacing: value => `${value * 2}px`,
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        basename="/test-rent-cars"
      >
        <PersistGate persistor={persistor}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
