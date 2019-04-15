import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
                <h1>Profile Page</h1>
            </div>
        );
    };
}

ProfilePage.propTypes = {

};

export default ProfilePage;