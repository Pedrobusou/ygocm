import React from 'react';
import './header.scss';
import CardNameFilter from '../filters/CardNameFilter/CardNameFilter';

const Header = ({searchCards}) => {
  return (
    <header>
      <div className="row">
        <div className="col">
          <svg
            className="bi bi-list"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="col">
          <CardNameFilter searchCards={searchCards} />
        </div>

        <div className="col text-right">
          <svg
            className="bi bi-funnel-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z" />
            <path
              fillRule="evenodd"
              d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
