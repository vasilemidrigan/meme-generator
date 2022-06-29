import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMeme, setAllMeme] = React.useState(memesData);

  function getMemeImage() {
    const randomURL = allMeme.data.memes[Math.floor(Math.random() * 100)].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomURL,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme">
      <div className="meme__form" action="">
        <input
          className="meme__form__input"
          type="text"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="meme__form__input"
          type="text"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="meme__form__btn"
          onClick={getMemeImage}
          type="submit"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme__img" src={meme.randomImage} />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

// In this case, we're not use form to wrap our
//   inputs and button because there just no need
//   to submit the info from inputs.
