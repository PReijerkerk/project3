import React from 'react';
// inital login card:
import Card from "./components/LoginPgComponents/Card/card";
// navbar will hold the NavTabs listed below for main collections 
//overview page( the homepage):
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/MainPgComponents/NavBar/navBar';
import NavTabs from "./components/MainPgComponents/NavTabs";
import LoginPg from "./pages/loginPg";
import collectionsPg from "./pages/collectionsPg";
import MainPg from "./pages/mainPg";
import './App.css';

// changed from stateful to stateless component Statefulness will be rendered like that in activity 11 in 
//react activities. Ours should be stateful possibly in the pages of collectionsPg.js and mainPg.js 
function App() {
    return (
      <div>
        <NavBar>
          <Router>
            <div>
              <NavTabs>
                <Route exact path="/" component= {MainPg} />
                <Route exact path="/login" component={LoginPg} />
                <Route exact path="/collections" component={collectionsPg} />
              </NavTabs>
            </div>
          </Router>
        </NavBar>

        {/* <Card/> & <LoginPg/> below card should be the initial loginPg route and
        all other components should be disabled or hidden until a user
        either logins or creates an acct. This is only for testing on 
        what it will look like, please delete when route bove is working...
        Currently Cannot get LoginPg options to render... still working on this.*/}
        <Card/>
        <LoginPg/>
     </div>
    );
  }


export default App;
