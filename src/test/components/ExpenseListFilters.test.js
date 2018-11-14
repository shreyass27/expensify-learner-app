import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/fillters';

let setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setFilterText = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setFilterText={setFilterText}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters properly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilters properly with altFilters', () => {
    wrapper.setProps({filters: altFilters});

    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'Bill';
    wrapper.find('input').prop('onChange')({ target: { value }});
    
    expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', { target: { value }}) ;
    
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: { value }}) ;
    
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should set start and end dates for filter', () => {
    const value = 'amount';
    const dateObject = { startDate: altFilters.startDate, endDate: altFilters.endDate }
    wrapper.find('DateRangePicker').prop('onDatesChange')(dateObject) ;
    
    expect(setStartDate).toHaveBeenLastCalledWith(dateObject.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dateObject.endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused) ;
    
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
});