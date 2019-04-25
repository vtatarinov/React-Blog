import React from 'react';
import { Link } from 'react-router';

import ButtonLogin from './ButtonLogin';

export default class Nav extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: this.props.items
        };
        
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(activeItemIndex) {
        this.setState(this.state.items.map((item, index) => {
            item.active = (index === activeItemIndex);
        }));
    }

    isActive(href) {
        return href === window.location.pathname;
    }

    render() {
        let itemsNav = this.state.items.map((item, index) => {
            item.active = this.isActive(item.href);
            return <Link className ={item.active ? 'blog-nav-item active' : 'blog-nav-item'} onClick={this.onClickItem.bind(this, index)} key={'prefix' + index} to={item.href}>{item.title}</Link>
        });
        return (<nav className="blog-nav">
            {itemsNav}
            <ButtonLogin />
        </nav>);
    }
}