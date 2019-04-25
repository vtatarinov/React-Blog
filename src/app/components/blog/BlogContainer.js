import React from 'react';

import BlogPost from './BlogPost';
import ButtonPager from './ButtonPager';

export default class BlogContainer extends React.Component {
    render() {
        let blogsMain = this.props.items.map(function(value, index) {
            return <BlogPost key={'prefix' + index} {...value} />;
        });
        return (<div className="col-sm-8 blog-main">
            {blogsMain}
            <ButtonPager />
        </div>);
    }
}