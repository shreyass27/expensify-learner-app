import { setEndDate, setStartDate, setFilterText, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should return set start date action object', () => {
    const action = setStartDate(moment(5));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(5)
    })
});



test('should return end date action object', () => {
    const action = setEndDate(moment(5));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(5)
    })
});

test('should return setFilterText action object with provided text', () => {
    const action = setFilterText('Name');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Name'
    });
});

test('should return setFilterText action object with no text provided', () => {
    const action = setFilterText();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should return sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should return sortByAmount action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});