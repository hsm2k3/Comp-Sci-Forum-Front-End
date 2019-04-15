import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DashPage extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        return(
            <div id={"DashPage"}>
                <h1>Dash Page</h1>
            </div>
        );
    };
}

DashPage.propTypes = {

};

export default DashPage;