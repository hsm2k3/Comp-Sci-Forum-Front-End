import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
                        <NavLink className={"nav-link sub-nav-link"}>Tab_1</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Tab_2</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Tab_3</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Tab_4</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Tab_5</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Tab_6</NavLink>
                        <NavLink className={"nav-link sub-nav-link add-nav-link"}><FontAwesomeIcon icon={faPlus}/></NavLink>
                    </ul>
                </nav>
                <div className="dash-body">
                    <h1>Dash Page</h1>
                </div>

            </div>
        );
    };
}

// DashPage.propTypes = {
//
// };

export default DashPage;