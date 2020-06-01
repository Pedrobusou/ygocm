import React from 'react';
import NavMenuBtn from '../NavMenuBtn/NavMenuBtn';
import './navMenu.scss';
import {Link} from 'react-router-dom';

const NavMenu = ({isOpen, toggleNavMenu}) => {
  const pages = [
    {name: 'Home', url: '/'},
    {name: 'Deck list', url: '/decklist'},
    {name: 'Wishlist', url: '/wishlist'}
  ];

  return (
    <div className={isOpen ? 'nav-menu open' : 'nav-menu'}>
      <div className="nav-menu__item">
        <NavMenuBtn isOpen={isOpen} toggleNavMenu={toggleNavMenu} />
      </div>

      {pages.map((page, i) => (
        <Link
          to={page.url}
          onClick={toggleNavMenu}
          key={i}
          className="nav-menu__item"
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
