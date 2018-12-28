import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      {/* link to MainPg content */}
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
      {/* link to LoginLogout option visible on MainPg */}
        <Link
          to="/login"
          className={window.location.pathname === "/loginPg" ? "nav-link active" : "nav-link"}
        >
          Login/Logout
        </Link>
      </li>
      <li className="nav-item">
      {/* link to CollectionsPg corresponding to Searches of collections in the DB */}
        <Link
          to="/Collections"
          className={window.location.pathname === "/CollectionsPg" ? "nav-link active" : "nav-link"}
        >
          Collections
        </Link>
      </li>
      <li className="nav-item">
      {/* After MVP is met - Contactpg might be implimented */}
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
