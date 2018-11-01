import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from  './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
           <h4>Edit Expense: {props.expense.description}</h4> 
        <ExpenseForm 
            expense={props.expense}
            onSubmit={
                (expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                    console.log('EditExpensePage onSubmit', expense);
                }
            }
        />
        <button onClick={() => {
            console.log('EditExpensePage removeExpense', props.expense);
            props.dispatch(removeExpense({id: props.expense.id}));
            props.history.push('/');
        }}>Remove</button>
        </div>
    );

}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => props.match.params.id === expense.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);