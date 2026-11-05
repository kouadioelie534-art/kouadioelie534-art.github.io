import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, Download, ExternalLink, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { certificates } from "../data/certificates";
import "./Certifications.css";

function TaskCard({ task, isOpen, onToggle }) {
  return (
    <div className={`task-card ${isOpen ? "task-card--open" : ""}`}>
      <button className="task-card__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <div className="task-card__trigger-left">
          <span className="task-card__number">{task.number}</span>
          <span className="task-card__title">{task.title}</span>
        </div>
        <div className="task-card__trigger-right">
          <span className="task-card__duration">{task.duration}</span>
          <ChevronDown size={18} className="task-card__chevron" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="task-card__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="task-card__body-inner">
              <p className="task-card__desc">{task.description}</p>
              <div className="task-card__takeaway">
                <CheckCircle2 size={15} />
                <span>{task.takeaway}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CertCard({ cert, index }) {
  const [openTask, setOpenTask] = useState(null);
  const toggle = (id) => setOpenTask((prev) => (prev === id ? null : id));

  return (
    <motion.article
      className="cert-card"
      style={{ "--cert-color": cert.themeColor }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cert-card__header">
        <div className="cert-card__badge"><Award size={22} /></div>
        <div className="cert-card__meta">
          <span className="cert-card__org">{cert.organization}</span>
          <span className="cert-card__via">via {cert.issuer}</span>
        </div>
        <span className="cert-card__date">{cert.completionDate}</span>
      </div>

      <h2 className="cert-card__title">{cert.title}</h2>
      <span className="tag cert-card__category">{cert.category}</span>

      <p className="cert-card__summary">{cert.summary}</p>

      <ul className="cert-card__highlights">
        {cert.highlights.map((h) => (
          <li key={h} className="cert-card__highlight">
            <CheckCircle2 size={14} className="cert-card__check" />
            {h}
          </li>
        ))}
      </ul>

      <div className="cert-card__tasks">
        <p className="cert-card__tasks-label">Taches completees</p>
        {cert.tasks.map((task) => (
          <TaskCard key={task.id} task={task} isOpen={openTask === task.id} onToggle={() => toggle(task.id)} />
        ))}
      </div>

      <div className="cert-card__actions">
        <a href={cert.pdfPath} download className="btn btn-primary cert-card__dl">
          <Download size={16} /> Certificat PDF
        </a>
        <span className="cert-card__code">
          <ExternalLink size={13} /> Code : {cert.verificationCode}
        </span>
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section className="section certifications-page">
      <div className="container">
        <ScrollReveal>
          <span className="laysimp">Parcours professionnel</span>
          <h1 className="certifications-page__title">Certifications</h1>
          <p className="section__lead">
            Simulations de poste validees par des entreprises de renommee mondiale via la
            plateforme Forage.
          </p>
        </ScrollReveal>
        <div className="certifications-page__grid">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
