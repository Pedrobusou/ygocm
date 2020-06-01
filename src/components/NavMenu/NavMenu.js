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

      <Link to="/" className="nav-menu__item" >
        Home
      </Link>

      <Link to="/decklist" className="nav-menu__item" >
        Deck list
      </Link>

      <Link to="/wishlist" className="nav-menu__item" >
        Wishlist
      </Link>

    </div>
  );
};

export default NavMenu;
