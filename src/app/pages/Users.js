// import React from 'react';

// import UsersList from '../components/users/UsersList';

// export default class Users extends React.Component {
//     render() {
//         return (<div className="row my_row">
//         {(!this.props.children) ? (<UsersList />) : (this.props.children)}
//     </div>);
//     }
// }
import React from 'react';
import { connect } from 'react-redux';

import UsersList from '../components/users/UsersList';
import { fetchUsers } from '../actions/usersActions';

@connect((store) => {
    return {
        users: store.users.users,
        is_fetching: store.users.is_fetching
    };
})

export default class Users extends React.Component {
    constructor() {
        super(...arguments);

        this.props.dispatch(fetchUsers());
    }

    render() {
        return <div className="row my_row">
            {(!this.props.children) ? ((this.props.is_fetching) ? 'Pending...' : (<UsersList />)) : (this.props.children)}
        </div>;
    }
}