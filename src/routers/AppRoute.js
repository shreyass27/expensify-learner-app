import React from 'react';
import { Router, BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBorad from '../components/ExpenseDashBorad';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
        {/* <Header></Header> */}
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDashBorad} exact />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage } />
                <Route component={NotFoundPage } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;