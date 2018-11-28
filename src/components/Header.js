import React from 'react';
import { NavLink } from  'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth'

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" exact={true} activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={props.loggout}> LogOut </button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    loggout: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);
