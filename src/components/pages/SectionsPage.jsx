import React, {Component, Fragment} from 'react';
import ThreadsList from '../ThreadsList';
// import PropTypes from 'prop-types';

class SectionsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            section: {
                "1": null,
                "2": null
            },
            switch: false   //  switch: if false, use section["1"], else use section["2"]
        };                  //      this is used to get around state change being asynchronous
    }                       //      and unreliable, use toggleSwitch with two section states

    componentDidMount() {
        const section = this.props.match.params.section;

        this.fetchSectionData('code',section);

        console.log(this.state.section["1"],this.state.switch);

        //  if section doesn't have code, search by title
        if(!this.state.section["1"])
            this.fetchSectionData('title',section);
    }

    componentDidUpdate(prevProps) {
        const section = this.props.match.params.section;
        const prevSection = prevProps.match.params.section;

        if (section !== prevSection) {
            console.trace('section: ',section);
            this.fetchSectionData('code',section);
            //  if (switch false AND section[1] null) OR (switch true AND section[2] null)
            console.log('%c Before big if','color:orange');
            console.log(this.state.section);
            if((!this.state.switch && !this.state.section["1"]) || (this.state.switch && !this.state.section["2"])) {
                console.log('%c BIG IF STATEMENT','color:orange;');
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
                let section = {...this.state.section};
                console.trace(section);
                if(!this.state.switch)
                    section["1"] = data;
                else
                    section["2"] = data;
                this.setState({ section: section });
                this.nullifyNextState();
                this.toggleSwitch();
            })
            .catch(() => console.error('SectionPage: unable to fetch data'))
    };

    //  to get around state change being asynchronous and unreliable, use toggleSwitch with two section states
    toggleSwitch = () => {
        this.setState({switch: !this.state.switch});
    };

    nullifyNextState = () => {
        let section = {...this.state.section};
        if(this.state.switch)
            section["1"] = null;
        else
            section["2"] = null;
        this.setState({section:section});
    };

    getCurrentState = () => {
        let section = {...this.state.section};
        if(this.state.switch)
            return section["1"];
        else
            return section["2"];
    };

    render(){
        const section = this.getCurrentState();

        return(
            <div id={"SectionsPage"}>
                {
                    section &&
                        <Fragment>
                            <div className={'SectionsPageHeader'}>
                                <h3>{section.code}: {section.title}</h3>
                                <p>{section.description}</p>
                            </div>
                            <ThreadsList sectionName={section.code ? section.code : section.title}
                            sectionThreads={section.Threads}
                            />
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