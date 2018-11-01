import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses'
import ExpenseItemList from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h3> Expense List </h3>
        {
            props.expenses.map(
                expense => <ExpenseItemList key={expense.id} {...expense} />
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
