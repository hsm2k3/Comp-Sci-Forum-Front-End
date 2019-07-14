import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ComingSoon from '../ComingSoon';
// import PropTypes from 'prop-types';

class DashPage extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        return(
            <div id={"DashPage"}>
                <nav>
                    <ul className={"dash-nav"}>
                        <NavLink to="" className={"nav-link sub-nav-link"}>Tab_1</NavLink>
                        <NavLink to="" className={"nav-link sub-nav-link"}>Tab_2</NavLink>
                        <NavLink to="" className={"nav-link sub-nav-link"}>Tab_3</NavLink>
                        <NavLink to="" className={"nav-link sub-nav-link"}>Tab_4</NavLink>
                        <NavLink to="" className={"nav-link sub-nav-link"}>Tab_5</NavLink>
                        <NavLink to="" className={"nav-link sub-nav-link"}>Tab_6</NavLink>
                        <NavLink to="" className={"nav-link sub-nav-link add-nav-link"}><FontAwesomeIcon icon={faPlus}/></NavLink>
                    </ul>
                </nav>
                <ComingSoon page="Dash Page" />
            </div>
        );
    };
}

// DashPage.propTypes = {
//
// };

export default DashPage;