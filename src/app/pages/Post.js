import React from 'react';
import axios from 'axios';

import PostPage from '../components/posts/Post';

export default class Post extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            post: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then((response) => {
                console.log(response);
                let { data } = response;

                this.setState({
                    post: data
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render() {
        return (<div>
            {this.state.post && <PostPage {...this.state.post} />}
        </div>);
    }
}