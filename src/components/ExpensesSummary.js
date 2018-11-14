import React, { Fragment } from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary = (props) => (
    <div>
        <h3>Viewing {props.expensesLength} { props.expensesLength > 1 ? 'expenses': 'expense'} totalling {numeral(props.expensesTotal).format('$0,0.00')}</h3>
    </div>
)

const matchStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesLength: visibleExpenses.length,
        expensesTotal: ( getExpensesTotal(visibleExpenses) / 100 )
    }
};
export default connect(matchStateToProps)(ExpensesSummary)