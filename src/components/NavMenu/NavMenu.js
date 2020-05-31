import React from 'react';
import NavMenuBtn from '../NavMenuBtn/NavMenuBtn';
import './navMenu.scss';

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? 'nav-menu open' : 'nav-menu'}>
      <div className="nav-menu__item">
        <NavMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <a className="nav-menu__item" href="/">
        Home
      </a>

      <a className="nav-menu__item" href="/">
        Deck list
      </a>

      <a className="nav-menu__item" href="/">
        Wishlist
      </a>

      <a className="nav-menu__item" href="/">
        Home
      </a>
    </div>
  );
};

export default NavMenu;
