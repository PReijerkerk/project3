import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './Components/MainPgComponents/NavTabs/NavTabs';
// import Navbar from './Components/MainPgComponents/NavBar/Navbar';
import LoginPg from './pages/loginPg';
import CollectionsPg from './pages/collectionsPg';
import MainPg from './pages/mainPg';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import './App.css';
// import Portfolio from './Components/PortfolioContainer';

function App() {
    return (

        <Router>
          <div className="mainContainer"> 
            <NavTabs />
            <Route exact path='/' component= {MainPg} />
            <Route exact path='/LoginPg' component={LoginPg} />
            <Route exact path='/CollectionsPg' component={CollectionsPg} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/Contact' component={Contact} />
          </div>
        </Router>  

    );
  }


export default App;
