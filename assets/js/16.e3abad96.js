(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{335:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"doctrine-principes-de-base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doctrine-principes-de-base"}},[t._v("#")]),t._v(" Doctrine, principes de base")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("composer require orm-pack\ncomposer require --dev maker-bundle\n")])])]),a("p",[t._v("Il est possible de lister les commandes fournies par Doctrine :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("php bin/console list doctrine\n")])])]),a("h3",{attrs:{id:"configuration-de-la-connexion-a-la-base-de-donnees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-de-la-connexion-a-la-base-de-donnees"}},[t._v("#")]),t._v(" Configuration de la connexion à la base de données")]),t._v(" "),a("p",[t._v("Lors de l'installation de l'"),a("strong",[t._v("orm-pack")]),t._v(" la variable "),a("code",[t._v("DATABASE_URL")]),t._v(" a été ajoutée au fichier "),a("code",[t._v(".env")]),a("br"),t._v("\nCopier cette variable dans le fichier "),a("code",[t._v(".env.local")]),t._v(" et lui assigner\nla configuration sopécifique à l'environnement de développement local (vérifier le port de MySQL dans WAMP)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# exemple :\nDATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name"\n')])])]),a("p",[t._v("Une configuration plus précise de l a base de données est possible dans le fichier "),a("code",[t._v("config/packages/doctrine.yaml")]),t._v(" (on pourra notamment y configurer la version de MySQL)")]),t._v(" "),a("h3",{attrs:{id:"creation-de-la-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creation-de-la-db"}},[t._v("#")]),t._v(" Création de la DB")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("php bin/console doctrine:database:create\n")])])]),a("h2",{attrs:{id:"creer-une-classe-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creer-une-classe-entity"}},[t._v("#")]),t._v(" Créer une classe Entity")]),t._v(" "),a("p",[t._v("Du point de vue de l'application, ce sont des objets php qui seront manipulés pour représenter les enregistrements en base de donnée.")]),t._v(" "),a("p",[t._v("Doctrine (les ORM, en général) permet de facilement créer, récupérer, mettre à jour ou supprimer des enregistrement DB à partir d'objets PHP.")]),t._v(" "),a("p",[t._v("L'ORM permet en outre de configurer les aspects relationnels (liens entre les tables) d'une DB.")]),t._v(" "),a("p",[t._v("Pour créer une classe Entity, utiliser la commande interactive du maker bundle :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("php bin/console make:entity\n")])])]),a("p",[t._v("Répondre aux questions de l'interface en ligne de commande pour générer la classe configurée correctement.")]),t._v(" "),a("h2",{attrs:{id:"les-migrations-doctrine-creer-les-tables-en-base-de-donnees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-migrations-doctrine-creer-les-tables-en-base-de-donnees"}},[t._v("#")]),t._v(" Les Migrations Doctrine : Créer les tables en Base de données")]),t._v(" "),a("p",[t._v("Une fois que la classe est correctement configurée, il faut pouvoir mettre à jour la DB afin de créer la table correspondante.")]),t._v(" "),a("h2",{attrs:{id:"persister-des-objets-en-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persister-des-objets-en-db"}},[t._v("#")]),t._v(" Persister des objets en DB")]),t._v(" "),a("p",[t._v("Pour manipuler les entités (CRUD => Create, Retrieve, Update, Delete), Doctrine met à disposition deux classes "),a("code",[t._v("EntityManager")]),t._v(" et "),a("code",[t._v("ServiceEntityRepository")]),t._v(".\nCes classes sont rendues disponibles au sein des controllers qui étendent "),a("code",[t._v("AbstractController")]),t._v(" via la méthode "),a("code",[t._v("$this->getDoctrine()")])]),t._v(" "),a("p",[t._v("Pour créer un nouvel objet et le sauvegarder en DB (au sein d'un controller):")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FrameworkBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BlogArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlogController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Response\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlogArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Mon titre"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Le contenu de mon article"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// définir tous les champs nécessaires...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pour persister l'article en question, ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// récupérer l'entityManager")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$entityManager")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDoctrine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Utiliser la méthode persist")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$entityManager")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// envoyer les changements à la DB")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$entityManager")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// renvoyer une réponse")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"nouvel article créé : "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"recuperer-des-objets-en-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recuperer-des-objets-en-db"}},[t._v("#")]),t._v(" Récupérer des objets en DB")]),t._v(" "),a("p",[t._v("Pour récupérer un objet à partir de sa clé primaire :")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FrameworkBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BlogArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Routing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlogController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n     * @Route("/blog/articles/{id}", name="app_blog_article_show")\n    **/')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDoctrine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlogArticle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'blog/article.html.twig'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'article'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"recuperation-automatique-d-objets-le-param-converter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recuperation-automatique-d-objets-le-param-converter"}},[t._v("#")]),t._v(" Récupération automatique d'objets : Le Param Converter")]),t._v(" "),a("p",[t._v("Symfony propose également de récupérer automatiquement un objet en DB en utilisant l'injection de dépendances et un mécanisme nommé le "),a("code",[t._v("ParamConverter")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://symfony.com/doc/current/doctrine.html#automatically-fetching-objects-paramconverter",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation ParamConverter"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FrameworkBundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BlogArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Routing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlogController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n     * @Route("/blog/articles/{id}", name="app_blog_article_show")\n    **/')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showArticle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlogArticle "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sur base de la même route comprenant l'id de l'objet,")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symfony est capable d'appeler lui-même la méthode de l'ORM permettant de récupérer cet objet")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'blog/article.html.twig'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'article'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"update-d-objets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-d-objets"}},[t._v("#")]),t._v(" Update d'objets")]),t._v(" "),a("h2",{attrs:{id:"supprimer-des-objets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supprimer-des-objets"}},[t._v("#")]),t._v(" Supprimer des objets")])])}),[],!1,null,null,null);s.default=n.exports}}]);