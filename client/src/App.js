import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import LoggedInNavTabs from './components/MainPgComponents/NavTabs/loggedInRendering';
import LoginPg from './pages/loginPg';
import CollectionsPg from './pages/collectionsPg';
import MainPg from './pages/mainPg';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import './App.css';
// import NavTabs from './components/MainPgComponents/NavTabs/NavTabs';
// import Navbar from './components/MainPgComponents/NavBar/Navbar';
// import Portfolio from './components/PortfolioContainer';


class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    
    const { cookies } = props;
    this.state = {
      isLoggedIn: false,
      name: cookies.get('name') || 'Ben'
    };
  }

  handleNameChange(name) {
    const { cookies } = this.props;

    cookies.set('name', name, { path: '/' });
    this.setState({ name });
  }
  
  //attempting to pass the state up from card.js which is for the rendering of the loggedInNavTabs.js
  loggedInRendering = () =>{
    if (this.state.isLoggedIn){
      return <LoggedInNavTabs/>
    }
  }

  toggleLoggedIn =() =>{
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }
  render(){
    return (

        <Router>
          <div className="mainContainer">
             {/*passing up state from card.js   */}
             {this.loggedInRendering()}

            <Route exact path='/' render={(props) => <LoginPg {...props} toggleLoggedIn={this.toggleLoggedIn}/>} />
            <Route exact path='/profile' component={MainPg} />
            <Route exact path='/collectionsPg' component={CollectionsPg} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <Route exact path='/contact' component={Contact} />
          </div>
        </Router>  

    );
  }
}


export default withCookies(App);
