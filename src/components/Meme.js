import React from "react";
import buttonImg from "../images/button-img.png";

export default function Meme() {
  function handleMouseOver() {
    console.log("Mouse over button event catched!");
  }

  return (
    <div className="meme">
      <form className="meme--form" action="">
        <div className="meme--upper--text_input">
          <input type="text" placeholder="Top text" />
        </div>
        <div className="meme--bottom--text_input">
          <input type="text" placeholder="Bottom text" />
        </div>
        <button
          type="submit"
          className="meme--submit"
          onMouseOver={handleMouseOver}
        >
          <img src={buttonImg} className="meme--button--image" alt="" />
        </button>
      </form>
    </div>
  );
}
