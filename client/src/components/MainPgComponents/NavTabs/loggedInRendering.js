import React from 'react';
import { Link } from 'react-router-dom';
import "./navtabs.css";

const LoggedInNavTabs = () => {
// content will go here for logged in NavTab Rendering
// This would suggest that upon onclick of submission of the 
// login or creating of acct the rendering of the full site 
// will be displayed: thus this will render the current 
// full NavTabs 
  return ( 
  <div className='nav nav-tabs navContainer'>
      <ul className='nav nav-tabs'>
      <li className='nav-item'>
          <Link
            to='/'
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            // onClick= {()=>(
            //   this.setState({isLoggedIn:true})
            // )}
          >
            Login
          </Link>
        </li>
       
        <li className='nav-item'>
          <Link to='/profile' className={window.location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/collectionsPg'
            className={window.location.pathname === '/collectionsPg' ? 'nav-link active' : 'nav-link'}
          >
            Collections
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/aboutUs'
            className={window.location.pathname === '/aboutUs' ? 'nav-link active' : 'nav-link'}
          >
            About Us
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
   );
}
 
export default LoggedInNavTabs;