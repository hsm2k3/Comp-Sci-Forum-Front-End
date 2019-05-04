import React from 'react';
import {NavLink} from 'react-router-dom';
import {Jumbotron,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

const Welcome = () => {

    return(
        <Jumbotron>
            <h1>Welcome to Comp_CSI</h1>
            <p>
                This is the unofficial website of the Comp Sci department for the students, by the students.
                <br/>More Specifically Yussef, Alex, and Mike.
            </p>

            <div className={'WelcomeButtons'}>
                <NavLink to={'/about'} className={'nav-link'}>
                    <Button variant="dark">Learn more</Button>
                </NavLink>
                <NavLink to={'/login'} className={'nav-link'}>
                    <Button variant="dark" id={'goToLoginButton'}>Go To Login <FontAwesomeIcon icon={faCaretRight}/> </Button>
                </NavLink>
            </div>

        </Jumbotron>
    );

}

// Welcome.propTypes = {
//
// };

export default Welcome;