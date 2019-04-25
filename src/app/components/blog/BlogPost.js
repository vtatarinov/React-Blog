import React from 'react';
import { Link } from 'react-router';

export default class BlogPost extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showMore: false
        };

        this.onChangeShowMore = this.onChangeShowMore.bind(this);
    }

    onChangeShowMore() {
        this.setState({
            showMore: !this.state.showMore
        });
    }

    render() {
        return (<div className="blog-post">
            <h2 className="blog-post-title">{this.props.header}</h2>
            <p className="blog-post-meta">{this.props.date} by <Link to={this.props.href}>{this.props.author}</Link></p>
            {this.state.showMore ? this.props.content : this.props.preview}
            <p><Link to="/comments">Comments</Link></p>
            <button class="btn btn-primary" onClick={this.onChangeShowMore}>{this.state.showMore ? 'Read Less ←': 'Read More →'}</button>
        </div>);
    }
}