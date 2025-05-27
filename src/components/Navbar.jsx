import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from './SvgIcons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="custom-navbar sticky-top d-flex align-items-center px-4 justify-content-between">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}><Logo /></Link>
      </div>

      <nav className={`navbar-links d-none d-md-flex mx-auto`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/explore-creative-photography">Creative</Link>
        <Link to="/explore-photography-showcase">Showcase</Link>
        <Link to="/explore-wedding-gallery">Wedding</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="navbar-menu-icon d-md-none ms-auto" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeMenu}>&times;</div>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/explore-creative-photography" onClick={closeMenu}>Creative</Link>
        <Link to="/explore-photography-showcase" onClick={closeMenu}>Showcase</Link>
        <Link to="/explore-wedding-gallery" onClick={closeMenu}>Wedding</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
};

export default Navbar;
