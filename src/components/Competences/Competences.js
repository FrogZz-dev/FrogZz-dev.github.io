import React from "react";
import "./Competences.css";

const competences = [
  { texte: "JavaScript", icone: "js" },
  { texte: "NodeJS", icone: "node" },
  { texte: "Git", icone: "git" },
  { texte: "Github", icone: "github" },
  { texte: "ReactJS", icone: "react" },
  { texte: "HTML5", icone: "html5" },
  { texte: "CSS3", icone: "css3" },
];

function Competences() {
  return (
    <section className="Competences">
      <h2>Compétences</h2>

      <ul>
        {competences.map((competence) => {
          const { texte, icone } = competence;

          return (
            <li className={"fab fa-" + icone}>
              <em>{texte}</em>
            </li>
          );
        })}
      </ul>

      <p className="moreInfo">
        J'ai choisi de m'orienter vers ces technologies notamment grâce à leur{" "}
        <em>puissance</em> et leur extrême <em>flexibilité</em>. L'ajout de{" "}
        <em>NodeJS</em> et de sa bibliothèque <em>ExpressJS</em> pour la partie
        back-end a été pour moi un choix logique pour le côté pratique de
        l'utilisation d'un unique langage à tous les niveaux.
      </p>

      <p className="moreInfo">
        Etant avide de connaissances, je reste également ouvert à d'autres
        technologies et frameworks!
      </p>
    </section>
  );
}

export default Competences;
