import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const expense = {
        description: 'Monthly Ret',
        note: 'asd',
        amount: 123,
        createdAt: 12312312
    };
    const action = addExpense(expense);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense
    })
});


// test('should setup add expense action object with default value', () => {
//     const updates = { notes: 'Coool'};
//     const action = addExpense( '123acdasa' ,updates);
    
//     expect(action).toEqual({
//         type: 'EDIT_EXPENSE',
//         id: '123acdasa',
//         updates
//     })
// });






















// const handleError = (error) => console.log('Error Occured', error)

// const addExpense = (expense) => ({
//     type: 'ADD_EXPENSE',
//     expense
// });

// export const startAddExpense = (expenseData = {}) => {
//     return (dispatch) => {
//         const {
//             description = '',
//             note = '',
//             amount = 0,
//             createdAt  = 0
//         } = expenseData;
//         const expense = { description, note, amount, createdAt };
//         return dataBase.ref('expenses').push(expense)
//             .then(
//                 (snapShot) => {
//                     console.log(snapShot);
//                     dispatch(addExpense({
//                         id: snapShot.key,
//                         ...expense
//                     }));
//                 }
//             )
//             .catch(handleError);

//     }

// }


// export const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// });



// export const startEditExpense = (id, updates) => {
//     return (dispatch) => {
//         return dataBase.ref(`expenses/${id}`).update(updates)
//             .then(
//                 (snapShot) => {
//                     console.log(snapShot);
//                     dispatch(editExpense(id, updates));
//                 }
//             )
//             .catch(handleError);

//     }

// }

// const removeExpense = ({ id }) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// });

// export const startRemoveExpense = ({ id }) => {
//     return ( dispatch ) => {
//         return dataBase.ref(`expenses/${id}`).remove()
//             .then(
//                 () => dispatch(removeExpense({id}))
//             )
//             .catch(handleError)
//     }
// }

// const setExpenses = (expenses) => ({
//     type: 'SET_EXPENSES',
//     expenses
// });

// export const startSetExpenses = () => {
//     return (dispatch) => {
//         return dataBase.ref('expenses').once('value')
//             .then( (snapShot) => {
//                 const expenses = [];
//                 snapShot.forEach((expense) => {
//                     expenses.push({
//                         id: expense.key,
//                         ...expense.val()
//                     })
//                 });
//                 dispatch(setExpenses(expenses));
//             })
//             .catch(handleError);
//     }
// }
