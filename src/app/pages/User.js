import React from 'react';
import axios from 'axios';

import UserProfile from '../components/users/User';

export default class User extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            user: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
                console.log(response);
                let { data } = response;

                this.setState({
                    user: data
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render() {
        return (<div>
            {this.state.user && <UserProfile {...this.state.user} />}
        </div>);
    }
}