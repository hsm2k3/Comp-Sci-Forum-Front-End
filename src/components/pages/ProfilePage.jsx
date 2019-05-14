import React, {Component} from 'react';
import ComingSoon from '../ComingSoon';
// import PropTypes from 'prop-types';

class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render(){
        return(
            <div id={"ProfilePage"}>
                <ComingSoon page={"Profile Page"}/>
            </div>
        );
    };
}

// ProfilePage.propTypes = {
//
// };

export default ProfilePage;