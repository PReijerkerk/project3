import React from "react";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
       <li className="nav-item">
      {/* link to LoginLogout option visible on MainPg */}
        <Link
          to="/loginPg"
          className={window.location.pathname === "/loginPg" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
      {/* link to MainPg content */}
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
      {/* link to CollectionsPg corresponding to Searches of collections in the DB */}
        <Link
          to="/CollectionsPg"
          className={window.location.pathname === "/CollectionsPg" ? "nav-link active" : "nav-link"}
        >
          Collections
        </Link>
      </li>
      <li className="nav-item">
      {/* After MVP is met - Contactpg might be implimented */}
        <Link
          to="/AboutUs"
          className={window.location.pathname === "/AboutUs" ? "nav-link active" : "nav-link"}
        >
          About Us
        </Link>
      </li>
      <li className="nav-item">
      {/* After MVP is met - Contactpg might be implimented */}
        <Link
          to="/Contact"
          className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
