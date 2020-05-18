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

Pour manipuler les entités (CRUD => Create, Retrieve, Update, Delete), Doctrine met à disposition deux classes `EntityManager` et `ServiceEntityRepository`.
Ces classes sont rendues disponibles au sein des controllers qui étendent `AbstractController` via la méthode `$this->getDoctrine()`

Pour créer un nouvel objet et le sauvegarder en DB (au sein d'un controller):
```php
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\BlogArticle;
use Symfony\Component\HttpFoundation\Response;

class BlogController extends AbstractController {
    public function createArticle(): Response
    {
        $article = new BlogArticle();
        $article->setTitle("Mon titre");
        $article->setContent("Le contenu de mon article");
        // définir tous les champs nécessaires...
        // pour persister l'article en question, 
        // récupérer l'entityManager
        $entityManager = $this->getDoctrine()->getManager();
        // Utiliser la méthode persist
        $entityManager->persist($article);
        
        // envoyer les changements à la DB
        $entityManager->flush();
        
        // renvoyer une réponse
        return new Response("nouvel article créé : ".$article->getId()); 
    }
}
```

## Récupérer des objets en DB

Pour récupérer un objet à partir de sa clé primaire :

```php
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\BlogArticle;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController {
    /**
     * @Route("/blog/articles/{id}", name="app_blog_article_show")
    **/
    public function showArticle($id){
        $article = $this->getDoctrine()
                    ->getRepository(BlogArticle::class)
                    ->find($id);
    
        return $this->render('blog/article.html.twig', ['article' => $article]);
    
    }
}
```

## Récupération automatique d'objets : Le Param Converter
Symfony propose également de récupérer automatiquement un objet en DB en utilisant l'injection de dépendances et un mécanisme nommé le `ParamConverter`

> [documentation ParamConverter](https://symfony.com/doc/current/doctrine.html#automatically-fetching-objects-paramconverter) 


```php
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\BlogArticle;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController {
    /**
     * @Route("/blog/articles/{id}", name="app_blog_article_show")
    **/
    public function showArticle(BlogArticle $article, Request $request){
        // sur base de la même route comprenant l'id de l'objet,
        // Symfony est capable d'appeler lui-même la méthode de l'ORM permettant de récupérer cet objet
        return $this->render('blog/article.html.twig', ['article' => $article]);
    }
}
```

## Update d'objets


## Supprimer des objets

