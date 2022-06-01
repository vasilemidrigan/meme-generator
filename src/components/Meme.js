export default function Meme() {
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
        <button className="meme__form__btn" type="submit">
          Get a new meme image 🖼
        </button>
      </div>
    </div>
  );
}

// In this case, we're not use form to wrap our
//   inputs and button because there just no need
//   to submit the info from inputs.
