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
        setCurrentSection(this.props.match.params.section);
        // getThreads(section.currentSection.id);


        //If section returned code
        if(section.startsWith("CSC")){
            this.fetchSectionData('code',section);
        }

        //  if section doesn't have code, search by title
        else{
            this.fetchSectionData('title',section);
        }
            
    }

    componentDidUpdate(prevProps) {
        const section = this.props.match.params.section;
        const prevSection = prevProps.match.params.section;

        //If update needed
        if(section !== prevSection){
            //If section returned code
            if(section.startsWith("CSC")){
                this.fetchSectionData('code',section);
            }

            //  if section doesn't have code, search by title
            else{
                this.fetchSectionData('title',section);
            }
        }
    }

    fetchSectionData = (searchAttribute, searchValue) => {
        fetch(`/api/sections/${searchAttribute}/${searchValue}`)
            .then( res => {
                return res.json();
            })
            .then(data => {
                this.setState({ section: data });
            })
            .catch(() => console.error('SectionPage: unable to fetch data'))


    };


    render(){
        const section = this.props.sections;
        console.log(section);

        return(
            <div id={"SectionsPage"}>
                {
                    section &&
                        <Fragment>
                            <SectionsPageHeader section={section}/>
                            <ul className={'ThreadsList'}>
                                {
                                    section.Threads && <ThreadsList threads={section.Threads} section={section} />
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