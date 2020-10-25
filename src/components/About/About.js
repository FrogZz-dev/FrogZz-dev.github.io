import React from "react";
import "./About.css";

function About() {
  return (
    <section className="About">
      <h2>À propos</h2>
      <img src="./img/portrait.jpg" alt="portrait" className="portrait" />
      <p className="description">
        Développeur web orienté principalement Front-End, je reviens vers le
        monde de l'informatique après m'en être éloigné durant plusieures
        années.
      </p>
      <p className="description">
        Après plusieurs semaines de travail passioné en vue de me remettre à
        niveau et de découvrir les dernières technologies grâce au site{" "}
        <a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">
          Codecademy
        </a>
        , me voici plus motivé que jamais!
      </p>
      <p className="description">
        Je suis donc à la recherche d'un poste sur le secteur de <em>Lille</em>{" "}
        ou de <em>Bruxelles</em> afin de mettre à profit mes connaissances sur
        des technologies telles que{" "}
        <i className="fab fa-js">
          <em>JavaScript</em>
        </i>
        ,{" "}
        <i className="fab fa-react">
          <em>ReactJS</em>
        </i>{" "}
        ou encore{" "}
        <i className="fab fa-node">
          <em>NodeJS</em>
        </i>
        .
      </p>
    </section>
  );
}

export default About;
