import React, { useState } from "react";
import "./Menu.css";

const elementsMenu = [
  { texte: "À propos", lien: "apropos" },
  { texte: "Mes projets", lien: "projets" },
  { texte: "Mes compétences", lien: "skills" },
  { texte: "Me contacter", lien: "contact" },
];

const Menu = (props) => {
  const { onSectionChange } = props;
  const [actif, setActif] = useState("apropos");

  const clickHandle = (event) => {
    console.log(event.target);
    onSectionChange(event.target.id);
    setActif(event.target.id);
  };

  return (
    <nav className="Menu">
      <ul>
        {elementsMenu.map((element) => {
          return (
            <li
              className={
                "elementMenu" + (actif === element.lien ? " actif" : "")
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
