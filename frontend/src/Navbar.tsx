import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <nav className="navbar">
    //   {/* <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/podcast">Podcast</Link>
    //     </li>
    //     <li>
    //       <Link to="/moviecollection">Movie Collection</Link>
    //     </li>
    //   </ul> */}
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Joel's Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/podcast" className="nav-link">
                Podcast
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/moviecollection" className="nav-link">
                Movie Collection
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
