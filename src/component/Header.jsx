// in Header.js file

import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import '../component/css.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className={`header ${scrolled ? 'scrolled-up' : ''}`}>
        <div className="icons">
          <button id="menuButton" className="menu-button" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <a className="iconc" href="#">
            <i className="fa-solid fa-globe"></i>
          </a>
          <a className="iconc" href="#" data-tooltip="تماس با ما">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a className="iconc" href="#" data-tooltip="محصولات">
            <i className="fa-solid fa-bottle-droplet"></i>
          </a>
        </div>

        <div className="center">
          <nav>
            <ul>
              <li><a href="#">و بیشتر</a></li>
              <li><a href="#">محصولات</a></li>
              <li><a href="#">فرصت‌های شغلی</a></li>
              <li><a href="#">اخبار و تازه‌ها</a></li>
              <li><a href="#">بلاگ</a></li>
              <li><a href="#">امور سهامداران</a></li>
            </ul>
          </nav>
        </div>

        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <Menu active={menuActive} />
      </header>
    </div>
  );
};

const Menu = ({ active }) => {
  return (
    <div className={`menu-container ${active ? 'active' : ''}`}>
      <ul className="menu">
        <li><a href="#">و بیشتر</a></li>
        <li><a href="#">محصولات</a></li>
        <li><a href="#">فرصت‌های شغلی</a></li>
        <li><a href="#">اخبار و تازه‌ها</a></li>
        <li><a href="#">بلاگ</a></li>
        <li><a href="#">امور سهامداران</a></li>
      </ul>
    </div>
  );
};

export default Header;