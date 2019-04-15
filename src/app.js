import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SideMenu from './components/SideMenu';

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
              <div className="page">
                  <NavigationBar/>
                  <div className="main">
                      <SideMenu/>
                      <HomePage/>
                  </div>
              </div>
              <Footer/>
          </div>
        );
  }
}

export default App;
