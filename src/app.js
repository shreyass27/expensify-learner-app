import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRoute';
import { startSetExpenses } from './actions/expenses';
import { logOut, login  } from './actions/auth';
 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';

const store = configStore();

let hasRendered = false;
 const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
 }

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>  
);

ReactDOM.render(<p> Loading Bro...</p>, document.getElementById('app'));

 firebase.auth().onAuthStateChanged(
   (user) => {
     if (user) {
      store.dispatch(login(user.uid ));
      store.dispatch(startSetExpenses()).then(() => {
        renderApp();
      });
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
     } else {
      store.dispatch(logOut());
      renderApp();
       history.push('/');
     }
   }
 )