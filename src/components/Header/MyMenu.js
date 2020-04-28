import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./dark_overlay.css";

const MyMenu = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Show menu">
      <Dropdown.Item href="#/action-1">Collection</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Wish list</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Deck creator</Dropdown.Item>
    </DropdownButton>
  );
};

export default MyMenu;
