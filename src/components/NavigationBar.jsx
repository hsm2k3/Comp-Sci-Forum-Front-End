import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faKeyboard, faDna, faIdCard } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

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
                    <NavLink to={"/"} className={"nav-link"} exact={true}>
                        <FontAwesomeIcon icon={faHome}/>
                        Home
                    </NavLink>
                    <NavLink to={"/dash"} className={"nav-link"}>
                        <FontAwesomeIcon icon={faKeyboard}/>
                        Dash
                    </NavLink>
                    <NavLink to={"/about"} className={"nav-link"}>
                        <FontAwesomeIcon icon={faDna}/>
                        About
                    </NavLink>
                    <NavLink to={"/profile"} className={"nav-link"}>
                        <FontAwesomeIcon icon={faIdCard}/>
                        Profile
                    </NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <NavLink to={"/login"} className={"nav-link"}>
                        <FontAwesomeIcon icon={faUser}/>
                        Login
                    </NavLink>
                </Nav>
            </Navbar>
        );
    };
}

// Navbar.propTypes = {
//
// };

export default NavigationBar;