import { React, useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

import Logo from "@/assets/ComLogo.png";
import Menu from "@/assets/menu.svg";
import Cancel from "@/assets/cancel.svg";
import "./mix.scss";

const ComLogo = () => {
  return (
    <div>
      <img className="company-logo" src={Logo} alt="company-logo" />
    </div>
  );
};

const SwitchMenu = props => {
    const links = [
        "Photography",
        "Filming",
        "Surveys & Inspections",
        "Portfolio",
        "Equipment"
      ];
  const { isOpen, setIsOpen } = props;

  return (
    <>
      <Dropdown className="switch-display-controller" onToggle={() => setIsOpen(!isOpen)}>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          <img src={isOpen ? Cancel : Menu} alt="switch-menu" />
        </Dropdown.Toggle>

        <Dropdown.Menu id="custom-dropdown">
          {
            links.map((item, index) => {
               return <Dropdown.Item id={"link-" + index}>{item}</Dropdown.Item>
            })
          }
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">
          <button className="contact-us-btn">CONTACT US</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const LinkButtons = () => {
  const links = [
    "Photography",
    "Filming",
    "Surveys & Inspections",
    "Portfolio",
    "Equipment"
  ];

  return (
    <div className="btns  btns-display-controller">
      <div className="link-btns">
        {links.map(item => {
          return <button className="link-btn">{item}</button>;
        })}
      </div>
      <button className="contact-us-btn">CONTACT US</button>
    </div>
  );
};

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-nav">
      <div className="custom-nav-container">
        <ComLogo />
        <LinkButtons />
        <SwitchMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default CustomNavbar;
