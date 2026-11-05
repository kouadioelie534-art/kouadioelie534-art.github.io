import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Kouadio Poyard Samuel-Elie</p>
          <p className="footer__role">ISE: Ingénieur Statisticien Économiste</p>
        </div>
        <div className="footer__links">
          <a href="kouadioelie534@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/samuel-elie-poyard-62b820334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BjbvrHpgLQuyTLXyo4ofpEg%3D%3D" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
        </div>
      </div>
      <p className="footer__bottom">© {new Date().getFullYear()} — Abidjan, Côte d'Ivoire</p>
    </footer>
  );
}
