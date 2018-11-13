import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import  { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        props.onSubmit(expense);
        props.history.push('/');
        console.log('AddExpensePage onSubmit', expense);
    }

    render() {
        return (
            <div>
                <h2>Add Expense</h2>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (expense) => dispatch(startAddExpense(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);