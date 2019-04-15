import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SideMenu from './components/SideMenu';
import DashPage from "./components/DashPage";
import AboutPage from './components/AboutPage';

class App extends Component {

    state = { users: [] }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
          <Router>
              <div className="App">
                  <div className="page">
                      <NavigationBar/>
                      <div className="main">
                          <SideMenu/>
                          <Switch>
                              <Route path={"/"} component={HomePage} exact={true}/>
                              <Route path={"/dash"} component={DashPage}/>
                              <Route path={"/about"} component={AboutPage}/>
                              <Redirect to={"/"}/>
                          </Switch>
                      </div>
                  </div>
                  <Footer/>
              </div>
          </Router>
        );
  }
}

export default App;
