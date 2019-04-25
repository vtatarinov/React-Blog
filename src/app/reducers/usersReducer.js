import * as Users from '../constants/usersConstants';

export function usersReducer(state = {users: [], is_fetching: false}, action) {
    console.log('!Action:', action.type);
    switch (action.type) {
        case Users.FETCH_USERS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Users.FETCH_USERS_FULFILLED: {
            //Условия
            state = {...state, is_fetching: false, users: action.payload.data};
            break;
        }

        case Users.FETCH_USERS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}