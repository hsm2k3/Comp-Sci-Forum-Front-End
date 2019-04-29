import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        const {match} = this.props;

        return(
            <div id={"SectionsPage"}>
                <h1>Sections Page: {match.params.section}</h1>
            </div>
        );
    };
}

// SectionsPage.propTypes = {
//
// };

export default SectionsPage;