import React from 'react';
import axios from 'axios';

import Post from './Post';

export default class PostsList extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            posts: []
        };

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                console.log(response);
                let { data } = response;

                this.setState({
                    posts: data
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render() {
        if(!this.state.posts.length)
            return <h3>Loading...</h3>;

        let posts = this.state.posts.map((post, index) => {
            return <Post key={index} {...post} />;
        });

        return (<div>
            <h2>Last posts</h2>
            {posts}
        </div>);
    }
}