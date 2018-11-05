import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducers from '../reducers/filters';
import thunk from 'redux-thunk';

export default () => {

    const compomseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducers
        }),
        compomseEnhancers(applyMiddleware(thunk))
    );

    return store;
}