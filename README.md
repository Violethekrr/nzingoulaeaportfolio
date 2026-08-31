# Portfolio — Eddy Nzingoula

Portfolio de génie civil. React 19 + TypeScript + Vite + Tailwind CSS 4 + Framer Motion.

## Démarrer

```bash
npm install
npm run dev      # développement, http://localhost:5173
npm run build    # production, sortie dans dist/
npm run preview  # prévisualiser le build
```

## Mettre à jour le contenu

Tout le contenu éditorial est regroupé en haut de `src/Pages/Accueil.tsx`,
dans des tableaux nommés :

| Tableau | Contenu |
|---|---|
| `OUTILS` | logiciels et référentiels du bandeau |
| `projetsData` | cartes projets (titre, contexte, chiffres clés, image) |
| `experiencesData` | parcours professionnel |
| `formationsData` | cursus |
| `skillsData` | compétences techniques |
| `domainesData` | domaines d'intervention |
| `aproposData`, `competencesData`, `philosophieData` | section À propos |

La fiche profil (bouton flottant en bas à droite) se modifie dans
`src/Composant/Profil.tsx`, objet `defaultProfil`.

## Images

Dans `public/` :

- `eddy.jpg` — portrait
- `r7-batiment.jpg`, `r7-charges.jpg`, `r7-modele.jpg`, `r7-plans.jpg`, `r7-poteau.jpg` — projet R+7
- `treillis.jpg`, `treillis2.jpg` — poutre treillis en spaghetti
- `CV-Eddy-Nzingoula.pdf` — CV téléchargeable

Pour remplacer une image, écraser le fichier en gardant le même nom.
Format conseillé : 900 × 560 px pour les vignettes projet, 720 × 900 px pour le portrait.

## À compléter avant mise en ligne

- LinkedIn : `Accueil.tsx` section Contact, et `Profil.tsx` champ `linkedin`
- Dates réelles du stage de fin d'études (février 2027 est une hypothèse)
- Permis B : à confirmer ou retirer du CV

## Déploiement

Netlify ou Vercel : commande `npm run build`, dossier de publication `dist`.
"# nzingoulaeaportfolio" 
