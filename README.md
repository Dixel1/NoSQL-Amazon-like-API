# La petite API style Amazon

Cette API est basée sur le celèbre site web Amazon et utilise MongoDB comme base de données, Node.js comme environnement d'exécution et Redis comme cache. Elle permet de gérer des produits, des avis et des utilisateurs avec les fonctionnalités suivantes :
- Gérer des produits : créer, modifier, supprimer et afficher des produits.
- Gérer des avis : créer, modifier, supprimer et afficher des avis pour des produits.
- Gérer des utilisateurs : s’enregistrer, se connecter, modifier et afficher son profil.
- Sécuriser les routes : utiliser des tokens JWT pour protéger les routes qui nécessitent une authentification.
- Optimiser les requêtes : utiliser Redis comme cache pour les requêtes GET qui renvoient des données fréquemment demandées.

## Installation

Cette API requiert des dépendances. Pour installer les dépendances nécessaires, exécutez la commande suivante à la racine du projet :
``` bash
npm install express mongoose dotenv bcryptjs jsonwebtoken redis
```
***NOTE : Vous devez aussi avoir MongoDB et Redis installés sur votre machine.***

## Configuration :

Adaptez le fichier .env situé à la racine du projet :
``` bash
MONGO_URI=mongodb://localhost:27017/auth_api # ou l'URL de votre base de données MongoDB en ligne
JWT_SECRET=secret123 # ou le secret de votre choix pour le JWT
PORT=3000 # ou le port de votre choix pour le serveur
```

## Usage :
Pour démarrer le serveur, exécutez la commande suivante :

```npm start```


Voici une liste des routes disponibles :
- **GET /products :** pour obtenir tous les produits.
- **GET /products/:id :** pour obtenir un produit par son id.
- **POST /products :** pour créer un nouveau produit (nécessite un token JWT valide).
- **PUT /products/:id :** pour modifier un produit par son id (nécessite un token JWT valide).
- **DELETE /products/:id :** pour supprimer un produit par son id (nécessite un token JWT valide).
- **GET /reviews/product/:id :** pour obtenir tous les avis pour un produit par son id.
- **POST /reviews/product/:id :** pour créer un nouvel avis pour un produit par son id (nécessite un token JWT valide).
- **PUT /reviews/:id :** pour modifier un avis par son id (nécessite un token JWT valide et être le propriétaire de l’avis).
- **DELETE /reviews/:id :** pour supprimer un avis par son id (nécessite un token JWT valide et être le propriétaire de l’avis).
- **POST /users/register :** pour s’enregistrer en tant qu’utilisateur.
- **POST /users/login :** pour se connecter en tant qu’utilisateur et obtenir un token JWT.
- **GET /users/profile :** pour obtenir le profil d’un utilisateur connecté (nécessite un token JWT valide).
- **PUT /users/profile :** pour modifier le profil d’un utilisateur connecté (nécessite un token JWT valide).
