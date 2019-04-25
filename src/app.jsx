import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './app/layouts/Layout';
import Home from './app/pages/Home';
import Blog from './app/pages/Blog';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';
import Users from './app/pages/Users';
import User from './app/pages/User';
import About from './app/pages/About';
import PageNotFound from './app/pages/PageNotFound';

import store from './app/stores/store';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="blog" component={Blog} />
            <Route path="posts" component={Posts}>
                <Route path=":postId" component={Post} />
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":commentId" component={Comment} />
            </Route>
            <Route path="users" component={Users}>
                <Route path=":userId" component={User} />
            </Route>
            <Route path="about" component={About} />
            <Route path="*" component={PageNotFound} />
        </Route>
        </Router>
    </Provider>, app);