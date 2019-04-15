import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Welcome = () => {
    return(
        <Jumbotron>
            <h1>Welcome to Comp_CSI</h1>
            <p>
                This is the unofficial website of the Comp Sci department for the students, by the students.
                <br/>More Specifically Yussef, Alex, and Mike.
            </p>
            <p>
                <Button variant="dark">Learn more</Button>
            </p>
        </Jumbotron>
    );

}

Welcome.propTypes = {

};

export default Welcome;