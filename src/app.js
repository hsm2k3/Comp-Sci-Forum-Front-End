import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import SideMenu from './components/SideMenu';
import DashPage from "./components/pages/DashPage";
import AboutPage from './components/pages/AboutPage';
import ProfilePage from './components/pages/ProfilePage';
import LoginPage from './components/pages/LoginPage';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { }
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
                              <Route path={"/profile"} component={ProfilePage}/>
                              <Route path={"/login"} component={LoginPage}/>
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
