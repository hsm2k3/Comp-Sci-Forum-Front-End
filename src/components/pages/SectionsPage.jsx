import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        const section = this.props.match.params.section;
        console.log(this.props);

        return(
            <div id={"SectionsPage"}>
                <h1>Sections Page: {section}</h1>
            </div>
        );
    };
}

// SectionsPage.propTypes = {
//
// };

export default SectionsPage;