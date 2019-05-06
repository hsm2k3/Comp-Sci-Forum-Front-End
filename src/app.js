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
import SectionsPage from './components/pages/SectionsPage';
import ThreadsPage from './components/pages/ThreadsPage';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch("/api/auth")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                this.setState({user: data, isLoading: false});
                console.log(data);
            })
            .catch(error => {
                setTimeout(() => {
                    this.setState({isLoading: false})
                }, 1000);
            }
        )
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
                              <Route path={"/sections/:section"} component={SectionsPage} exact={true}/>
                              <Route path={"/sections/:section/:thread"} component={ThreadsPage}/>
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
