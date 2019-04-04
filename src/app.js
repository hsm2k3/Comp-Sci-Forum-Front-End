import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = { users: [] }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
          <div className="App">
              <h1>Users</h1>
              {
                  this.state.users.map(user => {
                     return <li key={user.id}>{user.name}</li>;
                  })
              }
          </div>
        );
  }
}

export default App;
