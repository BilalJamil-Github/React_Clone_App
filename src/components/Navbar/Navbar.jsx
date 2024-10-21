import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="navbar-container">
                <h2 className="navbar-heading">SaVO</h2>
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <ul className="menu-list">
                    <Link to="/" className="menu-item">Home</Link>
                    <Link to="/about" className="menu-item">About Us</Link>
                    <Link to="/services" className="menu-item">Services</Link>
                    <Link to="/features" className="menu-item">Features</Link>
                    <Link to="/projects" className="menu-item">Projects</Link>
                    <Link to="/clients" className="menu-item">Clients</Link>
                    <Link to="/contactus" className="menu-item">Contact Us</Link>
                    <li className="menu-item">
                        <svg className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </li>
                    <li className="menu-item">
                        <svg className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </li>
                    <li className="menu-item">
                        <svg className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </li>
                    <li className="menu-item">
                        <svg className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </li>
                </ul>
                
                <ul className={`mobile-menu-list ${menuOpen ? 'show-menu' : ''}`}>
                    <Link to="/" className="mobile-menu-item" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="mobile-menu-item" onClick={toggleMenu}>About Us</Link>
                    <Link to="/services" className="mobile-menu-item" onClick={toggleMenu}>Services</Link>
                    <Link to="/features" className="mobile-menu-item" onClick={toggleMenu}>Features</Link>
                    <Link to="/projects" className="mobile-menu-item" onClick={toggleMenu}>Projects</Link>
                    <Link to="/clients" className="mobile-menu-item" onClick={toggleMenu}>Clients</Link>
                    <Link to="/contactus" className="mobile-menu-item" onClick={toggleMenu}>Contact Us</Link>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
