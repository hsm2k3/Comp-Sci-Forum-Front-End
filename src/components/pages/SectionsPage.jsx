import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { setCurrentSection } from '../../redux/actionCreators/sections_actionCreators';
import ThreadsList from '../ThreadsList';
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


        //If update needed
        if(section !== prevSection){
            this.props.setCurrentSection(section);
        }
    }


    render(){
        const { currentSection } = this.props;

        return(
            <div id={"SectionsPage"}>
                {
                    currentSection &&
                        <Fragment>
                            <SectionsPageHeader section={currentSection}/>
                            <div className={'SectionsPageBody'}>
                                <ul className={'ThreadsList'}>
                                    {
                                        currentSection.Threads && <ThreadsList section={currentSection} threads={currentSection.Threads} />
                                    }
                                </ul>
                                <div id={'ThreadsListEnd'}></div>
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
        threads: state.sections.threads
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentSection: (section) => dispatch(setCurrentSection(section))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsPage);