import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    { 
        description = '',
        note = '',
        amount = 0,
        createdAt  = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const removeExpense = (
    { id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const initialExpenseState = [];

const expenseReducer = (state = initialExpenseState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if ( expense.id == action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                return expense;
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default: 
            return state;
    }
}

const setFilterText = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const initialFilterState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  };

const filterReducers = (state = initialFilterState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 



store.subscribe(
    () => {
        console.log(store.getState());
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    }
);

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 125}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 50, createdAt: 332}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { description: 'Cold Coffee', amount: 75 }));
// store.dispatch(setFilterText('rent  '));

store.dispatch(setStartDate(123));
store.dispatch(setEndDate(333));

store.dispatch(sortByDate());
store.dispatch(sortByAmount());



const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

