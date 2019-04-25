// import React from 'react';

// import CommentsList from '../components/comments/CommentsList';

// export default class Comments extends React.Component {
//     render() {
//         return (<div className="row my_row">
//             {(!this.props.children) ? (<CommentsList />) : (this.props.children)}
//         </div>);
//     }
// }
import React from 'react';
import { connect } from 'react-redux';

import CommentsList from '../components/comments/CommentsList';
import { fetchComments } from '../actions/commentsActions';

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_fetching: store.comments.is_fetching
    };
})

export default class Comments extends React.Component {
    constructor() {
        super(...arguments);

        this.props.dispatch(fetchComments());
    }

    render() {
        return <div className="row my_row">
            {(!this.props.children) ? ((this.props.is_fetching) ? 'Pending...' : (<CommentsList />)) : (this.props.children)}
        </div>;
    }
}