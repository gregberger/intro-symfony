(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{329:function(e,t,n){"use strict";n.r(t);var a=n(33),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"doctrine-les-relations-entre-entites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#doctrine-les-relations-entre-entites"}},[e._v("#")]),e._v(" Doctrine, les relations entre entités")]),e._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://symfony.com/doc/current/doctrine/associations.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),n("OutboundLink")],1)])]),e._v(" "),n("blockquote",[n("p",[e._v("There are two main relationship/association types:\n"),n("strong",[e._v("ManyToOne / OneToMany")]),e._v("\nThe most common relationship, mapped in the database with a foreign key column (e.g. a category_id column on the product table).\nThis is actually just one association type, but seen from the two different sides of the relation.\n"),n("strong",[e._v("ManyToMany")]),e._v('\nUses a join table and is needed when both sides of the relationship can have many of the other side (e.g. "students" and "classes":\neach student is in many classes, and each class has many students).\nFirst, you need to determine which relationship to use. If both sides of the relation will contain many of the other side (e.g. "students" and "classes"), you need a ManyToMany relation. Otherwise, you likely need a ManyToOne.')])]),e._v(" "),n("p",[e._v("Doctrine permet de modéliser les relations entre entités à l'aide d'annotations ou de la commande "),n("code",[e._v("make:entity")])]),e._v(" "),n("h2",{attrs:{id:"deux-types-de-relations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deux-types-de-relations"}},[e._v("#")]),e._v(" Deux types de relations")]),e._v(" "),n("p",[e._v("Il existe principalement deux types de relations :")]),e._v(" "),n("h3",{attrs:{id:"manytoone-onetomany"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manytoone-onetomany"}},[e._v("#")]),e._v(" "),n("strong",[e._v("ManyToOne / OneToMany")])]),e._v(" "),n("p",[e._v("La relation la plus courante, représentée en DB par une clé étrangère (par exemple, une colonne "),n("code",[e._v("category_id")]),e._v(" dans une table "),n("code",[e._v("produits")]),e._v(").")]),e._v(" "),n("p",[e._v("Il s'agit dans les faits d'une seule relation pouvant être envisagée à partir de chacune des entités la composant :")]),e._v(" "),n("ul",[n("li",[e._v("Un produit a une seule catégorie => "),n("code",[e._v("ManyToOne")]),e._v(" du point de vue de la table : plusieurs produits différents ["),n("strong",[e._v("many")]),e._v("] peuvent avoir une même catégorie ["),n("strong",[e._v("one")]),e._v("]")]),e._v(" "),n("li",[e._v("Une catégorie a plusieurs produits => "),n("code",[e._v("OneToMany")])])]),e._v(" "),n("h3",{attrs:{id:"manytomany"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manytomany"}},[e._v("#")]),e._v(" "),n("strong",[e._v("ManyToMany")])]),e._v(" "),n("p",[e._v("Utilise une table de jointure et est nécéssaire lorsque chacun des côtés d'une relation peut avoir plusieurs entités de l'autre côté")]),e._v(" "),n("p",[e._v('par exemple "étudiants" et "cours" : chaque étudiant peut suivre plusieurs cours, et chaque cours a plusieurs étudiants.')]),e._v(" "),n("p",[e._v("Pour déterminer le type de relation à utiliser, savoir si chaque côté va contenir plusieurs de l'autre (étudiants et cours) dans ce cas, ce sera une "),n("code",[e._v("ManyToMany")]),e._v(". Dans le cas contraire, on utilisera une "),n("code",[e._v("ManyToOne")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("NB")]),e._v(" "),n("p",[e._v("La relation "),n("code",[e._v("OneToOne")]),e._v(" existe également, mais dans l'usage, elle est identique à "),n("code",[e._v("OneToMany")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);