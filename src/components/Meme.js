export default function Meme() {
  return (
    <div className="meme">
      <form className="meme__form" action="">
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
      </form>
    </div>
  );
}
