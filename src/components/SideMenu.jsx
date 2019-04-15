import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    render(){
        return(
            <aside id={"SideMenu"}>Side Menu</aside>
        );
    };
}

SideMenu.propTypes = {

};

export default SideMenu;