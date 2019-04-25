import React from 'react';

export default class SidebarModuleElsewhere extends React.Component {
    render() {
        return (<div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ol>
        </div>);
    }
}