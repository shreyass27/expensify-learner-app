import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expenseReducer from '../reducers/expenses';
import filterReducers from '../reducers/filters';
import authReducer from '../reducers/auth.reducer'

export default () => {

    const compomseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducers,
            auth: authReducer
        }),
        compomseEnhancers(applyMiddleware(thunk))
    );

    return store;
}