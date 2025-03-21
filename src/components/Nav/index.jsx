import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">
        Home
      </Link>

      <Link to="/country" className="nav__link">
        Country
      </Link>
    </nav>
  );
}
