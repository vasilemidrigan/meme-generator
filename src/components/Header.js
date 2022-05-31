import trollFace from "../img/troll-face.png";

export default function Header() {
  return (
    <div className="header">
      <img className="header__img" src={trollFace} alt="Troll face logo" />
      <h3 className="header__h3">Meme Generator</h3>
      <div className="header__course-version">React Course - project 3</div>
    </div>
  );
}
