import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header Correctly', () => {
    const wrapper = shallow(<Header loggout={ () => {} } />);

    expect(wrapper).toMatchSnapshot();
});


test('should call loggout Correctly', () => {
    const loggout = jest.fn();
    const wrapper = shallow(<Header loggout={loggout} />);
    wrapper.find('button').simulate('click');
    expect(loggout).toHaveBeenCalled();
});