import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { setCurrentSection } from '../../redux/actionCreators/sections_actionCreators';
import { getThreads} from "../../redux/actionCreators/threads_actionCreators";
import ThreadsList from '../ThreadsList';
import ThreadsListNewItem from '../ThreadsListNewItem';
import SectionsPageHeader from '../SectionsPageHeader';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {

    componentDidMount() {
        const section = this.props.match.params.section;
        const { setCurrentSection } = this.props;

        if(section)
            setCurrentSection(section);

    }

    componentDidUpdate(prevProps) {
        const section = this.props.match.params.section;
        const prevSection = prevProps.match.params.section;
        const { setCurrentSection, currentSection, getThreads, threads } = this.props;


        //If update needed
        if(section !== prevSection){
            if(section){
                setCurrentSection(section);
                // getThreads(currentSection.id);
                console.log("called getThreads", threads);
            }
        }
    }

    render(){
        const { currentSection, threads } = this.props;
        if(threads) console.log("render",threads);

        return(
            <div id={"SectionsPage"}>
                {
                    currentSection  &&
                        <Fragment>
                            <SectionsPageHeader section={currentSection}/>
                            <ThreadsListNewItem/>
                            <div className={'SectionsPageBody'}>
                                <ul className={'ThreadsList'}>
                                    {
                                        threads && <ThreadsList />
                                    }
                                </ul>
                                <div id={'ThreadsListEnd'}/>
                            </div>
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
        sections: state.sections.sections,
        currentSection: state.sections.currentSection,
        threads: state.threads.threads
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentSection: (section) => dispatch(setCurrentSection(section)),
        getThreads: (section_id) => {dispatch(getThreads(section_id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsPage);