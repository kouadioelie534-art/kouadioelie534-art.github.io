import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Nav.css";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/certifications", label: "Certifications" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          {/* Brand */}
          <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
            K<span className="nav__brand-dot">.</span>PSE
          </NavLink>

          {/* Desktop links */}
          <nav className="nav__links nav__links--desktop" aria-label="Navigation principale">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " nav__link--active" : "")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Burger */}
          <button
            className="nav__burger"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`nav__mobile-overlay ${open ? "nav__mobile-overlay--open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}>
        <nav className={`nav__mobile-drawer ${open ? "nav__mobile-drawer--open" : ""}`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Navigation mobile">
          <div className="nav__mobile-header">
            <span className="nav__brand" style={{ pointerEvents: "none" }}>
              KOUADIO<span className="nav__brand-dot">.</span>PS
            </span>
            <button className="nav__burger" aria-label="Fermer" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                "nav__mobile-link" + (isActive ? " nav__mobile-link--active" : "")
              }
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

