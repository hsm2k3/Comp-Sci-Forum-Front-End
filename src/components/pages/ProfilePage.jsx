import React, {Component} from 'react';
import {connect} from "react-redux";
import ComingSoon from '../ComingSoon';
// import PropTypes from 'prop-types';

class ProfilePage extends Component {

    componentDidMount() {
        const { loggedInUserID } = this.props;

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

const mapStateToProps = state => {
    return {
        loggedInUserID: state.users.loggedInUserID
    }
};

export default connect(mapStateToProps)(ProfilePage);