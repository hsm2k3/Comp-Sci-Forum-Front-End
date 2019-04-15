import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                        <NavLink className={"nav-link sub-nav-link"}>Menu1</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Menu2</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Menu3</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Menu4</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Menu5</NavLink>
                        <NavLink className={"nav-link sub-nav-link"}>Menu6</NavLink>
                    </ul>
                </nav>
                <h1>Dash Page</h1>
            </div>
        );
    };
}

DashPage.propTypes = {

};

export default DashPage;