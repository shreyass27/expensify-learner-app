import React from 'react';
import { NavLink } from  'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startEmailLogin } from '../actions/auth'



export class LoginPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({
            email
        }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState({
            password
        });
    }

    onEmailLogin = () => {
        this.props.emailLogin(
            this.state.email,
            this.state.password
        );
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" name="id" onChange={this.onEmailChange}/> 
                <input type="password" name="password"  onChange={this.onPasswordChange}/>
                <button onClick={this.onEmailLogin}>
                    Login
                </button>
                {/* onClick={props.login} */}
                <button onClick={this.props.googleLogin}>
                    Google Login
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        googleLogin: () => dispatch(startLogin()),
        emailLogin: (email, password) => dispatch(startEmailLogin(email, password))
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
