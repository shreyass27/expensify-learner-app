import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBorad from '../../components/ExpenseDashBorad';

test('should render ExpenseDashBorad Correctly', () => {
    const wrapper = shallow(<ExpenseDashBorad />);

    expect(wrapper).toMatchSnapshot();
});