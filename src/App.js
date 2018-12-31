import React from 'react';
// inital login card this is to be called in from the loginPg but for now it is directly pulled in here for testing
import Card from "./Components/LoginPgComponents/Card/Card";
//overview page( the homepage):
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/MainPgComponents/NavBar/navBar';
import NavTabs from "./Components/MainPgComponents/NavTabs/NavTabs";
import LoginPg from "./pages/loginPg";
import collectionsPg from "./pages/collectionsPg";
import MainPg from "./pages/mainPg";
// import Footer from "./Components/CollectionsPgComponents"
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

        {/* the below is just for troubleshooting, should be called in above in the loginPg */}
      <div className="container">
        <Card/>
      </div>
      {/* <Footer/> */}
     </div>
    );
  }


export default App;
