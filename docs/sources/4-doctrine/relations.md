---
title: Doctrine, les relations entre entités
---

# Doctrine, les relations entre entités

> [Documentation](https://symfony.com/doc/current/doctrine/associations.html)

> There are two main relationship/association types:
> **ManyToOne / OneToMany**
    The most common relationship, mapped in the database with a foreign key column (e.g. a category_id column on the product table). 
>   This is actually just one association type, but seen from the two different sides of the relation.
**ManyToMany**
    Uses a join table and is needed when both sides of the relationship can have many of the other side (e.g. "students" and "classes": 
> each student is in many classes, and each class has many students).
> First, you need to determine which relationship to use. If both sides of the relation will contain many of the other side (e.g. "students" and "classes"), you need a ManyToMany relation. Otherwise, you likely need a ManyToOne.

Doctrine permet de modéliser les relations entre entités à l'aide d'annotations ou de la commande `make:entity`

## Deux types de relations
Il existe principalement deux types de relations :

### **ManyToOne / OneToMany**

La relation la plus courante, représentée en DB par une clé étrangère (par exemple, une colonne `category_id` dans une table `produits`).

Il s'agit dans les faits d'une seule relation pouvant être envisagée à partir de chacune des entités la composant : 

- Un produit a une seule catégorie => `ManyToOne` du point de vue de la table : plusieurs produits différents [**many**] peuvent avoir une même catégorie [**one**]
- Une catégorie a plusieurs produits => `OneToMany`

### **ManyToMany**

Utilise une table de jointure et est nécéssaire lorsque chacun des côtés d'une relation peut avoir plusieurs entités de l'autre côté 

par exemple "étudiants" et "cours" : chaque étudiant peut suivre plusieurs cours, et chaque cours a plusieurs étudiants.


Pour déterminer le type de relation à utiliser, savoir si chaque côté va contenir plusieurs de l'autre (étudiants et cours) dans ce cas, ce sera une `ManyToMany`. Dans le cas contraire, on utilisera une `ManyToOne`

:::tip NB
La relation `OneToOne` existe également, mais dans l'usage, elle est identique à `OneToMany`  
::: 


 