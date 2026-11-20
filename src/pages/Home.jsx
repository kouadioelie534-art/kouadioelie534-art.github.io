import { Link } from "react-router-dom";
import { ArrowRight, Download, Award, BarChart3, Code2, CoinsIcon, Wrench } from "lucide-react";
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
  { value: "09", label: "Projets & Travaux réalisés", color: "var(--accent)" },
  { value: "03", label: "Data, Économétrie & Finance", color: "var(--teal)" },
  { value: "3ᵉ", label: "Année ISE · ENSEA Abidjan", color: "var(--text)" },
];

const skillGroups = [
  {
    title: "Data & Économétrie",
    icon: BarChart3,
    items: ["Machine Learning", "ACP / ACM / AFC", "Variables qualitatives", "Séries temporelles", "Modélisation VAR / VECM"],
  },
  {
    title: "Ingénierie & Outils",
    icon: Code2,
    items: ["Python", "SQL", "Flask", "React", "PostgreSQL", "SQLite", "Electron", "Git"],
  },
  {
    title: "Modélisation Économique & Risque",
    icon: CoinsIcon,
    items: ["Microéconomie", "Théorie des jeux", "Gestion de portefeuille", "Value at Risk (VaR)", "Comptabilité nationale"],
  },
  {
    title: "Environnements d'Analyse",
    icon: Wrench,
    items: ["R", "Stata", "EViews", "LaTeX", "Excel avancé / VBA", "Power BI"],
  },
];

const certifHighlights = [
  {
    org: "FMI / IMFx",
    title: "Financial Market Analysis (FMAx)",
    color: "var(--accent)",
    featured: true,
    tag: "Référence",
    desc: "Évaluation d'actifs, courbe des taux, gestion de portefeuille & modélisation du risque (VaR)",
  },
  {
    org: "BCG",
    title: "Introduction to Strategy Consulting",
    color: "var(--teal)",
    desc: "Résolution de problèmes complexes et stratégie de croissance",
  },
  {
    org: "Goldman Sachs",
    title: "Operations Job Simulation",
    color: "var(--accent)",
    desc: "Contrôle des flux financiers, transactions UHNW et risque opérationnel",
  },
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero__status-wrap"
            >
              <div className="hero__status-badge">
                <span className="status-dot" />
                <span>Élève-Ingénieur Statisticien Économiste · ENSEA Abidjan</span>
              </div>
            </motion.div>

            <RevealText
              as="h1"
              className="hero__title"
              text="Kouadio Poyard Samuel-Elie"
            />

            <ScrollReveal delay={0.25}>
              <p className="hero__lead">
                Élève-Ingénieur Statisticien Économiste (ISE) à l'ENSEA d'Abidjan, je combine
                modélisation économétrique, analyse rigoureuse de données et développement logiciel
                appliqué (Python, SQL, React, Flask). Auteur de plateformes et d'études menées
                jusqu'au produit livrable, notamment en immersion au sein de la Direction Générale du Portefeuille de l'État (DGPE).
              </p>
              <p className="hero__lead">
                Passionné par la finance quantitative, la modélisation des risques et l'aide à la décision stratégique,
                je m'attache à concevoir des solutions robustes, scientifiquement fondées et directement exploitables.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.38} className="hero__actions">
              <Link to="/projets" className="btn btn-primary">
                Consulter mes projets <ArrowRight size={18} />
              </Link>
              <Link to="/cv" className="btn btn-accent">
                Télécharger le CV <Download size={18} />
              </Link>
            </ScrollReveal>

            {/* Accréditations badges */}
            <ScrollReveal delay={0.48} className="hero__badges">
              {certifHighlights.map((c) => (
                <span
                  key={c.org}
                  className={`hero__badge ${c.featured ? "hero__badge--featured" : ""}`}
                  style={{ "--badge-color": c.color }}
                >
                  <Award size={13} />
                  <span>{c.org}</span>
                  {c.featured && <span className="hero__badge-tag">Référence</span>}
                </span>
              ))}
            </ScrollReveal>
          </div>

          {/* Photo column */}
          <ScrollReveal delay={0.2} className="hero__photo-col">
            <motion.div
              className="hero__photo-wrapper"
              initial={{ opacity: 0, scale: 0.94 }}
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
              {/* Floating executive stat card */}
              <motion.div
                className="hero__floating-card"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="hero__floating-value">09</span>
                <span className="hero__floating-label">Études & Projets</span>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08} className="stats__item">
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
              <span className="eyebrow">Profil & Vision</span>
              <h2 className="section__title">
                Un double profil : rigueur statistique & sens du produit livrable
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="section__lead">
                Actuellement en cycle d'Ingénieur Statisticien Économiste à l'ENSEA, je mène aussi bien des
                études économétriques poussées que le développement d'architectures applicatives complètes.
                Mon but en tant que statisticien économiste est de produire des analyses claires, chiffrées
                et immédiatement actionnables pour les décideurs économiques et financiers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Link to="/cv" className="btn btn-outline" style={{ marginTop: "var(--s4)", display: "inline-flex" }}>
                Consulter mon parcours détaillé <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>

          {/* About photo */}
          <ScrollReveal delay={0.12} className="about__photo-col">
            <div className="about__photo-wrapper">
              <img
                src="/images/kouadio-full.jpg"
                alt="Kouadio Poyard Samuel-Elie en immersion académique"
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
            <span className="eyebrow">Sélection de réalisations</span>
            <h2 className="section__title">Travaux & Projets Clés</h2>
          </ScrollReveal>
          <div className="grid-3" style={{ marginTop: "var(--s5)" }}>
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <ScrollReveal delay={0.15} className="section__cta">
            <Link to="/projets" className="btn btn-outline">
              Explorer les 9 réalisations <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ COMPÉTENCES ============ */}
      <section className="section skills-section">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Expertise Technique</span>
            <h2 className="section__title">Compétences & Environnements de Travail</h2>
          </ScrollReveal>
          <div className="skills" style={{ marginTop: "var(--s5)" }}>
            {skillGroups.map((g, i) => (
              <ScrollReveal key={g.title} delay={i * 0.08} className="skills__group">
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
            <span className="eyebrow">Accréditations & Références</span>
            <h2 className="section__title">Certifications Internationales & Simulations</h2>
            <p className="section__lead">
              Programmes de formation et simulations certifiantes validés auprès d'institutions internationales et de leaders sectoriels (FMI, BCG, Goldman Sachs).
            </p>
          </ScrollReveal>
          <div className="certif-teaser__grid" style={{ marginTop: "var(--s5)" }}>
            {certifHighlights.map((c, i) => (
              <ScrollReveal key={c.org} delay={i * 0.08}>
                <div
                  className={`certif-teaser__card ${c.featured ? "certif-teaser__card--featured" : ""}`}
                  style={{ "--card-color": c.color }}
                >
                  <div className="certif-teaser__card-top">
                    <Award size={24} className="certif-teaser__icon" />
                    {c.featured && (
                      <span className="certif-teaser__pill">
                        Référence
                      </span>
                    )}
                  </div>
                  <p className="certif-teaser__org">{c.org}</p>
                  <p className="certif-teaser__title">{c.title}</p>
                  {c.desc && <p className="certif-teaser__desc">{c.desc}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.18} className="section__cta">
            <Link to="/certifications" className="btn btn-outline">
              Consulter le détail des accréditations <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
