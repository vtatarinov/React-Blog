import React from 'react';
import {Button} from 'react-bootstrap';

export default class Auth extends React.Component {
    render() {
        return (<form>
            <div className="form-group">
                <label htmlFor="email" className="control-label">E-mail:</label>
                <input type="email" className="form-control" name="email" placeholder="Your e-mail"/>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="control-label">Password:</label>
                <input type="password" className="form-control" name="password" placeholder="Your password"/>
            </div>
        </form>);
    }
}