import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        return(
            <div id={"AboutPage"}>
                <h1>About Page</h1>
            </div>
        );
    };
}

AboutPage.propTypes = {

};

export default AboutPage;