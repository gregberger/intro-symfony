---
title: Développer une application avec le framework Symfony
---
# Développer une application avec le framework Symfony

## Installation

Il existe deux façons d'installer Symfony : `composer` et l'outil en ligne de commande `symfony`.

Les deux méthodes font appel à un procédé identique : cloner un template de l'application depuis un repository git.

Les templates sont composés d'une série de répertoires et de fichiers permettant de démarrer rapidement le développement d'une application.

Il existe principalement deux templates : 
* **symfony/skeleton** : La version minimale du framework : Inclut uniquement les composants essentiels à son fonctionnement (`HttpKernel`, `Routing`).
L'avantage est de permettre de n'utiliser que les composants nécessaires à l'application (meilleures performances, ). Il est évidemment possible de les installer en fonction des besoins. 
C'est cette méthode que nous envisagerons. 

* **symfony/web-skeleton** : installe tous les composants nécessaires à la création d'une application web complète (templating, base de données...) 

::: tip tip
NB: il existe deux templates supplémentaires intéressants :

- `symfony/demo` : une application complète richement commentée permettant d'aborder les bonnes pratiques du framework en regardant l'implémentation de référence
- `symfony/book` qui accompagne le livre de Fabien Potentier, [En route vers Symfony 5](/_references/##Symfony)
::: 


### Via symfony cli

> DOC
>
> https://symfony.com/download

Symfony cli est un outil en ligne de commande destiné à communiquer avec les services cloud de Sensio Labs. 

Il est cependant possible de n’en n’utiliser que les fonctionnalités basiques pour créer un projet et utiliser un serveur de développement, par exemple


<asciinema id="SzO02gRsoO5Rd7LxQor46RR78" rows="20"></asciinema>
NB: pour installe tous les composants, utiliser la commande `symfony new nom-du-projet --full`

### Via composer installé localement
::: tip Prérequis :
Installation de Composer fonctionnelle et à jour (composer self-update) (https://getcomposer.org)

La dernière version de l’interpréteur PHP en ligne de commande

Installation sous windows: 

    http://kizu514.com/blog/install-php7-and-composer-on-windows-10/
:::

<asciinema id="sUBbNsslnjLGy0uELaLHr4JA3" rows="20"></asciinema>

### via Docker et docker-compose
Il n’existe pas à proprement parler d’image Docker officielle pour le Framework, 
on pourra néanmoins se baser sur des fichiers de configuration mis en ligne par la communauté 

Cette version est d’excellente facture : https://github.com/dunglas/symfony-docker


## Structure des répertoires
Une installation 

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

**config/** 

Contient les fichiers de configuration.Pour le framework, la sécurité, les routes...
	config/packages contient les fichiers de configuration des différents packages (ensemble de librairies). NB: il est possible de surcharger les configurations en fonction de l’environnement logique défini pour l’application (par défaut : dev, prod, test)

**src/**

Le code PHP spécifique à l’application


**(.)templates/**

Les vues, templates Twig de l’application. Ce répertoire est créé lors de l'installation du pack `template` (aka `twig`)  

**(.)assets/**

Les sources des assets frontend (javascript, css [sass/less]) utilisés par l’application ces fichiers source seront versionnés. Ils sont destinés à être traités par les différents pré-processeurs mis en oeuvre dans webpack via le plugin Symfony/Encore
::: tip  
La plupart du temps, nous travaillerons dans les 4 répertoires ci-dessus, mais d’autres répertoires méritent notre attention: 
:::

**public/**

Le répertoire qui sert de racine au serveur web. Tous les fichiers publiquement accessibles seront mis ici. Lors de l’installation de nouveaux paquets, de nouveaux répertoires pourraient être créés ici, au besoin.

**bin/**

Le répertoire continent les différents exécutables utiles à l’application. 
Ex : console; phpunit

**var/**

Contient tous les fichiers générés par l’application; le cache (var/cache/) et les logs (var/log/).
Le contenu de ce répertoire étant créé au runtime, il ne doit pas être versionné

**(.)vendor/**

Les librairies php installées par Composer, le package manager, et configurées dans le fichier ./composer.json à la main ou via la commande composer require

**(.)node_modules/**

Les librairies javascript installées par le dependency manager (yarn/npm)

## Flex: plugin pour Composer



## L'outil console

## Le serveur de développement
