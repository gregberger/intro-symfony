---
title: Le composant Routing
---
## Routes

> Doc : https://symfony.com/doc/5.0/routing.html 

 > When your application receives a request, it executes a controller action to generate the response. 
 > The routing configuration defines which action to run for each incoming URL. 
 > It also provides other useful features, 
 > like generating SEO-friendly URLs (e.g. /read/intro-to-symfony instead of index.php?article_id=57).
  
Lorsque votre application reçoit une requête, elle exécute une action (méthode) d'un contrôleur pour générer la réponse.
La configuration du routage définit quelle action correspond à chaque URL entrante.
D'autres fonctionnalités utiles sont également fournies, comme la création d'URL SEO-friendly
(par exemple: /read/intro-to-symfony à la place de index.php?article_id=57 )

### Création des routes

**config/routes.yaml**

La configuration par défaut des routes de l'application se trouve dans `config/routes.yaml`. 

Il contient un exemple pour une route nommée `index` dont le chemin (`path`) est `/` (la racine du site) pour lequel 
l'action à exécuter (`controller`) se trouve dans la méthode `index` de la classe `App/Controller/DefaultController`

<<< @../../config/routes.yaml  

Pour tester rapidement le fonctionnement :

- Décommenter toutes les lignes du fichier 
- Créer une classe Controller dans src/Controller (par convention les classes Controller seront suffixées par ...Controller) 
    cette classe peut étendre AbstractController pour profiter des différentes méthodes helpers fournies par le framework.
- Dans cette classe, créer une méthode index() qui doit (impérativement) retourner un objet de type `Symfony\Component\HttpFoundation\Response`

**annotations**

La [méthode recommandée](https://symfony.com/doc/current/best_practices.html#best-practice-controller-annotations) 
pour la configuration des routes, est cependant celle des annotations

Une annotation est une configuration sous forme de commentaire qui peut être lue par un script et ajouter un comportement à une méthode. 
Elles seront placées au dessus de la méthode contrôleur, ce qui simplifie la lecture : la route est directement en regard de la méthode qui la gère.

```php
// exemple
/**
 * @Route("/", name="app_index")
**/
public function index() {
    return new Response('hello world');
}
```

pour utiliser les annotations dans une application Symfony, installer le pack avec Composer :

    composer require annotations
    

