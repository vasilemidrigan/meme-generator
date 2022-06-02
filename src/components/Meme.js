import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const randomURL = memesData.data.memes[Math.floor(Math.random() * 100)].url;
  const [memeURL, setMemeURL] = React.useState("");

  function getMemeURL() {
    return setMemeURL(randomURL);
  }
  return (
    <div className="meme">
      <div className="meme__form" action="">
        <input
          className="meme__form__input"
          type="text"
          placeholder="top text"
        />
        <input
          className="meme__form__input"
          type="text"
          placeholder="bottom text"
        />
        <button className="meme__form__btn" onClick={getMemeURL} type="submit">
          Get a new meme image 🖼
        </button>
      </div>
      {randomURL && <img className="meme__img" src={memeURL} />}
    </div>
  );
}

// In this case, we're not use form to wrap our
//   inputs and button because there just no need
//   to submit the info from inputs.
