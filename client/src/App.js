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
  console.log("Anything it doesn't matter");
    return (

        <Router>
          <div className="mainContainer"> 
            <NavTabs />
            <Route exact path='/' component= {LoginPg} />
            <Route path='/profile' component={MainPg} />
            <Route path='/collectionsPg' component={CollectionsPg} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/contact' component={Contact} />
          </div>
        </Router>  

    );
  }


export default App;
