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
        const section = this.props.match.params.section;

        this.fetchSectionData('code',section);
        //  if section doesn't have code, search by title
        if(!this.state.section)
            this.fetchSectionData('title',section);
    }

    componentDidUpdate(prevProps) {
        const section = this.props.match.params.section;
        const prevSection = prevProps.match.params.section;

        if (section !== prevSection) {

            this.fetchSectionData('code',section);
            console.log(`%c beforeIf`,'color:orange',this.state.section);
            if(!this.state.section) {
                console.log(`%c afterIf`, 'color:orange', this.state.section);
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
                console.log(`%c section:${searchAttribute}Fetch`,'color:orange',data);
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