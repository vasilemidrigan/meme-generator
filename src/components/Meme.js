import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const randomURL =
      allMemeImages.data.memes[Math.floor(Math.random() * 100)].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomURL,
      };
    });
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
        <button
          className="meme__form__btn"
          onClick={getMemeImage}
          type="submit"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme__img" src={meme.randomImage} />
    </div>
  );
}

// In this case, we're not use form to wrap our
//   inputs and button because there just no need
//   to submit the info from inputs.
