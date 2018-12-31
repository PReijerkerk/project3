import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './Components/MainPgComponents/NavTabs/NavTabs';
// import Navbar from './Components/MainPgComponents/NavBar/Navbar';
import LoginPg from './pages/LoginPg';
import CollectionsPg from './pages/CollectionsPg';
import MainPg from './pages/MainPg';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './App.css';
// import Portfolio from './Components/PortfolioContainer';

function App() {
    return (
        <Router>
          <div>
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
