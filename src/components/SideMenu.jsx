import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSections } from '../redux/actionCreators';
import SectionsList from './SectionsList';
// import PropTypes from 'prop-types';


import store from '../redux/store';

class SideMenu extends Component {

    componentDidMount(){
        const { getSections } = this.props;
        getSections();

        console.log("componentDidMount: ",store.getState())
    }


    render(){
        const { sections } = this.props;

        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>
                <ul>
                { sections && <SectionsList sections={sections.sections} /> }
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

store.subscribe(state => console.log(state));

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);