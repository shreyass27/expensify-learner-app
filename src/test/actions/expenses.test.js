import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ 'id': '123acda' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123acda'
    })
});

test('should setup edit expense action object', () => {
    const updates = { notes: 'Coool'};
    const action = editExpense( '123acdasa' ,updates);
    
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123acdasa',
        updates
    })
});


test('should setup add expense action object with provided value', () => {
    const action = addExpense(expenses[2]);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});



test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then(
            (snapshot) => {
                expect(snapshot.val()).toEqual(expenseData);
                done();
        });
    });
});