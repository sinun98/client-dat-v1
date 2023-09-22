import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/evaluation" className="navbar-item">DAT-Client</Link> 
        <Link to="/evaluation" className="navbar-item">Home</Link> 
      </nav>
    </header>
  );
}

export default Header;