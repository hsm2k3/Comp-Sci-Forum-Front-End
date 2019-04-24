import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        fetch('localhost:3001/api/sections')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(() => console.log('Something went wrong!'))
    }

    render(){
        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>

            </aside>
        );
    };
}

SideMenu.propTypes = {

};

export default SideMenu;