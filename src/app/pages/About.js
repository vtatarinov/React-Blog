import React from 'react';

import SidebarModuleInset from '../components/blog/SidebarModuleInset';

export default class About extends React.Component {
    render() {
        return (<div className="row my_row">
            <div className="col-sm-8 blog-main">
                <h2>About</h2>
            </div>
            <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
                <SidebarModuleInset />
            </div>
        </div>);
    }
}