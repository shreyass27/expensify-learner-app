import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up default filter value', () => {
    const state = filterReducer(undefined,  { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date', // date or amount
        startDate: moment().startOf('month') ,
        endDate: moment().endOf('month') 
      });
});


test('should set sort by to date', () => {
    const state = filterReducer(undefined,  { type: 'SORT_BY_DATE' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date', // date or amount
        startDate: moment().startOf('month') ,
        endDate: moment().endOf('month') 
      });
});


test('should set sort by to amount', () => {
    const currentState = {
        text: 'Cool',
        sortBy: 'date', // date or amount
        startDate: moment().startOf('month') ,
        endDate: moment().endOf('month') 
      };
    const state = filterReducer(currentState,  { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        ...currentState,
        sortBy: 'amount'
      });
});



test('should set filter text', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: undefined ,
        endDate: undefined
      };
    const state = filterReducer(currentState,  { type: 'SET_TEXT_FILTER', text: 'Water Bill' });
    expect(state).toEqual({
        text: 'Water Bill',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
      });
});



test('should set startDate', () => {
    const currentState = {
        text: 'Water Bill',
        sortBy: 'date', // date or amount
        startDate: undefined ,
        endDate: undefined
      };
    const state = filterReducer(currentState,  { type: 'SET_START_DATE', startDate: moment(0) });
    expect(state).toEqual({
        text: 'Water Bill',
        sortBy: 'date', // date or amount
        startDate: moment(0),
        endDate: undefined
      });
});



test('should set endDate', () => {
    const currentState = {
        text: 'Water Bill',
        sortBy: 'date', // date or amount
        startDate: undefined ,
        endDate: undefined
      };
    const state = filterReducer(currentState,  { type: 'SET_END_DATE', endDate: moment(0) });
    expect(state).toEqual({
        text: 'Water Bill',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: moment(0)
      });
});