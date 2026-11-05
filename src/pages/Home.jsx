import { Link } from "react-router-dom";
import { ArrowRight, Download, Award, BarChart3, Code2, ClipboardList, ToolboxIcon, CoinsIcon } from "lucide-react";
import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import ScrollReveal from "../components/ScrollReveal";
import GridBackdrop from "../components/GridBackdrop";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Home.css";

const featured = projects.filter((p) =>
  ["djassabbot", "bceao-politique-monetaire-uemoa", "cadrage-budgetaire-ia"].includes(p.slug)
);

const stats = [
  { value: "09", label: "Projets réalisés", color: "var(--accent)" },
  { value: "02", label: "Domaines data & dev", color: "var(--teal)" },
  { value: "2ème", label: "Année ISE · ENSEA", color: "var(--amber)" },
];

const skillGroups = [
  {
    title: "Data & Économétrie",
    icon: BarChart3,
    items: ["MachineLearning", "ACP/ACM/AFC", "Économétrie des variables qualitatives", "Économétrie des séries temporelles"],
  },
  {
    title: "Développement",
    icon: Code2,
    items: ["React", "Flask", "PostgreSQL", "SQLite", "Electron", "Intégration API"],
  },
  {
    title: "Modélisation économique",
    icon: CoinsIcon,
    items: ["Microéconomie", "Théorie des jeux", "Concurrence imparfaite", "Comptabilité nationale", "Comptabilité d'entreprise"],
  },
  {
    title: "Programmation & outils",
    icon: ToolboxIcon,
    items: ["Python", "R", "Eviews", "Stata", "SQL", "LaTeX", "Excel", "Word", "PowerPoint"],
  },
];

const certifHighlights = [
  { org: "BCG", title: "Introduction to Strategy Consulting", color: "var(--teal)" },
  { org: "Goldman Sachs", title: "Operations Job Simulation", color: "var(--accent)" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <GridBackdrop />
        <div className="container hero__inner">
          {/* Text column */}
          <div className="hero__text">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero__floating-value">ISE</span> Ingénieur Statisticien Économiste · ENSEA
            </motion.div>

            <RevealText
              as="h1"
              className="hero__title"
              text="Kouadio Poyard Samuel-Elie"
            />

            <ScrollReveal delay={0.3}>
              <p className="hero__lead">
                Je suis étudiant en ISE à l'ENSEA.J'ai des compétences à la fois orientées data, économétrie,
                économie et développement logiciel (Python, SQL, Flask, React). Auteur/co-auteur de plusieurs
                projets menés jusqu'au produit livrable, y compris en stage au sein
                d'une administration publique.Je cultive rigeur et curiosité dans le travail.
              </p>
              <p className="hero__lead">
                Passionné de finance ,je m'intéresse particulièrement à la modélisation de risque et à la gestion de portefeuille.
                Je compte allié mes compétences actuelles à cette passion à travers la suite de ma formation mais aussi d'éventuels projets.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.42} className="hero__actions">
              <Link to="/projets" className="btn btn-primary">
                Voir mes projets <ArrowRight size={18} />
              </Link>
              <Link to="/cv" className="btn btn-accent">
                Télécharger le CV <Download size={18} />
              </Link>
            </ScrollReveal>

            {/* Social proof row */}
            <ScrollReveal delay={0.54} className="hero__badges">
              {certifHighlights.map((c) => (
                <span key={c.org} className="hero__badge" style={{ "--badge-color": c.color }}>
                  <Award size={13} />
                  {c.org}
                </span>
              ))}
            </ScrollReveal>
          </div>

          {/* Photo column */}
          <ScrollReveal delay={0.2} className="hero__photo-col">
            <motion.div
              className="hero__photo-wrapper"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero__photo-ring" />
              <img
                src="/images/kouadio-profile.jpg"
                alt="Kouadio Poyard Samuel-Elie"
                className="hero__photo"
                width={320}
                height={380}
              />
              {/* Floating accent card */}
              <motion.div
                className="hero__floating-card"
                initial={{ opacity: 0, x: 24, y: 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero__floating-value">09</span>
                <span className="hero__floating-label">Projets ISE</span>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} className="stats__item">
                <span className="stats__value" style={{ color: s.color }}>{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ À PROPOS ============ */}
      <section className="section about-section">
        <div className="container about__inner">
          <div className="about__text">
            <ScrollReveal>
              <h2 className="section__title">
                Un double profil : rigueur statistique & sens du produit
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="section__lead">
                Étudiant en 2ᵉ année ISE à l'ENSEA, je travaille aussi bien sur des
                modèles économétriques que sur des applications web
                complètes.Mon but en tant que futur statisticien économiste est que mes analyses soient des outils concrets
                d'aide à la decision.Mon but en developpement logiciel est toujours de coder utile,robuste et de manière
                adaptée aux objectifs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Link to="/cv" className="btn btn-outline" style={{ marginTop: "var(--s4)", display: "inline-flex" }}>
                Mon parcours complet <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          {/* About photo (smaller) */}
          <ScrollReveal delay={0.12} className="about__photo-col">
            <div className="about__photo-wrapper">
              <img
                src="/images/kouadio-full.jpg"
                alt="Portrait de profil"
                className="about__photo"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ PROJETS EN AVANT ============ */}
      <section className="section featured-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Projets en avant</h2>
          </ScrollReveal>
          <div className="grid-3" style={{ marginTop: "var(--s5)" }}>
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <ScrollReveal delay={0.15} className="section__cta">
            <Link to="/projets" className="btn btn-outline">
              Voir les 9 projets <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ COMPÉTENCES ============ */}
      <section className="section skills-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Compétences & outils</h2>
          </ScrollReveal>
          <div className="skills" style={{ marginTop: "var(--s5)" }}>
            {skillGroups.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.1} className="skills__group">
                <div className="skills__group-header">
                  <g.icon size={20} className="skills__icon" />
                  <h3>{g.title}</h3>
                </div>
                <div className="skills__tags">
                  {g.items.map((it) => (
                    <span key={it} className="tag">{it}</span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS TEASER ============ */}
      <section className="section certif-teaser">
        <div className="container">
          <ScrollReveal>
            <h2 className="section__title">Simulations professionnelles</h2>
            <p className="section__lead">
              Certifications obtenues via Forage: simulations de poste chez des firmes
              de renommée mondiale.
            </p>
          </ScrollReveal>
          <div className="certif-teaser__grid" style={{ marginTop: "var(--s5)" }}>
            {certifHighlights.map((c, i) => (
              <ScrollReveal key={c.org} delay={i * 0.12}>
                <div className="certif-teaser__card" style={{ "--card-color": c.color }}>
                  <Award size={28} className="certif-teaser__icon" />
                  <p className="certif-teaser__org">{c.org}</p>
                  <p className="certif-teaser__title">{c.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2} className="section__cta">
            <Link to="/certifications" className="btn btn-outline">
              Voir toutes les certifications <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

