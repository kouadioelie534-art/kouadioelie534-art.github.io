import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

const FILTERS = [
  { id: "all", label: "Tous", count: projects.length },
  { id: "stage-fullstack", label: "IA & Fullstack", tagMatch: ["IA conversationnelle", "Fullstack", "IA appliquée", "Bases de données"] },
  { id: "econometrie", label: "Économétrie & Finance", tagMatch: ["Économétrie", "Finance", "Séries temporelles", "Inégalités"] },
  { id: "stat-enquetes", label: "Statistique & Enquêtes", tagMatch: ["Statistique descriptive", "Analyse factorielle", "Collecte de données", "EHCVM"] },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    const filterConfig = FILTERS.find((f) => f.id === activeFilter);
    if (!filterConfig || !filterConfig.tagMatch) return true;
    return p.tags.some((t) => filterConfig.tagMatch.includes(t));
  });

  return (
    <section className="section projects-page">
      <div className="container">
        <ScrollReveal>
          <div className="projects-page__header">
            <span className="eyebrow">Catalogue de Réalisations</span>
            <h1 className="projects-page__title">Projets & Travaux de Recherche</h1>
            <p className="section__lead">
              Neuf projets menés à bien durant le cycle Ingénieur Statisticien Économiste à
              l'ENSEA et en immersion professionnelle à la DGPE, alliant rigueur économétrique,
              modélisation statistique et développement logiciel.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="projects-filter-bar" role="tablist" aria-label="Filtrer les projets">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-btn ${isActive ? "filter-btn--active" : ""}`}
                  onClick={() => setActiveFilter(f.id)}
                >
                  <span>{f.label}</span>
                  {f.id === "all" ? (
                    <span className="filter-count">{f.count}</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid-3 projects-page__grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
