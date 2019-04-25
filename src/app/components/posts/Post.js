import React from 'react';
import { Link } from 'react-router';

export default class Post extends React.Component
{
    render() {
        return (<div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={`/posts/${this.props.id}`}>
                        {this.props.title}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p className="blog-post-meta">By <Link to={`/users/${this.props.userId}`}>{this.props.userId}</Link></p>
                <p>{this.props.body}</p>
                <p><Link to={`/posts/${this.props.id}/comments`}>Comments</Link></p>
            </div>
        </div>);
    }
}