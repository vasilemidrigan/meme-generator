import React from "react";
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img src={trollFace} className="header--image" alt="troll face" />
        <h3 className="header--logo_text">Meme Generator</h3>
      </div>
      <div className="header--course_id">React Course - Project 3</div>
    </header>
  );
}
