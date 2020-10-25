import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";

const Header = (props) => {
  const { onSectionChange, sectionActive } = props;

  return (
    <header className="Header">
      <div className="titres">
        <h1
          onClick={() => {
            onSectionChange("apropos");
          }}
        >
          Laurent Delay
        </h1>
        <h2>Développeur Web FrontEnd ReactJS</h2>
      </div>
      <Menu onSectionChange={onSectionChange} sectionActive={sectionActive} />
    </header>
  );
};

export default Header;
