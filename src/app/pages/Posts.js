// import React from 'react';

// import PostsList from '../components/posts/PostsList';

// export default class Posts extends React.Component {
//     render() {
//         return (<div className="row my_row">
//         {(!this.props.children) ? (<PostsList />) : (this.props.children)}
//     </div>);
//     }
// }
import React from 'react';
import { connect } from 'react-redux';

import PostsList from '../components/posts/PostsList';
import { fetchPosts } from '../actions/postsActions';

@connect((store) => {
    return {
        posts: store.posts.posts,
        is_fetching: store.posts.is_fetching
    };
})

export default class Posts extends React.Component {
    constructor() {
        super(...arguments);

        this.props.dispatch(fetchPosts());
    }

    render() {
        return <div className="row my_row">
            {(!this.props.children) ? ((this.props.is_fetching) ? 'Pending...' : (<PostsList />)) : (this.props.children)}
        </div>;
    }
}