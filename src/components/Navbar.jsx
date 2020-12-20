import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">TSol</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                    <i className="fas fa-home">Home</i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/our team"><i className="fas fa-user-alt">Our Team</i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pricing"><i className="fas fa-tags">Pricing</i></NavLink>
                 </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" ><i className="fas fa-envelope">Contact</i></NavLink>
                  </li>
                </ul>
              </div>
            </div>
           </nav>
        </div>
       )
    }

export default Navbar;
