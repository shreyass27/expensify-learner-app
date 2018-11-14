import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should display message for single expense',() => {
    const  wrapper = shallow(<ExpensesSummary expensesLength={1} expensesTotal={12} />)
    expect(wrapper).toMatchSnapshot();
});


test('should display message for multiple expense',() => {
    const  wrapper = shallow(<ExpensesSummary expensesLength={5} expensesTotal={132} />)
    expect(wrapper).toMatchSnapshot();
});
