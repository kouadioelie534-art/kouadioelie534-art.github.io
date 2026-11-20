import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project, index = 0 }) {
  const codeFormatted = project.code ? `PRJ-${project.code.trim()}` : "PROJET";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
    >
      <Link
        to={`/projets/${project.slug}`}
        className="card project-card"
      >
        <div className="project-card__head">
          <span className="project-card__code">{codeFormatted}</span>
          <span className="project-card__level-badge">{project.level}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__footer">
          <span className="project-card__explore">Consulter l'étude</span>
          <ArrowUpRight size={16} className="project-card__arrow" />
        </div>
      </Link>
    </motion.div>
  );
}
