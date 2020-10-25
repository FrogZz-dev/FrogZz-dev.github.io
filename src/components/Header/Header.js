import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";

const Header = (props) => {
  const { onSectionChange } = props;

  return (
    <header className="Header">
      <div className="description">
        <h1>Laurent Delay</h1>
        <h2>Développeur Web Front-End React.js</h2>
      </div>
      <Menu onSectionChange={onSectionChange} />
    </header>
  );
};

export default Header;
