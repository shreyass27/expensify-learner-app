import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRoute';
 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>  
);

ReactDOM.render(jsx, document.getElementById('app'));
