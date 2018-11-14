
import getExpensesTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 on no expense', () => {
    expect(getExpensesTotal([])).toEqual(0);
});

test('should return Single expense amount', () => {
    expect(getExpensesTotal([expenses[1]])).toEqual(expenses[1].amount);
});

test('should return total amount of all expenses', () => {
    expect(getExpensesTotal(expenses)).toEqual(114195);
});

