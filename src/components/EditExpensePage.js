import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from  './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
               <h4>Edit Expense: {this.props.expense.description}</h4> 
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => props.match.params.id === expense.id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense({ id }))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);