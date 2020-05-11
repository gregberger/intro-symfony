---
title : Doctrine, principes de base
---

# Doctrine, principes de base

## Installation

    composer require orm-pack
    composer require --dev maker-bundle

Il est possible de lister les commandes fournies par Doctrine :

    php bin/console list doctrine
    
### Configuration de la connexion à la base de données 

Lors de l'installation de l'**orm-pack** la variable `DATABASE_URL` a été ajoutée au fichier `.env`  
Copier cette variable dans le fichier `.env.local` et lui assigner 
la configuration sopécifique à l'environnement de développement local (vérifier le port de MySQL dans WAMP)

```
# exemple :
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name"
```

Une configuration plus précise de l a base de données est possible dans le fichier `config/packages/doctrine.yaml` (on pourra notamment y configurer la version de MySQL) 

### Création de la DB

    php bin/console doctrine:database:create


## Créer une classe Entity

Du point de vue de l'application, ce sont des objets php qui seront manipulés pour représenter les enregistrements en base de donnée.

Doctrine (les ORM, en général) permet de facilement créer, récupérer, mettre à jour ou supprimer des enregistrement DB à partir d'objets PHP.

L'ORM permet en outre de configurer les aspects relationnels (liens entre les tables) d'une DB.

Pour créer une classe Entity, utiliser la commande interactive du maker bundle :

    php bin/console make:entity
    
Répondre aux questions de l'interface en ligne de commande pour générer la classe configurée correctement.

## Les Migrations Doctrine : Créer les tables en Base de données

Une fois que la classe est correctement configurée, il faut pouvoir mettre à jour la DB afin de créer la table correspondante.
 

## Persister des objets en DB

### Validation des objets

## Récupérer des objets en DB

## Récupération automatique d'objets : Le Param Converter

## Supprimer des objets

