import "./navbar.css";
import moon from "../../assets/moon.png";
export default function NavBar() {
  return (
    <nav className="nav">
      <h2 className="nav__slogan">Where in the world? </h2>
      <div className="nav__dark-mode">
        <img src={moon} className="nav__dark-mode__icon" />
        <p className="nav__dark-mode__text">Dark mode</p>
      </div>
    </nav>
  );
}
