import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    };

    render(){
        return(
            <Navbar id={"NavigationBar"} bg="dark" variant="dark">
                <Navbar.Brand>Comp_CSI</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to={"/"} className={"nav-link"} exact={true}>Home</NavLink>
                    <NavLink to={"/dash"} className={"nav-link"}>Dash</NavLink>
                    <NavLink to={"/about"} className={"nav-link"}>About</NavLink>
                    <NavLink to={"/login"} className={"nav-link"}>Login</NavLink>
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