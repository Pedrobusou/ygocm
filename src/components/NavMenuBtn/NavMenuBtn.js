import React from 'react';
import './navMenuBtn.scss';

const NavMenuBtn = ({isOpen, setIsOpen}) => {
  return (
    <button
      className={isOpen ? 'nav-menu-btn open' : 'nav-menu-btn'}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        class="bi bi-list"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};

export default NavMenuBtn;
