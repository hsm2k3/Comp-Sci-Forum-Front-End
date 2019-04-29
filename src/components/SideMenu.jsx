import React, {Component} from 'react';
import SectionsList from './SectionsList';
// import PropTypes from 'prop-types';


class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections: []
        };
    }

    componentDidMount(){
        fetch('/api/sections')
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ sections:data });
            })
            .catch(() => console.error('SideMenu: unable to fetch data'))
    }

    render(){
        const { sections } = this.state;

        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>
                <ul>
                { this.state.sections && <SectionsList sections={sections} /> }
                </ul>
            </aside>
        );
    };
}

// SideMenu.propTypes = {
//
// };


export default SideMenu;