import React from 'react';
import NavMenuBtn from '../NavMenuBtn/NavMenuBtn';
import './navMenu.scss';
import { Link } from "react-router-dom";


const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? 'nav-menu open' : 'nav-menu'}>
      <div className="nav-menu__item">
        <NavMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <a className="nav-menu__item" >
        <Link to="/">
          Home
        </Link>
      </a>

      <a className="nav-menu__item" href="/">
        <Link to="/decklist">
          Deck list
        </Link>
      </a>

      <a className="nav-menu__item" href="/">
        <Link to="/wishlist">
          Wishlist
        </Link>
      </a>
    </div>
  );
};

export default NavMenu;
