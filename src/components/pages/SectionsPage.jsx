import React, {Component, Fragment} from 'react';
import ThreadsList from '../ThreadsList';
import SectionsPageHeader from '../SectionsPageHeader';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            section: [],
        };
    }

    componentDidMount() {
        const section = this.props.match.params.section;

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
        
    getCurrentState = () => {
        let section = {...this.state.section};
        return section;
    };

    render(){
        const section = this.getCurrentState();
          console.log('testing', section);

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

export default SectionsPage;