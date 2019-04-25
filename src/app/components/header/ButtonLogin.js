import React from 'react';

export default class ButtonLogin extends React.Component {
    render() {
        return <button type="button" className="btn btn-primary btn-sm btn-login" data-toggle="modal" data-target="#login">Sign In</button>;
    }
}