import React from 'react';
import { Link } from 'react-router-dom';
import "./navtabs.css";

function NavTabs() {
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
        <li className='nav-item'>
          <Link
            to='/'
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
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

export default NavTabs;
