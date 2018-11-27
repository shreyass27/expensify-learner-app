import React from 'react';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBorad from '../components/ExpenseDashBorad';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'

export const history = createBrowserHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
        <Header></Header>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/dashboard" component={ExpenseDashBorad} exact />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage } />
                <Route component={NotFoundPage } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;