import { Link } from "react-router-dom";
import "./footer.css";
import githubIcon from "../../images/github-icon.png";
import linkedIn from "../../images/linkedin-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Coded by Débora Beatriz</h3>
      <Link
        to="https://github.com/deborabeatriz-f"
        className="footer__link"
        id="footer__link-github"
        target="_blank"
      >
        <img src={githubIcon} alt="GitHub" className="footer__icon" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/deborabeatrizfigueiro/?locale=en_US"
        className="footer__link"
        id="footer__link-linkedin"
        target="_blank"
      >
        <img src={linkedIn} alt="LinkedIn" className="footer__icon" />
      </Link>
    </footer>
  );
}
