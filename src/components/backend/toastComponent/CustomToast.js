import React, { useState} from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function CustomToast({ header }) {

    const [show, changeShow] = useState(true);

    return ({ children }) => (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={show} onClose={() => changeShow(false)} delay={3000} autohide>
                <Toast.Header>{ header }</Toast.Header>
                <Toast.Body>{ children }</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default CustomToast