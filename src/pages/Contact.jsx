import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send, Sparkles, Clock, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import ScrollReveal from "../components/ScrollReveal";
import "./Contact.css";

const EMAIL = "kouadioelie534@gmail.com";

const channels = [
  {
    icon: Mail,
    label: "Email direct",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    badge: "Réponse sous 24h",
    color: "var(--teal)",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/kouadio-poyard",
    href: "https://www.linkedin.com/in/samuel-elie-poyard-62b820334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BjbvrHpgLQuyTLXyo4ofpEg%3D%3D",
    badge: "Réseau pro",
    color: "var(--accent)",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/kouadiopoyard",
    href: "https://github.com",
    badge: "Code & Projets",
    color: "var(--text)",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section className="section contact-page">
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="contact-page__header">

            <span className="laysimp">Contact & Collaboration</span>
            <h1 className="section__title">Donnons vie à vos projets</h1>
            <p className="section__lead">
              Disponible pour des missions et opportunités en data science, modélisation
              économétrique, analyse de données et développement d'outils décisionnels assistés par IA.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="contact-grid">
          {/* Column 1: Info & Direct Channels */}
          <div className="contact-info-col">
            {/* Status card */}
            <ScrollReveal delay={0.08}>
              <div className="contact-status-card">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-pulse"></span>
                </div>
                <div>
                  <h2 className="status-title">Disponible pour de nouveaux défis</h2>
                  <p className="status-sub">
                    Stages de fin d'études, missions d'ingénierie statistique ou collaborations de recherche appliquée.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Channels */}
            <div className="contact-channels">
              {channels.map((c, i) => (
                <ScrollReveal key={c.label} delay={0.12 + i * 0.06}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-channel-card"
                  >
                    <div className="channel-icon-box" style={{ "--chan-color": c.color }}>
                      <c.icon size={22} />
                    </div>
                    <div className="channel-details">
                      <div className="channel-meta">
                        <span className="channel-label">{c.label}</span>
                        <span className="channel-badge">{c.badge}</span>
                      </div>
                      <span className="channel-value">{c.value}</span>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Fast copy button */}
            <ScrollReveal delay={0.3}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-copy-email"
                aria-label="Copier l'adresse email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Adresse email copiée !" : "Copier l'adresse email"}</span>
              </button>
            </ScrollReveal>

            {/* Meta details */}
            <ScrollReveal delay={0.35}>
              <div className="contact-meta-box">
                <div className="contact-meta-item">
                  <MapPin size={18} className="meta-icon" />
                  <div>
                    <strong>Abidjan, Côte d'Ivoire</strong>
                    <span>ENSEA, Boulevard de France</span>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <Clock size={18} className="meta-icon" />
                  <div>
                    <strong>Fuseau Horaire</strong>
                    <span>GMT (UTC+0)</span>
                  </div>
                </div>
                <div className="contact-meta-item">
                  <Globe size={18} className="meta-icon" />
                  <div>
                    <strong>Mobilité</strong>
                    <span>Présentiel & Remote international</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2: Interactive Form */}
          <ScrollReveal delay={0.15} className="contact-form-col">
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <Sparkles size={20} className="form-sparkle" />
                <h2 className="form-title">Envoyer un message direct</h2>
                <p className="form-desc">
                  Remplissez ce formulaire et je vous répondrai dans les plus brefs délais.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="success-icon-wrap">
                      <Check size={28} />
                    </div>
                    <h3>Message envoyé avec succès !</h3>
                    <p>Merci pour votre intérêt. Je reviendrai vers vous très prochainement.</p>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setStatus("idle")}
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Votre nom *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Ex: Jean Dupont"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Votre email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="nom@entreprise.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Objet de la demande</label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Ex: Opportunité de stage / Projet"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Décrivez votre projet, mission ou question..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-accent btn-submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <span>Transmission en cours...</span>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
