import React from 'react';
import './header.scss';
import Search from '../search/Search';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
            alt="Logo"
            className="header__img"
          />
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                For pasengers
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                IEV Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                VIP
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Corporate
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Press-center
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                EN
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Search />
    </>
  );
};

export default Header;
