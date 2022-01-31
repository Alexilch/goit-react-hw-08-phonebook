import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// import { myAction, myAction2 } from './redux/actions';
import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// console.log(store);
// store.dispatch(myAction(15));
// store.dispatch(myAction2)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
