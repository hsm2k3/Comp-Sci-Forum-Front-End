import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSections } from '../redux/actionCreators/sections_actionCreators';
import SectionsList from './SectionsList';
import {FormControl} from "react-bootstrap";
// import PropTypes from 'prop-types';


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterString: '',

        }
    }

    componentDidMount(){
        const { getSections } = this.props;
        getSections();
    }

    filterStringChange = event => {
        this.setState({filterString: event.target.value});
    };

    filterSectionList = sections => {
        let { filterString } = this.state;
        filterString = filterString.toUpperCase();

        return sections.filter(section =>
            (section.code !== '') ?
                section.code.toUpperCase().includes(filterString)
                : section.title.toUpperCase().includes(filterString))
        ;
    };

    render(){
        const { sections } = this.props.sections;

        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>
                <FormControl type="text" placeholder="Search Sections" className="mr-sm-2" onChange={this.filterStringChange}/>
                <ul>
                    { sections && <SectionsList sections={this.filterSectionList(sections)} /> }
                </ul>
                {

                }
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
