import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component
{
    render() {
        return (<div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.website}</p>
                <p><Link to={`/users/${this.props.id}/posts`}>Posts</Link></p>
                <p><Link to={`/users/${this.props.id}/comments`}>Comments</Link></p>
            </div>
        </div>);
    }
}