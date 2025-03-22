import "./about.css";
import debora from "../../images/debora.png";

export default function About() {
  return (
    <section className="about">
      <div className="about__intro">
        <h2 className="about__title">Ahoy there!</h2>
        <img src={debora} alt="Débora" className="about__img" />
      </div>
      <p className="about__text">
        I'm Débora. A developer, musician, teacher, traveler, mother and wife.
      </p>
      <p className="about__text">
        Back in my early 20s, I lived abroad — before Google Maps was even a
        thing. Yep, I was out there navigating the world like an ancient Inka,
        armed with nothing but questionable paper maps and blind optimism. Since
        then, I've managed to explore 15 countries.
      </p>
      <p className="about__text">
        I want to set foot on every continent and collect passport stamps.
      </p>
      <p className="about__text">
        I graduated in music and currently pursuing a second degree in Systems
        Analysis and Development.
      </p>
      <p className="about__text">
        I'm passionate about merging creativity with technology, I enjoy solving
        problems and building user-friendly applications.
      </p>
      <p className="about__text">
        I'm eager to learn and grow, and I try to combine my artistic background
        with my technical skills to create innovative solutions that can make a
        difference.
      </p>
    </section>
  );
}
