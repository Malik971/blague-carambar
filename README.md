# Blagues Carambar & Co 🌟 (Frontend)

Bienvenue dans la partie **frontend** du projet **Blagues Carambar & Co**, une mini application web amusante pour afficher des blagues aléatoires !

Cette application est construite avec **React + Vite + TypeScript**, stylée avec **Tailwind CSS**, et enrichie de sons rigolos avec **Howler.js**.

---

## 📅 Objectif

Offrir une expérience interactive et fun avec des blagues affichées au clic, provenant soit :

* d'une **API externe** ([https://www.blagues-api.fr](https://www.blagues-api.fr))
* de notre **API backend perso** (Node/Express/Sequelize)

---

## 🚀 Technologies utilisées

* [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Howler.js](https://github.com/goldfire/howler.js/) (sons)
* [Framer Motion](https://www.framer.com/motion/) (animations)
* [GitHub Pages](https://pages.github.com/) pour le déploiement

---

## 📚 Fonctionnalités

* 🎶 Bouton interactif avec son à chaque clic (activable/désactivable)
* 😀 Affichage d'une blague aléatoire (question + réponse)
* 🔄 Deux sources de blagues : API externe / API perso
* 🌈 Expérience visuelle dynamique et responsive

---

## 📂 Structure du projet

```
blagues-front/
├── public/
├── src/
│   ├── components/
│   │   ├── ToggleSoundButton.tsx
│   │   ├── BlaguesAPI.ts (appel blagues-api.fr)
│   │   └── api.ts (appel API perso localhost)
│   ├── sounds/
│   │   └── soundManager.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🔧 Installation locale

```bash
git clone https://github.com/votre-nom/blagues-front.git
cd blagues-front
npm install
npm run dev
```

---

## ⚖️ Configuration

### Variables d'environnement (optionnel)

Créer un fichier `.env` si vous utilisez une API backend locale :

```
VITE_API_URL=http://localhost:3000/api/v1/blagues
```

> Sinon, l'application utilise l'API publique de [https://www.blagues-api.fr](https://www.blagues-api.fr) par défaut.

---

## ✨ Déploiement

Le projet est prêt à être déployé via **GitHub Pages** (vite-plugin).

```bash
npm run build
npm run deploy
```

---

## ℹ️ Infos supplémentaires

* Vous pouvez obtenir un **token personnel** sur [https://www.blagues-api.fr/](https://www.blagues-api.fr/)
* Toutes les blagues affichées via l'API externe excluent les catégories "dark" et "limit"

---

## 🎓 Projet personnel CDA

Projet réalisé dans le cadre de la formation **Concepteur Développeur d'Application**.

Créé avec humour et passion par **Malik Ibo** ✨
