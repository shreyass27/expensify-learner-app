import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by startDate', () => {
  const filter = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment(0),
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filter)).toEqual([ expenses[2], expenses[0] ])
});


test('should filter by endDate', () => {
  const filter = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: moment(0)
  };

  expect(getVisibleExpenses(expenses, filter)).toEqual([ expenses[0], expenses[1] ]);
});




test('should sort by date', () => {
  const filter = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filter)).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});


test('should sort by amount', () => {
  const filter = {
    text: '',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  };

  expect(getVisibleExpenses(expenses, filter)).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});