---
title: Utilisation de la librairie Fzaninotto\Faker dans un projet Symfony
--- 

# Utilisation de la librairie `Fzaninotto\Faker` dans un projet Symfony

`Fzaninotto\Faker` est une librairie PHP permettant de générer des données factices pour peupler les pages 
de vos appliaction avant de disposer de données réelles. 
Cela permet notamment de valider que votre design est adapté aux edge cases (p.ex, sur un blog : articles très longs, titres courts... ); 
de tester les formats de date, l'intégration d'images ou l'aspect responsive de l'ensemble

## Installation de Faker

Comme toute bibliothèque php publiée sur https://packagist.org, [Fzaninotto\Faker](https://packagist.org/packages/fzaninotto/faker) s'installe via `composer`

    composer require --dev fzaninotto\faker

> NB le `--dev` de la commande composer permet de séparer les dépendances destinées exclusivement au développement de celles utilisées en production

> NB2 :La documentation de la bibliothèque se trouve dans le fichier README accessible sur le [repository github de Faker](https://github.com/fzaninotto/Faker)


## Configuration du Service Container pour l'utilisation de `Faker` en tant que service

> Symfony utilise [l'injection de dépendances](https://eilgin.github.io/php-the-right-way/#dependency_injection) pour permettre
> un accès aux différents services (ex: Logging, ORM...) utilisés dans l'application. [Doc](https://symfony.com/doc/current/service_container.html)    

Symfony fournit une manière simple d'accéder au conteneur de Services et permet d'injecter 
les objets/services dans les méthodes automatiquement (comme l'objet $request dans les controleurs) 
en utilisant le Type Hinting (faire référence à la classe de l'objet que l'on souhaite utiliser dans la signature de la méthode):

```php
public function index(Symfony\HttpFoundation\Request $request){
    dd($request);
    return $this->render('index.html.twig');
}
```

> Le fichier de configuration du container se trouve dans `config/services.yaml`  
 
Sous la clé `services:` de ce fichier, la configuration par défaut du framework, qui permet d'appliquer la configuration 
automatique aux classes sous le namespace `App\` qui sont situées dans le répertoire `../src/` du projet (lignes 10 à 24)
 
Il est également possible de configurer des services manuellement. Deux choses sont nécessaires :
 - Le nom complet de la classe de l'objet (le service)
 - Une méthode pour la création (et, éventuellement la configuration) de cet objet
 
La manière dont est construit Faker permet assez facilement de l'intégrer à Symfony en utilisant ce mécanisme. 
Selon la documentation, pour utiliser Faker, il faut récupérer l'objet renvoyé par la méthode `create()` de classe `Faker\Factory` 
(une factory est une classe qui peut renvoyer des instances concrètes d'une autre classe. Il s'agit d'un [design pattern courant dans le génie logiciel](https://fr.wikipedia.org/wiki/Fabrique_(patron_de_conception)). 
Il n'est donc pas nécessaire d'implémenter une méthode se chargeant de la création de l'objet
 
À la fin de `config/services.yaml ajouter sous la clé services:

```yaml
services:
    ### lignes 1-24 configuration par défaut de Symfony
    # ...     
    # la classe renvoyée par Faker\Factory::create()
    # NB    le nom de la classe permet à la fois l'autoloading 
    #       et la référence au service. C'est ce nom de classe que
    #       nous utiliserons dans les signatures des méthodes pour
    #       récupérer l'objet faker 
    Faker\Generator: 
        factory: ['Faker\Factory', 'ceate'] # la classe et la méthode appelées pour créer le service
```

## Utilisation dans un autre service
 
ex. `App\Services\ArticleRepository` 
> créer la classe dans `src/Services/ArticlesRepository.php` 

Injecter Faker dans le constructeur de la classe : 

```php
<?php
namespace App\Services;
use Faker;
class ArticleRepository {
  
  private $faker;
  
  public function __construct(Faker\Generator $faker){
    $this->faker = $faker;
  }
}
```

## Utilisation dans l'action d'un controller 

**exemple:**
```php
public function index(Request $request, Faker\Generator $faker){
    // utiliser faker pour générer un email 
    $email = $faker->email;
   // retourner une réponse
    return new Response('email => '.$email); 
}
```




