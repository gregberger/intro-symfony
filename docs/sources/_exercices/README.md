---
mainTitle: Intro Symfony 5 - Exercices
---

# Exercices

## 27 avril 2020 : Rappel

::: tip objectifs 
- Mise en pratique des concepts vus la semaine précédente:
    - Mise en route d'un projet symfony
    - Création d'un contrôleur
    - Utilisation du routing de base 
:::

1. Si ce n'est pas encore fait, créez un nouveau projet Symfony
2. Créez un nouveau contrôleur nommé `App\Controller\LuckyController` 
    * dans ce controlleur, créez une méthode nommé `randomNumber()`
    * Cette méthode Le contrôleur doit renvoyer un nombre aléatoire (si il le faut, aidez vous de la documentation de [php](https://www.php.net/manual/fr/function.rand))
3. Configurez la route de manière à pouvoir afficher le résultat sur cette url : `https://127.0.0.1:8000/random-number`
4. Aller plus loin:
    * faire en sorte que la méthode puisse renvoyer un nombre aléatoire dans une fourchette définie par l'utilisateur (n'oubliez pas les valeurs par défaut)
    * configurer la route pour que l'utilisateur puisse définir la fourchette dans l'url 
    
            Exemple: /random-number/0/1000
            

## 04 mai 2020 : mise en place du template du projet

::: tip objectifs 
- Mise en pratique des concepts vus jusqu'à présent en particulier:
    - Le routing
    - Twig et l'héritage multiple au sein des templates
    - Création de services et injection de dépendances 
:::

- créer un projet qui contiendra un blog => BlogController
- utiliser un template existant https://startbootstrap.com/previews/clean-blog/
    - le découper avec twig
- Mettre en place les méthodes du controlleur 
    - page d'index
    - page de détail du blog
    - (bonus: créer une page 'à propos') 
- Créer un service qui doit: 
    - Implémentanter une `ArticleRepositoryInterface` (que vous créerez également)
    - Utiliser [Faker](https://packagist.org/packages/fzaninotto/faker) pour générer des fausses données
- La structure d'un article : 
   ```
   Article:
    - id
    - title
    - content
    - image
    - author
    ```