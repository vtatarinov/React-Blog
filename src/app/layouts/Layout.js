import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/modal/Modal';

export default class Layout extends React.Component {
    render() {
        return (<div>
            <Header />
            <div className="container">
                {this.props.children}
            </div>
            <Footer />
            <Modal />
        </div>);
    }
}