import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: "left" }}>
      <span className="eyebrow">404</span>
      <h1 className="section__title">Page introuvable</h1>
      <p className="section__lead">Cette page n'existe pas ou plus.</p>
      <Link to="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </section>
  );
}
