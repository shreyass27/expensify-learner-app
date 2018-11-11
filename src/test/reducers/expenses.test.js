import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set expenses array', () => {
    const action = expensesReducer(expenses,  { type: 'SET_EXPENSES', expenses});
    expect(action).toEqual(expenses);
});

test('should set up default expenses value', () => {
    const action = expensesReducer(undefined,  { type: '@@INIT' });
    expect(action).toEqual([]);
});

test('should remove expense by id', () => {
    const action = expensesReducer(expenses,  { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(action).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense if id not found', () => {
    const action = expensesReducer(expenses,  { type: 'REMOVE_EXPENSE', id: '-1'});
    expect(action).toEqual(expenses);
});

test('should add an expense', () => {
    const expenseItem = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        id: 3
    };
    const action = expensesReducer(expenses,  { type: 'ADD_EXPENSE', expense: expenseItem});
    const result = [...expenses, expenseItem]
    expect(action).toEqual(result);
});



test('should edit an expense with Id', () => {
    const expenseItem = {
        description: 'Coooll',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = expensesReducer(expenses,  { type: 'EDIT_EXPENSE', id: expenses[0].id ,updates: expenseItem});
    expect(action[0]).toEqual({
        ...expenseItem,
        id: expenses[0].id
    });
});


test('should not edit any expense when np id is found', () => {
    const expenseItem = {
        description: 'Coooll',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = expensesReducer(expenses,  { type: 'EDIT_EXPENSE', id: '-1' ,updates: expenseItem});
    expect(action).toEqual(expenses);
});