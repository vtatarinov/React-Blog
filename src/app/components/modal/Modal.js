import React from 'react';

import Auth from './Auth';

export default class Modal extends React.Component {
    render() {
        return (<div id="login" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Manage your account</h4>
                    </div>
                    <div className="modal-body">
                        <Auth />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-signup">Create account</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Sign In</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}