import React from "react";
import "./Projets.css";
import ProjetItem from "../ProjetItem/ProjetItem";

const projetsListe = [
  {
    nom: "ravenous",
    texte:
      "Un moteur de recherche d'entreprises développé grâce à ReactJS. Il se base sur l'API Yelp afin de récupérer ses informations.",
    urlGH: "https://github.com/FrogZz-dev/ravenous",
    url: "/ravenous",
  },
  {
    nom: "jammming",
    texte:
      "Une application permettant de créer des playlists et de les exporter vers Spotify.",
    urlGH: "https://github.com/FrogZz-dev/jammming",
    url: "/jammming",
  },
  {
    nom: "find-your-hat",
    texte:
      "Un mini-jeu développé en JavaScipt. Saurez-vous retrouver votre chapeau?",
    urlGH: "https://github.com/FrogZz-dev/find-your-hat",
    url: "",
  },
];

function Projets() {
  return (
    <section className="Projets">
      <h2>Projets</h2>
      <div className="galerieProjets">
        {projetsListe.map((projet) => {
          return <ProjetItem projet={projet} />;
        })}
      </div>
    </section>
  );
}

export default Projets;
