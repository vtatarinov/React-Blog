import React from 'react';
import axios from 'axios';

import CommentPage from '../components/comments/Comment';

export default class Comment extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            comment: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then((response) => {
                console.log(response);
                let { data } = response;

                this.setState({
                    comment: data
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render() {
        return (<div>
            {this.state.comment && <CommentPage {...this.state.comment} />}
        </div>);
    }
}