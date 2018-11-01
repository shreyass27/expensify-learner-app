import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
        { props.isAdmin && <h4>Is Priveledged</h4>}
    </div>
);

const withAdminWaring = (WrappedCpmponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a priveledged info. Please do not share</p>}
            <WrappedCpmponent {...props} />
        </div>
    )
};



const requireAuthentication = (WrappedCpmponent) => {
    return (props) => (
        <div>
            {props.isAuth ? ( <WrappedCpmponent {...props} /> ) : 
            (<p> The User is not Authenticated. Please Login </p>)}
            
        </div>
    )
};

const AdminInfo = withAdminWaring(Info);
const AuthenticatedInfo = requireAuthentication(Info);

ReactDOM.render( <AuthenticatedInfo isAuth={true} info="This is for Authenticated Only" /> , document.getElementById('app'))