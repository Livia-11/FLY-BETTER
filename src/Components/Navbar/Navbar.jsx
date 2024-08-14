import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../src/assets/logo-no-background.png';


const Navbar = () => {
  return (
    <div>
      <section className="navbar">
        <nav>
          <Link to="/"><img src={logo} alt='dfdf' /></Link>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" aria-hidden="true" ></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/services">SERVICE</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/login"><i className="fa-solid fa-user-tie"></i>&nbsp;&nbsp;Login | Sign up</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </nav>

       
      </section>
    </div>
  );
};

export default Navbar;
