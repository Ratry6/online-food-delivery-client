import React from 'react';
import { Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import './Login.css'
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const {signInUsingGoogle}= useAuth();
    const location = useLocation();
    const history =  useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from',location.state?.from );

    const handleSignIn = () =>{
        signInUsingGoogle()
        .then( result =>{
            history.push(redirect_uri);
        })
    }
return (
    <div className="login-form">
        <div className="welcome-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDocuRgp73_4T7MqDPbuIaefxKYnLINZVAg&usqp=CAU" />
        </div>
    <div className="signIn-form">
        <div>
            <h2 className="title"> Please fill in the information below   <FontAwesomeIcon icon={faAngleDoubleDown} /> </h2>
        </div>
        <Form onSubmit="">
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password" />
            </Form.Group>
            
            <button

                className="signIn-btn">Sign In</button>
        </Form>
        <p>New to this site? <Link to="/register">Create Account </Link></p>
        <div>or-</div>
        <button
            onClick={handleSignIn}
            className="google-btn">Google Sign In</button>
    </div>
</div>
    );
};

export default Login;