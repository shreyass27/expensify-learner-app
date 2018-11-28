import uuid from 'uuid';
import dataBase from '../firebase/firebase';

const handleError = (error) => console.log('Error Occured', error)

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt  = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return dataBase.ref(`users/${getState().auth.uid}/expenses`).push(expense)
            .then(
                (snapShot) => {
                    dispatch(addExpense({
                        id: snapShot.key,
                        ...expense
                    }));
                }
            )
            .catch(handleError);

    }

}


export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});



export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        return dataBase.ref(`users/${getState().auth.uid}/expenses/${id}`).update(updates)
            .then(
                (snapShot) => {
                    dispatch(editExpense(id, updates));
                }
            )
            .catch(handleError);

    }

}

export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id }) => {
    return ( dispatch, getState ) => {
        return dataBase.ref(`users/${getState().auth.uid}/expenses/${id}`).remove()
            .then(
                () => dispatch(removeExpense({id}))
            )
            .catch(handleError)
    }
}

const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        return dataBase.ref(`users/${getState().auth.uid}/expenses`).once('value')
            .then( (snapShot) => {
                const expenses = [];
                snapShot.forEach((expense) => {
                    expenses.push({
                        id: expense.key,
                        ...expense.val()
                    })
                });
                dispatch(setExpenses(expenses));
            })
            .catch(handleError);
    }
}
