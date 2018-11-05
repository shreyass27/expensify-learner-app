import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import  { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm 
            onSubmit={
                (expense) => {
                    props.dispatch(startAddExpense(expense))
                    props.history.push('/');
                    console.log('AddExpensePage onSubmit', expense);
                }
            }
        />
    </div>
);

export default connect()(AddExpensePage);