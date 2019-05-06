import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        fetch("/login", {
            method: "post",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => {
                console.log("handleSubmit",res);
                return res.json();
            })
            .then(user => {
                console.log("%cLogin-user-debug", "color: purple");
                console.log({user});
                if(user){
                    // this.props.getUser(user);
                    this.props.history.push("/profile");
                }
            })
            .catch(error => {
                this.setState({exists: true})

            });
    };

    handleEmailChange = event => {
        this.setState({
          email: event.target.value
        });
        console.log(event.target.value);
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
        console.log(event.target.value);
    };

    render(){
        return(
            <div id={"LoginPage"}>
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <h2>Login</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

// LoginPage.propTypes = {
//
// };

export default LoginPage;