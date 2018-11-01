import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = focusedInput => this.setState({ calendarFocused: focusedInput });

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=> {
                    this.props.dispatch(setFilterText(e.target.value))
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e)=> {
                    this.props.dispatch(e.target.value === 'date'? sortByDate() : sortByAmount())
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStatetoProps)(ExpenseListFilters);