import React from "react";
import "./ProjetItem.css";

function ProjetItem(props) {
  const { nom, texte, url, urlGH } = props.projet;
  return (
    <div className="projet">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <img src={"./img/" + nom + ".jpg"} alt={nom} />
        </a>
      ) : (
        <div>
          <img src={"./img/" + nom + ".jpg"} alt={nom} />
        </div>
      )}

      <div className="texteProjet">
        <h3>{nom}</h3>
        <p>{texte}</p>
        <p>
          <a href={urlGH}>Voir sur GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default ProjetItem;
