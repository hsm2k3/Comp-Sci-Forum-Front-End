import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    };

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        );
    };
}

Navbar.propTypes = {

};

export default NavigationBar;