import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

class LoginPage extends Component {
    render(){
        return(
            <div id={"LoginPage"}>
                <Form>
                    <h2>Login</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark">
                        Login
                    </Button>
                </Form>
            </div>
        );
    };
}

// LoginPage.propTypes = {
//
// };

export default LoginPage;