import React from 'react';
import { Link } from  'react-router-dom';
import moment from 'moment';

const ExpenseItemList = ({description, amount, createdAt, id, dispatch}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description} </h3></Link>
        <p>{amount} - {moment(createdAt).format('Do MMM, YYYY')}</p>
    </div>
);

export default ExpenseItemList;