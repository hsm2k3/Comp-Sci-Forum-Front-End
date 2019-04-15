import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AboutPage extends Component {
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
            <div id={"AboutPage"}>
                <h1>About Page</h1>
                <ul>
                {
                    this.state.users.map((user) => {
                        return <li key={user.id}>{user.name}</li>;
                    })
                }
                </ul>
            </div>
        );
    };
}

AboutPage.propTypes = {

};

export default AboutPage;