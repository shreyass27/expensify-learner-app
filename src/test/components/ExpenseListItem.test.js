import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseItemList } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('shoould render expense item with given expense data', () => {
    const expense = expenses[2];
    const wrapper = shallow(<ExpenseItemList {...expense} />);

    expect(wrapper).toMatchSnapshot();
})