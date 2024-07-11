import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className="app">
          <header>
            <div className="logo">
              BlueStone Overseas Consultants
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              {/* <Link to="/form">Form</Link> */}
              <Link to="/login">Login</Link>
              
            </nav>
          </header>
        </div>
)};
export default Navbar;