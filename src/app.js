import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from './store/configureStore';
import AppRouter from './routers/AppRoute';
import { startSetExpenses } from './actions/expenses';
 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import './firebase/firebase';
import './playground/promises';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>  
);

ReactDOM.render(<p> Loading Bro...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(
  () => ReactDOM.render(jsx, document.getElementById('app'))
);
