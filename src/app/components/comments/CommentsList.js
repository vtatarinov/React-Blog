import React from 'react';
import axios from 'axios';

import Comment from './Comment';

export default class CommentsList extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            comments: []
        };

        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then((response) => {
                console.log(response);
                let { data } = response;

                this.setState({
                    comments: data
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render() {
        if(!this.state.comments.length)
            return <h3>Loading...</h3>;

        let comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />;
        });

        return (<div>
            <h2>Last comments</h2>
            {comments}
        </div>);
    }
}