import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './components/MainPgComponents/NavTabs/NavTabs';
// import Navbar from './components/MainPgComponents/NavBar/Navbar';
import LoginPg from './pages/loginPg';
import CollectionsPg from './pages/collectionsPg';
import MainPg from './pages/mainPg';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import './App.css';
// import Portfolio from './components/PortfolioContainer';

function App() {
    return (

        <Router>
          <div className="mainContainer"> 
            <NavTabs />
            <Route exact path='/' component= {LoginPg} />
            <Route exact path='/Profile' component={MainPg} />
            <Route exact path='/CollectionsPg' component={CollectionsPg} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/Contact' component={Contact} />
          </div>
        </Router>  

    );
  }


export default App;
