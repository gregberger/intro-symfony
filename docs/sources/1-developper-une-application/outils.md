--- 
title: Les outils
---

# Les outils à notre disposition

## Flex: plugin pour Composer

> doc: https://symfony.com/doc/current/setup/flex.html 
	
Flex est une nouveauté introduite dans Symfony 4. 
Il s’agit d’un plugin pour composer qui permet de faciliter l’installation et la désinstallations de packages pour Symfony. 
Ce plugin modifie le comportement des commandes require, update et remove de Composer.

À la différence des packages Composer, les packages Flex peuvent se composer de plusieurs librairies 
ainsi que d’un fichier de configuration manifest.json qui contient les différentes instructions 
pour l’installation, la configuration et la désinstallation.
 
On parle alors de recette (recipe), c’est à dire l’ensemble des différentes instructions nécessaires à l’installation du package.
	
Les packages officiels: https://symfony.sh

### packs utiles 
* **annotations**
* **debug-pack**
* **profiler-pack**
* **maker-bundle**

### Exemple: installation du profiler-pack

<asciinema id="vP3FquYnAOAGUDQhmmcFxKAii" rows="20"></asciinema>

Le **profiler-pack** permet d'installer la debug toolbar de Symfony. Pour ce faire, Twig, le moteur de templates est un prérequis.

On constate dans l'exemple que Twig a bien été installé, et qu'un certain nombre de fichiers et répertoires ont été créés par la recipe (ex. `config/routes/dev/web_profiler.yaml`)

## L'outil console

L’outil console est un outil en ligne de commande qui fournit un grand nombre de commandes facilitant la gestion et le développement d’applications Symfony.
 
Symfony fournit par ailleurs la librairie permettant de créer des commandes personnalisées, bon nombre des éléments de cette librairie sont utilisés dans composer et dans symfony cli

### Exemple: lister les différentes commandes disponibles 

<asciinema id="Kl3T1YaHbsTZv7himNo6NO8Xt" rows="40"></asciinema>


## Le serveur de développement


Fourni avec php, il est possible de l'utiliser en direct 

    php -S localhost:8000 -d public
    
Ou via l'outil symfony en ligne de commande 

    symfony serve
    
> à partir de la racine de votre projet 

  