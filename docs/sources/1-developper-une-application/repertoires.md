---
title: Structure de répertoires d'une appliaction Symfony 
---

# Structure de répertoires d'une appliaction Symfony 

Une installation initiale de base avec le template `stmfony/skeleton` se compose des répertoires suivants 

```
.
├── .env
├── bin
│   └── console
├── composer.json
├── config
│   ├── bootstrap.php
│   ├── bundles.php
│   ├── packages
│   ├── routes
│   ├── routes.yaml
│   └── services.yaml
├── public
│   └── index.php
├── src
│   ├── Controller
│   └── Kernel.php
└── var
    ├── cache
    └── log
```

## Description

- **config/** 

Contient les fichiers de configuration.Pour le framework, la sécurité, les routes...
	**config/packages** contient les fichiers de configuration des différents packages (ensemble de librairies). NB: il est possible de surcharger les configurations en fonction de l’environnement logique défini pour l’application (par défaut : dev, prod, test)

- **src/** Le code PHP spécifique à l’application (notre répertoire de prédilection)

- **(.)templates/**

Les vues, templates Twig de l’application. Ce répertoire est créé lors de l'installation du pack `template` (aka `twig`)  

- **(.)assets/**

Les sources des assets frontend (javascript, css [sass/less]) utilisés par l’application ces fichiers source seront versionnés. Ils sont destinés à être traités par les différents pré-processeurs mis en oeuvre dans webpack via le plugin Symfony/Encore
::: tip  
La plupart du temps, nous travaillerons dans les 4 répertoires ci-dessus, mais d’autres répertoires méritent notre attention: 
:::

- **public/**

Le répertoire qui sert de racine au serveur web. Tous les fichiers publiquement accessibles seront mis ici. Lors de l’installation de nouveaux paquets, de nouveaux répertoires pourraient être créés ici, au besoin.

- **bin/**

Le répertoire continent les différents exécutables utiles à l’application. 
Ex : console; phpunit

- **var/**

Contient tous les fichiers générés par l’application; le cache (var/cache/) et les logs (var/log/).
Le contenu de ce répertoire étant créé au runtime, il ne doit pas être versionné

- **(.)vendor/**

Les librairies php installées par Composer, le package manager, et configurées dans le fichier ./composer.json à la main ou via la commande composer require

- **(.)node_modules/**

Les librairies javascript installées par le dependency manager (yarn/npm)
