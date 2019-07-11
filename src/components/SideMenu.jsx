import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSections } from '../redux/actionCreators/sections_actionCreators';
import SectionsList from './SectionsList';
import {FormControl} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterString: '',
            oneResult: false
        }
    }

    componentDidMount(){
        //  get sections data
        this.props.getSections();

        const sideMenuFilter = document.getElementById("sideMenuFilter");
        sideMenuFilter.focus();
        sideMenuFilter.addEventListener("keypress", event => {
            if(event.key === "Enter"){
                //  put code to go to page of one section result
                console.log("Enter hit!");
            }
        }, false);
    }

    filterStringChange = event => {
        this.setState({filterString: event.target.value});
    };

    filterSectionList = sections => {
        let { filterString, oneResult } = this.state;
        filterString = filterString.toUpperCase();

        const filteredSections = sections.filter(section =>
            (section.code !== '') ?
                section.code.toUpperCase().includes(filterString)
                : section.title.toUpperCase().includes(filterString))
        ;

        //  check if one result from filter
        if(!oneResult && filteredSections.length === 1) this.setState({oneResult: true});
        if(oneResult && filteredSections.length !== 1) this.setState({oneResult: false});

        return filteredSections;
    };

    render(){
        const { sections } = this.props.sections;
        const { oneResult } = this.state;

        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>
                <FormControl type="text" placeholder="Search Sections" id="sideMenuFilter" className="mr-sm-2" onChange={this.filterStringChange}/>
                <ul>
                    { sections && <SectionsList sections={this.filterSectionList(sections)} oneResult={oneResult} /> }
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
