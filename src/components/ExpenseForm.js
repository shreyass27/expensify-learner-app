import React from 'react';
import momemt from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt:  props.expense ? momemt(props.expense.createdAt) : momemt(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(
            () => ({ description })
        )
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(
            () => ({ note })
        )
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(
                () => ({ amount })
            )
        }
    }

    onDateChange = (createdAt) => {
        if ( createdAt ) {
            this.setState({ createdAt });
        }
    }
    onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });

    onSubmit = (e) => {
        e.preventDefault();
        if ( !this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please add a description and amount'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: +(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus 
                        value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text " placeholder="Amount"
                    value={this.state.amount} onChange={this.onAmountChange} />
                    <br />
                    <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.calendarFocused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    id="createdAtCalendar" // PropTypes.string.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Please add a note if required"
                        value={this.state.note} onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
