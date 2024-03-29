---
title: Organisation et planning des séances
--- 

[[toc]]

# Organisation des séances
## Planning
|dates  |matiere|
--------|-------|
[2020-04-20](./#seance-1-20-avril-2020) | Introduction aux Frameworks, Présentation des concepts : `Kernel.php`, `Routing`, `Controller`, `Response`, `Request` et création d'un projet Symfony
[2020-04-27](./#seance-2-27-avril-2020) | Les vues : Présentation du moteur de template : `Twig` + Introduction au `Service Container` + `MakerBundle`  
[2020-05-04](./#seance-3-04-mai-2020) | Application des concepts : Mise en place du projet d'exemple
[2020-05-11](./#seance-4-11-mai-2020) | Le modèle : Présentation de `Doctrine` : concepts : `ORM`, `Entity`, `Migrations`, `Fixtures`
[2020-05-18](./#seance-5-18-mai-2020) | Le modèle : Présentation de `Doctrine` : Les Relations + les `Repositories` et requêtes avancées (`QueryBuilder`) 
[2020-05-25] | Présentation du composant `Form` : les formulaires: création, traitement et validation
[2020-06-05] | Sécuriser son application et gestion des roles utilisateurs
[2020-06-08] | Gestion des, assets frontend avec `Webpack Encore`
[2020-06-10] | Application des concepts + questions/réponses
[2020-06-15] | Evaluation

## Journal de classe
### Seance 1 : 20 avril 2020 

- introduction et présentation
- La structure de répertoires
- Les fichiers de configuration
    - `.env`
    - le répertoire `config/` et les fichiers .yaml
- `Kernel.php` et fonctionnement du framework
- Controleurs et routes : première approche 

### Seance 2 : 27 avril 2020

- Rappels, questions et exercice
- Les routes (suite) :
    - correspondance méthodes HTTP 
    - routes et paramètres
        - validation
        - paramèrtres spéciaux  
- Les contrôleurs : 
    - Les bases
        - Générer url
        - Redirections
        - Templates
        - Récupérer des services    
    - Générer controleurs
    - Erreurs et 404
    - L'objet `Request` en paramètres
    - Les sessions

### Seance 3 : 04 mai 2020

- Twig
    - installation
    - fonctionnalités de base : 
        - syntaxe
        - structure
    - fonctions et filtres
    - héritage de templates 
    
> Séance >3bis : 09 mai 2020 
>   liens vers javascripts et css dans twig
>   utilisation de Faker dans un service Symfony

### Séance 4 : 11 mai 2020

- partie 1
    - Réponses aux questions sur l'Exercice
    - Précisions Twig :
        - Lien vers css et html : la fonction asset
    - Présentation de la barre d'outils de debug de Symfony
    
- partie 2 : Présentation de Doctrine
    - Qu'est-ce qu'un ORM ?
    - Installation de Doctrine
    - Doctrine Migrations
    - Création d'un classes Entity simple
        - Les annotations Doctrine
        - CRUD avec Doctrine dans Symfony 
        
### Séance 5 : 18 mai 2020

- partie 1
    - Réponses aux questions
    - Rappels : 
        - création entité
        - CRUD de base
        - Param Converter

- partie 2 :
    - Mettre et supprimer des objets
    - les Data Fixtures
    - Les relations entre entités
        - One to Many / Many to One
        - Many to many   