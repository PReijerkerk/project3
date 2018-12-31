import React from 'react';
// inital login card this is to be called in from the loginPg but for now it is directly pulled in here for testing
import Card from "./Components/LoginPgComponents/Card/Card";
//overview page( the homepage):
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTabs from "./Components/MainPgComponents/NavTabs/NavTabs";
// import Navbar from "./Components/MainPgComponents/NavBar/Navbar";
import LoginPg from "./pages/LoginPg";
import CollectionsPg from "./pages/CollectionsPg";
import MainPg from "./pages/MainPg";
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Carousel from "./Components/LoginPgComponents/Carousel/Carousel"
import './App.css';
// import PortfolioContainer from "./Components/PortfolioContainer";

// const App = () => <PortfolioContainer />;

// changed from stateful to stateless component Statefulness will be rendered like that in activity 11 in 
//react activities. Ours should be stateful possibly in the pages of collectionsPg.js and mainPg.js 
function App() {
    return (
      <div>
          <Router>
            <div>
              <NavTabs>
                <Route exact path="/" component= {MainPg} />
                <Route exact path="/LoginPg" component={LoginPg} />
                <Route exact path="/CollectionsPg" component={CollectionsPg} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/Contact" component={Contact} />
              </NavTabs>
            </div>
          </Router>  
        {/* <PortfolioContainer /> */}
        <Carousel />
        <Card />
      </div>
    );
  }


export default App;
