# Configuration Capacitor pour Guestly

Votre application est maintenant configurée avec Capacitor pour devenir une vraie application mobile native !

## Prochaines étapes pour tester sur votre téléphone :

### 1. Transférer le projet sur Github
- Cliquez sur le bouton "Export to Github" en haut à droite
- Clonez votre projet depuis Github sur votre ordinateur :
```bash
git clone [votre-url-github]
cd guestly
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Ajouter les plateformes (iOS et/ou Android)

**Pour Android :**
```bash
npx cap add android
npx cap update android
```

**Pour iOS (nécessite un Mac avec Xcode) :**
```bash
npx cap add ios
npx cap update ios
```

### 4. Builder le projet
```bash
npm run build
```

### 5. Synchroniser avec Capacitor
```bash
npx cap sync
```

### 6. Lancer l'application

**Sur Android (nécessite Android Studio) :**
```bash
npx cap run android
```

**Sur iOS (nécessite un Mac avec Xcode) :**
```bash
npx cap run ios
```

## Notes importantes :

- **Hot-reload activé** : L'app mobile charge directement depuis le serveur Lovable pour faciliter le développement
- **Pour la production** : Vous devrez modifier le `capacitor.config.ts` et retirer la section `server.url`
- **Après chaque modification** : Exécutez `git pull` puis `npx cap sync` pour synchroniser les changements

## Prérequis techniques :

### Pour Android :
- Android Studio installé
- SDK Android configuré

### Pour iOS :
- Mac avec Xcode installé
- Compte développeur Apple (pour tester sur appareil réel)

## Ressources utiles :

- [Documentation Capacitor](https://capacitorjs.com/docs)
- [Guide Lovable + Capacitor](https://docs.lovable.dev/tips-tricks/capacitor)

Bon développement ! 🚀
