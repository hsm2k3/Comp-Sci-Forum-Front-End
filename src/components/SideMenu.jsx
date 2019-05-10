import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSections } from '../redux/actionCreators/sections_actionCreators';
import SectionsList from './SectionsList';
import {FormControl} from "react-bootstrap";
// import PropTypes from 'prop-types';


class SideMenu extends Component {

    componentDidMount(){
        const { getSections } = this.props;
        getSections();
    }


    render(){
        const { sections } = this.props.sections;

        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>
                <FormControl type="text" placeholder="Search Sections" className="mr-sm-2" />
                <ul>
                { sections && <SectionsList sections={sections} /> }
                </ul>
            </aside>
        );
    };
}

// SideMenu.propTypes = {
//
// };


const mapStateToProps = state => {
    return {
        sections: state.sections
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSections: () =>  dispatch(getSections())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);