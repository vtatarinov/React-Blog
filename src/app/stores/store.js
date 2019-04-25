import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//Все редюсеры
import { postsReducer } from '../reducers/postsReducer';
import { commentsReducer } from '../reducers/commentsReducer';
import { usersReducer } from '../reducers/usersReducer';

const middleware = applyMiddleware(promise(), logger());
//const middleware = applyMiddleware(logger());

const reducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
});

const store = createStore(reducers, middleware);
export default store;