import React, {Component, Fragment} from 'react';
import ThreadsList from '../ThreadsList';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            section: null
        };
    }

    componentDidMount() {
        this.fetchSectionData();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.section !== prevProps.match.params.section) {
            this.fetchSectionData();
        }
    }

    fetchSectionData = () => {
        fetch(`/api/sections/code/${this.props.match.params.section}`)
            .then( res => {
                return res.json();
            })
            .then(data => {
                this.setState({ section: data});
            })
            .catch(() => console.error('SectionPage: unable to fetch data'))
    };

    render(){
        const { section } = this.state;

        return(
            <div id={"SectionsPage"}>
                {
                    section &&
                        <Fragment>
                            <div className={'SectionsPageHeader'}>
                                <h3>{section.code}: {section.title}</h3>
                                <p>{section.description}</p>
                            </div>
                            <ThreadsList sectionName={section.code ? section.code : section.title}/>
                        </Fragment>
                }
            </div>
        );
    };
}

// SectionsPage.propTypes = {
//
// };

export default SectionsPage;