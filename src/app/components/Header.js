import React from 'react';

import Nav from './header/Nav';

export default class Header extends React.Component {
    render() {
        const items = [
            {
                href: '/',
                title: 'Home',
                active: true
            },
            {
                href: '/blog',
                title: 'Blog',
                active: false
            },
            {
                href: '/posts',
                title: 'Posts',
                active: false
            },
            {
                href: '/comments',
                title: 'Comments',
                active: false
            },
            {
                href: '/users',
                title: 'Users',
                active: false
            },
            {
                href: '/about',
                title: 'About',
                active: false
            }
        ];

        return (<div className="blog-masthead navbar-fixed-top">
                <div className="container">
                    <Nav items={items} />
                </div>
            </div>);
    }

    componentDidMount() {
        console.log('Header done');
    }
}