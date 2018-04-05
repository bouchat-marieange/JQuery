$(function() {
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});

// $(function() { }); vérifie que la totalité de l'arbre DOM a bien été chargée
// avant d'effectuer des modifications sur celui-ci.
//
// Cette instruction aurait aussi pu s'écrire comme ceci:
// jQuery(document).ready(function() {
//   // Ici, le DOM est entièrement défini
// });
//
// Ou comme ceci:
// $(document).ready(function() {
//   // Ici, le DOM est entièrement défini
// });

// L'instruction JQuery $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
// peut s'expliquer ainsi:
//
// $('#texteJQ'), la première partie de l'instruction agit comme un selecteur. Elle retrouve dans le DOM l'élément
// dont l'attribut id vaut "texteJQ". L'id est ici selon la convention du langage CSS représenté
// par un #.
//
//
// html('Hello world. Ce texte est affiché par jQuery.');
// la seconde partie de l'instruction indique ce qui doit être modifié.
// Dans cet exemple on utlise la méthode html() pour demander la modification
// du contenu de la balise.
//
// Le point entre ces deux parties fait le lien entre le selecteur et l'action
