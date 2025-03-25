import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/country-api-final-project/" className="nav__link">
        Home
      </Link>

      <Link to="/country" className="nav__link">
        Country
      </Link>

      <Link to="/about" className="nav__link">
        About
      </Link>
    </nav>
  );
}
