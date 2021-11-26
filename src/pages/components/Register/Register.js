import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div>
        <div className="login-form">
            <div>
                <div>
                    <h2 className="title">Register</h2>
                </div>
                <Form onSubmit="">
                   

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label style={{ marginRight: '10px' }} column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control  required type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label style={{ marginRight: '10px' }} column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control  type="password" required placeholder="Password" />
                        </Col>
                    </Form.Group>

                    
                  

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button className="signup-btn" type="submit">Sign up </Button>
                        </Col>
                    </Form.Group>

                    
                </Form>
                <p>Already have an account? <Link to="/login">Login </Link></p>
                <div>or-</div>
                <button
                    
                    className="google-signIn">Google Sign In</button>

            </div>
        </div>
    </div>
    );
};

export default Register;