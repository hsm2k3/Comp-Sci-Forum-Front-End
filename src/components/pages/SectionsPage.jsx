import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { getThreads } from '../../redux/actionCreators/threads_actionCreators';
import { setCurrentSection } from '../../redux/actionCreators/sections_actionCreators';
import ThreadsList from '../ThreadsList';
import SectionsPageHeader from '../SectionsPageHeader';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {

    componentDidMount() {
        const section = this.props.match.params.section;
        const { setCurrentSection, getThreads } = this.props;

        setCurrentSection(section);

        // getThreads(section.currentSection.id);
    }

    componentDidUpdate(prevProps) {
        const section = this.props.match.params.section;
        const prevSection = prevProps.match.params.section;

        console.log("Compare prevSection and section: ", prevSection, section);

        //If update needed
        if(section !== prevSection){
            console.log("Run setCurrentSection");
            this.props.setCurrentSection(section);
        }
    }


    render(){
        const section = this.props;
        console.log(section);

        return(
            <div id={"SectionsPage"}>
                {
                    section && section.sections.currentSection &&
                        <Fragment>
                             <SectionsPageHeader section={section.sections.currentSection}/>
                            <ul className={'ThreadsList'}>
                                {
                                    section.sections.currentSection.Threads && <ThreadsList threads={section.sections.currentSection.Threads} />
                                }
                            </ul>
                        </Fragment>
                }
            </div>
        );
    };
}

// SectionsPage.propTypes = {
//
// };

const mapStateToProps = state => {
    return {
        sections: state.sections,
        currentSection: state.currentSection,
        threads: state.threads
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getThreads: (section) =>  dispatch(getThreads(section)),
        setCurrentSection: (section) => dispatch(setCurrentSection(section))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsPage);