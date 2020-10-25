import React, { useState } from "react";
import "./Menu.css";

const elementsMenu = [
  { texte: "À propos", lien: "apropos" },
  { texte: "Mes projets", lien: "projets" },
  { texte: "Mes compétences", lien: "skills" },
  { texte: "Me contacter", lien: "contact" },
];

const Menu = (props) => {
  const { onSectionChange, sectionActive } = props;

  const clickHandle = (event) => {
    onSectionChange(event.target.id);
  };

  return (
    <nav className="Menu">
      <ul>
        {elementsMenu.map((element) => {
          return (
            <li
              className={
                "elementMenu" + (sectionActive === element.lien ? " actif" : "")
              }
              id={element.lien}
              onClick={clickHandle}
            >
              {element.texte}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
