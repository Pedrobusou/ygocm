import React from "react";

import "./dark_overlay.css";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const MyMenu = () => {
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        {/*------------ Home -------------- */}
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Home
            </NavText>
        </NavItem>
        {/* -----------------------------
         ---------- Card list ----------- */}
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Card List
            </NavText>
        </NavItem>
        {/* -----------------------------
         ---------- Decks ----------- */}
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Decks
            </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default MyMenu;
