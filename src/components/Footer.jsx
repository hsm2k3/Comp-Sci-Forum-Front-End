import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

const Footer = () => {
    return(
        <footer id={"Footer"}>
            <FontAwesomeIcon icon={faShoePrints}/>
            Footer
            <FontAwesomeIcon icon={faShoePrints}/>
        </footer>
    );
}

// Footer.propTypes = {
//
// };

export default Footer;