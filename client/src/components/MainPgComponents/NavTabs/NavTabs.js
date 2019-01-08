import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoggedInNavTabs from '../NavTabs/loggedInRendering'
import "./navtabs.css";

class NavTabs extends Component {
 
  // created state to check to see if user has logged in
  state = {
    isLoggedIn: false
  }

  // upon being called the full navBar will Render again
  //this should be set up for the login, logout buttons
  loggedInRendering = () =>{
    if(this.state.isLoggedIn){
      return <LoggedInNavTabs/>
    }
  }

  render(){
  return (
    <div className='nav nav-tabs navContainer'>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          {/* <Link
            to='/'
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          > */}
            <h1 id="logo">TrophyCase</h1>
          {/* </Link> */}
        </li>
      
        {/* for testing only, the onClick will not render here, just
        rendering here for testing - would render in card.js  nearly the same as here but - we need it not to render on click of said button but on the submission of the authentication. This is something I didn't know how to do yet */}
        <li className='nav-item'>
          <Link
            to='/'
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            onClick= {()=>(
              this.setState({isLoggedIn:true})
            )}
          >
            Login
          </Link>
        </li>
      </ul>

      {this.loggedInRendering()}
    </div>
  );
}
}

export default NavTabs;
