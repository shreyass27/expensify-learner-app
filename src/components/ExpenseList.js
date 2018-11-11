import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses'
import ExpenseItemList from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p> No expense added yet.</p>
            ) : 
            (props.expenses.map(
                expense => <ExpenseItemList key={expense.id} {...expense} />
            ))
            
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
