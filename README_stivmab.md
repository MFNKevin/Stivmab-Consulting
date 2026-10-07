# StivMab Consulting

Site vitrine et back-office du cabinet StivMab Consulting : présentation des offres de service, formulaire de contact avec confirmation par courriel, recueil et traçabilité des consentements, et une interface d'administration réservée.

Application React déployée sur Base44, avec des fonctions serveur en TypeScript (Deno) pour l'envoi de courriels, la vérification par code à usage unique et la génération du plan du site.

## Stack

| Couche | Technologies |
| --- | --- |
| Front-end | React 18, Vite, React Router, Tailwind CSS, shadcn/ui, Framer Motion, Recharts |
| Back-end | Base44 (entités, règles d'accès, authentification), fonctions serveur Deno / TypeScript |
| Courriel | API Resend (clé lue dans l'environnement serveur, jamais exposée au navigateur) |
| Qualité | ESLint, vérification de types via `jsconfig.json` |

## Fonctionnalités

- **Site public** multilingue : services, mentorat, accompagnement en allemand, à propos, contact.
- **Formulaire de contact** avec vérification de l'adresse par code à usage unique, puis notification de l'équipe et accusé de réception au visiteur.
- **Conformité RGPD** : mentions légales et politique de confidentialité versionnées, consentements horodatés et conservés dans une entité dédiée.
- **Back-office `/admin`** : tableau de bord d'activité, messages reçus, consentements, journal d'audit, génération de QR codes.

## Sécurité

Le contrôle d'accès est appliqué **côté serveur**, pas seulement dans l'interface. Chaque entité sensible porte une règle d'accès au niveau des lignes :

```jsonc
"rls": { "read": { "user_condition": { "role": "admin" } } }
```

Les pages d'administration sont donc inutiles sans le rôle correspondant : l'API refuse la lecture, même si quelqu'un atteint l'URL. Le composant `AdminLayout` ajoute une garde côté client (`useAdminAuth`) pour l'ergonomie, et un journal d'audit conserve la trace des accès.

Aucun secret n'est présent dans le dépôt : les jetons viennent des paramètres d'exécution et la clé Resend est lue dans l'environnement des fonctions serveur.

## Installation

Prérequis : Node.js 18 ou plus.

```bash
git clone <url-du-depot>
cd stivmab-consult-grow
npm install
```

Créer un fichier `.env.local` à la racine :

```
VITE_BASE44_APP_ID=<identifiant de l'application Base44>
VITE_BASE44_APP_BASE_URL=<url du back-end Base44>
```

Côté fonctions serveur, définir `RESEND_API_KEY` dans les variables d'environnement Base44.

```bash
npm run dev     # serveur de développement
npm run build   # build de production dans ./dist
npm run lint    # analyse statique
```

## Structure

```
src/
  pages/          pages publiques et back-office /admin
  components/     composants d'interface, dont ui/ (shadcn)
  lib/            contexte d'authentification, données légales, paramètres d'application
  api/            client Base44
  hooks/          hooks personnalisés (dont useAdminAuth)
base44/
  entities/       schémas de données et règles d'accès
  functions/      fonctions serveur Deno : envoi de code, notification, confirmation, sitemap
```

## Déploiement

Toute modification poussée sur la branche principale est répercutée dans le Builder Base44. La mise en ligne se fait depuis Base44.

---

Développé par Nick Kevin Mabou Fotso — [github.com/MFNKevin](https://github.com/MFNKevin)
