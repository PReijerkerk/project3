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
            to='/LoginPg'
            className={window.location.pathname === '/LoginPg' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/' className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/CollectionsPg'
            className={window.location.pathname === '/CollectionsPg' ? 'nav-link active' : 'nav-link'}
          >
            Collections
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/AboutUs'
            className={window.location.pathname === '/AboutUs' ? 'nav-link active' : 'nav-link'}
          >
            About Us
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/Contact'
            className={window.location.pathname === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
