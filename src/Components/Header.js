import { useState, useEffect } from "react";
import React from 'react';
import "./header.css";
// import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible((prevVisible) => {
        const show = prevScrollPos > currentScrollPos;
        if (show !== prevVisible) {
          setPrevScrollPos(currentScrollPos);
          return show;
        }
        return prevVisible;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    
    <div className={`Header ${visible ? '' : 'hidden'}`}>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/" className="first-img">
            <img src="https://clay.global/images/logo-left.png" alt="Logo" />
          </a>
          <a href="/">
            <img src="https://clay.global/images/logo-right.png" alt="Logo" />
          </a>
        </div>
        <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          {/* <span className="bar"></span> */}
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/clients">Clients</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
 
  );
}

export default Header;