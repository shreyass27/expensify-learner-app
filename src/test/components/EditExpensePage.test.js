import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let history, startEditExpense, startRemoveExpense, wrapper;

beforeEach(() => {
    history = { push: jest.fn() };
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
        expense={expenses[1]}
        history={history}
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}/>);
});

test('should render EditExpensePage properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle Edit expense properly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});


test('should handle remove expense properly', () => {
    wrapper.find('button').prop('onClick')();
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
