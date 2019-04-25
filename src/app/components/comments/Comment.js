import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component
{
    render() {
        return (<div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={`/posts/${this.props.postId}`}>
                        Post {this.props.postId}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <span><Link to="/users">{this.props.name}&nbsp;</Link></span>
                <span className="blog-post-meta">&nbsp;{this.props.email}</span>
                <p>{this.props.body}</p>
            </div>
        </div>);
    }
}