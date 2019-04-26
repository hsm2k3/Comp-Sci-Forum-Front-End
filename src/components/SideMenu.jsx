import React, {Component} from 'react';
// import PropTypes from 'prop-types';


class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        fetch('/api/sections')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(() => console.error('SideMenu: unable to fetch data'))
    }

    render(){
        return(
            <aside id={"SideMenu"}>
                <h5>Sections</h5>

            </aside>
        );
    };
}

// SideMenu.propTypes = {
//
// };

export default SideMenu;