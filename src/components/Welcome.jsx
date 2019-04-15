import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Welcome = () => {
    return(
        <Jumbotron>
            <h1>Welcome to Comp_CSI</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
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