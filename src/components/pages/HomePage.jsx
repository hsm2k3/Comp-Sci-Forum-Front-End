import React, {Component} from 'react';
import Welcome from '../Welcome';
// import PropTypes from 'prop-types';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        return(
            <div id={"HomePage"}>
                <Welcome/>
            </div>
        );
    };
}

// HomePage.propTypes = {
//
// };

export default HomePage;