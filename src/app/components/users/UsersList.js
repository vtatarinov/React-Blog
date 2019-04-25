import React from 'react';
import axios from 'axios';

import User from './User';

export default class UsersList extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            users: []
        };

        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                console.log(response);
                let { data } = response;

                this.setState({
                    users: data
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render() {
        if(!this.state.users.length)
            return <h3>Loading...</h3>;

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user} />;
        });

        return (<div>
            <h2>Users</h2>
            {users}
        </div>);
    }
}