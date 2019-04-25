import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (<footer className="blog-footer">
            <p>Blog template built for <a href="http://getbootstrap.com" target="_blank">Bootstrap</a> by <a href="https://twitter.com/mdo" target="_blank">@mdo</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        </footer>);
    }

    componentDidMount() {
        console.log('Footer done');
        //alert('Welcome!');
    }
}