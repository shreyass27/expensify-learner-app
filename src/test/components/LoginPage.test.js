import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render Header Correctly', () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper).toMatchSnapshot();
});



test('should call loggout Correctly', () => {
    const googleLogin = jest.fn();
    const wrapper = shallow(<LoginPage googleLogin={googleLogin} />);
    wrapper.find('button').at(1).simulate('click');
    expect(googleLogin).toHaveBeenCalled();
});