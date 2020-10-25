import React from "react";
import "./About.css";

function About() {
  return (
    <section className="About">
      <h2>À propos</h2>
      <img src="./img/portrait.jpg" alt="portrait" className="portrait" />
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna
        tincidunt nunc malesuada maximus nec et nisl. Nulla blandit, mi eget
        fringilla sollicitudin, massa ipsum varius neque, in ornare risus libero
        at enim. Praesent in feugiat felis. Nullam non tellus porttitor, porta
        ipsum vel, finibus magna. Duis ipsum augue, cursus non ex eget, commodo
        gravida tellus. Curabitur eget eros nec est eleifend eleifend. Maecenas
        ultrices augue eu tellus laoreet fringilla. Suspendisse porta massa at
        accumsan eleifend. Cras mi ex, ultricies et urna ut, semper hendrerit
        urna. Donec vehicula cursus diam, in rutrum lorem sodales facilisis.
        Curabitur at metus orci.
      </p>
    </section>
  );
}

export default About;
