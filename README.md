# Portfolio — Kouadio Poyard Samuel-Elie

Site portfolio construit avec Vite + React, React Router et Framer Motion.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`.

## Déploiement (GitHub Pages ou Netlify)

- **Netlify** : glisser-déposer le dossier `dist/` après `npm run build` sur app.netlify.com, ou connecter le dépôt Git (commande de build : `npm run build`, dossier de publication : `dist`).
- **GitHub Pages** : utiliser un workflow GitHub Actions (Vite + gh-pages), ou le package `gh-pages` (`npm install -D gh-pages`, script `"deploy": "gh-pages -d dist"`).

## À compléter avant mise en ligne

1. **Photo de profil** — remplacer le cercle placeholder dans `src/pages/CV.jsx` (`<div className="cv-photo">`) par une vraie image.
2. **CV en PDF** — déposer le fichier dans `public/cv-kouadio-poyard.pdf` (le bouton de téléchargement dans `src/pages/CV.jsx` pointe déjà vers ce chemin).
3. **Liens de contact** — remplacer les liens placeholder (email, LinkedIn, GitHub) dans `src/components/Footer.jsx` et `src/pages/Contact.jsx` par les vrais liens.
4. **Contenu des projets** — toutes les données sont centralisées dans `src/data/projects.js`, un seul fichier à modifier pour ajuster ou ajouter un projet.

## Stack

- React 19 + Vite
- React Router (navigation multi-pages)
- Framer Motion (animations au scroll)
- lucide-react (icônes)
