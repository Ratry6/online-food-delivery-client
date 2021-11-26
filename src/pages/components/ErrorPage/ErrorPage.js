import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div>
            <div className="error-messages">
                <h1>OOooppss!</h1>
                <h2>404! Page Not Found</h2>

                <img className="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSJzo0TpV-oMdyXrwvYC6SXk1kw9r3x1Xiw&usqp=CAU" />
            </div>
            <div>
                <h4>The requested page was not found.</h4>
                <p>Please Check your interner connection  <FontAwesomeIcon icon={faWifi} /> or reload this page</p>
            </div>
        </div>
    );
};

export default ErrorPage;