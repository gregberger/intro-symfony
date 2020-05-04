---
title: Installation
---
#  Installation

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