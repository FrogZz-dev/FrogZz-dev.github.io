import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Projets from "../Projets/Projets";
import Competences from "../Competences/Competences";
import Contact from "../Contact/Contact";

const App = () => {
  const [section, setSection] = useState("");

  useEffect(() => {
    let reloadSection = sessionStorage.getItem("section");

    if (reloadSection) {
      setSection(reloadSection);
    } else {
      setSection("apropos");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("section", section);
  }, [section]);

  const changeSection = (nouvelleSection) => {
    setSection(nouvelleSection);
  };

  const isSectionActive = (sectionTest) => {
    return sectionTest === section;
  };

  return (
    <div className="App">
      <Header onSectionChange={changeSection} sectionActive={section} />
      <main>
        {isSectionActive("apropos") && <About />}
        {isSectionActive("projets") && <Projets />}
        {isSectionActive("skills") && <Competences />}
        {isSectionActive("contact") && <Contact />}
      </main>
    </div>
  );
};

export default App;
