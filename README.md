# Opetitsoins - Carte de Visite Virtuelle

Une carte de visite virtuelle moderne et interactive pour Opetitsoins, société spécialisée dans les soins infirmiers à domicile.

## ✨ Caractéristiques

- **Design moderne** : Interface élégante avec des dégradés et animations fluides
- **Responsive** : S'adapte parfaitement à tous les appareils (mobile, tablette, desktop)
- **Interactif** : Animations, effets hover, et fonctionnalités de partage
- **TypeScript** : Code typé pour une meilleure maintenabilité
- **Material UI** : Composants UI modernes et accessibles

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Langage typé
- **Material UI (MUI)** - Bibliothèque de composants UI
- **Emotion** - CSS-in-JS pour les styles
- **Tailwind CSS** - Utilitaires CSS

## 📱 Fonctionnalités

### Carte de Visite Interactive
- **Header animé** avec logo et informations principales
- **Services** présentés avec des icônes et descriptions
- **Évaluations** avec système d'étoiles
- **Informations de contact** complètes
- **Boutons d'action** pour appeler ou envoyer un email
- **Section extensible** avec description détaillée
- **Fonctionnalité de partage** native

### Design & UX
- **Animations fluides** avec Zoom et Fade transitions
- **Arrière-plan animé** subtil avec effets de flottement
- **Thème cohérent** avec palette de couleurs professionnelle
- **Effets vitrés** avec backdrop blur
- **Ombres et élévations** pour la profondeur

## 🛠️ Installation

```bash
# Cloner le repository
git clone <repository-url>
cd opetitsoins

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## 📂 Structure du Projet

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal avec ThemeProvider
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── BusinessCard.tsx   # Composant principal de la carte
│   └── AnimatedBackground.tsx # Arrière-plan animé
├── data/                  # Données de l'application
│   └── companyData.tsx    # Informations de l'entreprise
├── theme/                 # Configuration Material UI
│   └── theme.ts           # Thème personnalisé
└── types/                 # Types TypeScript
    └── company.ts         # Interfaces pour les données
```

## 🎨 Personnalisation

### Modifier les Informations de l'Entreprise
Editez le fichier `src/data/companyData.tsx` pour modifier :
- Nom et slogan de l'entreprise
- Services proposés
- Informations de contact
- Description détaillée
- Évaluations

### Changer le Thème
Modifiez `src/theme/theme.ts` pour :
- Couleurs de la palette
- Typographie
- Bordures et espacements
- Styles des composants

### Ajouter des Services
Dans `companyData.tsx`, ajoutez de nouveaux services avec :
```typescript
{
  icon: <NouvelleIcone />,
  label: 'Nouveau Service',
  description: 'Description du service'
}
```

## 📱 Responsive Design

La carte s'adapte automatiquement aux différentes tailles d'écran :
- **Mobile** : Layout vertical optimisé
- **Tablette** : Ajustements des espacements
- **Desktop** : Affichage complet avec toutes les animations

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
npx vercel --prod
```

### Build Local
```bash
npm run build
npm start
```

## 🔧 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification ESLint

## 📧 Contact

Pour toute question concernant ce projet ou les services Opetitsoins :
- **Email** : contact@opetitsoins.fr
- **Téléphone** : +33 1 23 45 67 89

## 📄 Licence

Ce projet est développé spécifiquement pour Opetitsoins.

---

*Développé avec ❤️ pour des soins de qualité à domicile*
