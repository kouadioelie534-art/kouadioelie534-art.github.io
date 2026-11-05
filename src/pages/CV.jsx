import { Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import "./CV.css";

const experience = [
  {
    period: "Août – Sept. 2026",
    title: "Stagiaire à la DGPE / DPSPS",
    detail:
      "Analyse budgétaire de sociétés d'État et développement de Cadrage Budgétaire IA, une application d'aide au cadrage assistée par IA.",
  },
];

const education = [
  {
    period: "2024 – 2026",
    title: "Cycle Ingénieurs Statisticiens Économistes (ISE), ENSEA",
    detail: "2ᵉ année: économie,statistique, économétrie, data science.",
  },
];

const certifications = [
  {
    period: "Avril 2026",
    title: "BCG, Introduction to Strategy Consulting",
    detail: "Simulation professionnelle via Forage · Code de vérification : tQ7JwtDvBjc63grrR",
    color: "var(--teal)",
  },
  {
    period: "Avril 2026",
    title: "Goldman Sachs, Operations Job Simulation",
    detail: "Simulation professionnelle via Forage · Code de vérification : FjkwDds3Fqf7RmegZ",
    color: "var(--accent)",
  },
];

export default function CV() {
  return (
    <section className="section cv-page">
      <div className="container cv-page__grid">
        {/* Sidebar */}
        <motion.aside
          className="cv-page__side"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cv-photo">
            <img
              src="/images/kouadio-profile.jpg"
              alt="Kouadio Poyard Samuel-Elie"
              className="cv-photo__img"
            />
          </div>
          <h1 className="cv-page__name">Kouadio Poyard Samuel-Elie</h1>
          <p className="cv-page__title">Ingénieur Statisticien Économiste</p>

          <div className="cv-page__info">
            <span className="cv-info-item">
              <MapPin size={15} /> Abidjan, Côte d'Ivoire
            </span>
            <span className="cv-info-item">
              <Mail size={15} /> kouadioelie534@gmail.com
            </span>
          </div>

          <a href="/cv-kouadio-poyard.pdf" download className="btn btn-accent cv-page__download">
            <Download size={18} /> Télécharger le CV
          </a>
        </motion.aside>

        {/* Main content */}
        <div className="cv-page__main">
          {/* Formation */}
          <ScrollReveal>
            <span className="laysimp">Formation</span>
            <h2 className="section__title">Parcours académique</h2>
          </ScrollReveal>
          <div className="cv-timeline">
            {education.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 0.08} className="cv-timeline__item">
                <span className="cv-timeline__period">{e.period}</span>
                <h3>{e.title}</h3>
                <p>{e.detail}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Expérience */}
          <ScrollReveal delay={0.1}>
            <span className="laysimp">Expérience</span>
            <h2 className="section__title">Expérience professionnelle</h2>
          </ScrollReveal>
          <div className="cv-timeline">
            {experience.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 0.08} className="cv-timeline__item">
                <span className="cv-timeline__period">{e.period}</span>
                <h3>{e.title}</h3>
                <p>{e.detail}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Certifications */}
          <ScrollReveal delay={0.15}>
            <span className="laysimp">Certifications</span>
            <h2 className="section__title">Simulations professionnelles</h2>
          </ScrollReveal>
          <div className="cv-timeline">
            {certifications.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08} className="cv-timeline__item cv-timeline__item--cert" style={{ "--cert-accent": c.color }}>
                <span className="cv-timeline__period" style={{ color: c.color }}>{c.period}</span>
                <h3>{c.title}</h3>
                <p>{c.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

