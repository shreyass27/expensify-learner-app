import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import momemt from 'moment';

test('should render ExpenseForm Correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm Correctly with Expense Data', () => {
    const expense = {...expenses[1]};
    const wrapper = shallow(<ExpenseForm {...expense} />);

    expect(wrapper).toMatchSnapshot();
});





test('should render error for invalid ExpenseForm submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set decription on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'Cooool'
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('description')).toEqual(value);
});

test('should set notes on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'Cooool'
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('note')).toEqual(value);
});

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.12';

    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });

    expect(wrapper.state('amount')).toEqual(value);
});

test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.1212';

    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });

    expect(wrapper.state('amount')).not.toEqual(value);
});

test('should call onSubmit props for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toEqual(0);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        ...expenses[0],
        id: undefined
    });
}); 


test('should set date on date picker change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = momemt();

    // Calling onDateChange SingleDatePicker to call onDateChange() function in ExpenseForm
    // wrapper.find('SingleDatePicker').simulate('dateChange',now);

    // Calling prop onDateChange of SingleDatePicker to call onDateChange() function in ExpenseForm
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);


    expect(wrapper.state('createdAt')).toEqual(now);
}); 

test('should set calender focus to true', () => {
    const wrapper = shallow(<ExpenseForm />);
    let focused = true;

    wrapper.find('SingleDatePicker').simulate('focusChange', { focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);

    focused = false;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);
}); 

