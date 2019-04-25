import React from 'react';

export default class ButtonPager extends React.Component {
    render() {
        return (<nav aria-label="pager">
            <ul class="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
            </ul>
        </nav>);
    }
}