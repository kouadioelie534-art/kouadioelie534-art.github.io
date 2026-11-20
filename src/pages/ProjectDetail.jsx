import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { projects, getProjectBySlug } from "../data/projects";
import "./ProjectDetail.css";

const blocks = [
  { key: "context", label: "Contexte" },
  { key: "problem", label: "Problématique" },
  { key: "data", label: "Données utilisées" },
  { key: "methodology", label: "Méthodologie" },
  { key: "results", label: "Résultats clés" },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/projets" replace />;

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="section project-detail">
      <div className="container">
        <ScrollReveal>
          <Link to="/projets" className="project-detail__back">
            <ArrowLeft size={16} /> Tous les projets
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <span className="eyebrow">{project.code}</span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.subtitle}</p>
          <div className="project-detail__meta">
            <span className="tag">{project.level}</span>
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <hr className="rule" />

        <div className="project-detail__body">
          {blocks.map((b, i) => (
            <ScrollReveal key={b.key} delay={i * 0.05} className="project-detail__block">
              <h2>{b.label}</h2>
              <p>{project[b.key]}</p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.3} className="project-detail__block">
            <h2>Compétences démontrées</h2>
            <div className="project-detail__skills">
              {project.skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35} className="project-detail__block project-detail__role">
            <h2>Rôle personnel</h2>
            <p>{project.role}</p>
          </ScrollReveal>
        </div>

        <hr className="rule" />

        <ScrollReveal className="project-detail__next">
          <span className="eyebrow">Projet suivant</span>
          <Link to={`/projets/${next.slug}`} className="project-detail__next-link">
            {next.title} <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </article>
  );
}
