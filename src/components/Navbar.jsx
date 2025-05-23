import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../styles/Navbar.css';
import Logo from './SvgIcons'; // Update this as needed

const Navbar = () => {
  return (
    <header className="custom-navbar sticky-top d-flex align-items-center px-4">
      <div className="navbar-logo">
        <Link to="/"> <Logo/></Link>
      </div>

      <nav className="navbar-links d-none d-md-flex mx-auto">
        <Link to="/">Home</Link>
        <Link to="/explore-creative-photography">Creative</Link> {/* Placeholder */}
        <Link to="/collection">Collection</Link> {/* Placeholder */}
        <Link to="/page">Page</Link> {/* Placeholder */}
        <Link to="/about">About</Link> {/* Placeholder */}
        <Link to="/contact">Contact</Link> {/* ✅ Correct route for ContactUs */}
      </nav>

      <div className="navbar-menu-icon d-md-none">
        &#9776;
      </div>
    </header>
  );
};

export default Navbar;
