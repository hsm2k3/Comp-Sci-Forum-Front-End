import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

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
              <NavigationBar/>
              <HomePage/>
              <h1>Users</h1>
              {
                  this.state.users.map(user => {
                     return <li key={user.id}>{user.name}</li>;
                  })
              }
              <Footer/>
          </div>
        );
  }
}

export default App;
