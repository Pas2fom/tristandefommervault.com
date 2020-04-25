# tristandefommervault.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/c8055bed-63df-4162-b534-8d6db3ca3d65/deploy-status)](https://app.netlify.com/sites/tristandefommervault/deploys)

Site développé avec [Hugo](https://gohugo.io) sur la base du thème [Elate](https://github.com/saey55/hugo-elate-theme).

## Pré-requis

- [Brew](https://brew.sh)
- [Git](https://git-scm.com)
- [Hugo](https://gohugo.io)

### Installer Brew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Recopier cette ligne de commande dans le terminal. Une fois brew installé, on peut installer Git et Hugo.

### Installer Git

```
brew install git
```

### Installer Hugo

```
brew install hugo
```

### Mettre Hugo à jour

Hugo est régulièrement mis à jour, il est recommandé d'essayer de suivre le cycle de publication de nouvelles versions:

```
brew upgrade hugo
```

### GitHub Desktop

GitHub propose une interface qui permet de réaliser les opérations courantes (récupérer des changements, créer une branche, sauvegarder des modifications, pousser une nouvelle branche, créer un pull request), il est conseillé d'utiliser cette application si vous n'êtes pas à l'aise avec la ligne de commande de Git.

https://desktop.github.com

### Atom

Pour travailler localement sur les fichiers, il est recommandé d'utiliser un éditeur comme https://atom.io.

## Développement en local

##  Éditer les contenus

Se positionner dans le dossier et ouvrir Atom. Tous les contenus se trouvent dans le dossier `content`.
Le fichier `config.toml` aussi une partie du contenu de la page d'accueil et les menus de navigations.

![Atom](static/images/docs/atom.png)

### Voir les changements en cours

Lors de modifications en cours, avant d'enregistrer, il est possible de lancer une prévisualisation dans son navigateur.
Se positionner dans le dossier du projet, et dans un terminal lancer la commande:

```
hugo serve -D
```

Ouvrir son navigateur et http://localhost:1313


