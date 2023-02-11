import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nanthida CHANSAMONE </span>
            from <span className="purple"> Vientaine, Laos</span>
            <br />
            Photographer who loves to take a picture and make it beautiful.
            <br />
            I am also a Graphic Designer with experience creating the artwork from my idea forward to socity with Adobe Illustrator and Adobe Photoshop CC.
            <br />
            Apart from Taking photo and Graphic Design, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
