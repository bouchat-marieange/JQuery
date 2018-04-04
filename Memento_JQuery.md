# Mémento JQuery

![Logo JQuery](images/Jquery.png)


Pour bien comprendre le fonctionnement de JQuery, il faut comprendre la technique client-serveur utilisée pour échanger des informations sur le Web.

* Le "client" désigne tout ordinateur, tablette, téléphone  ou autre périphérique qui consomme des données.

* Le "serveur" désigne tout ordinateur qui délivre des données

Lorsque vous tapez une adresse dans votre navigateur, vous utlisez un client web. Ce client web envoie une demande d'informations au serveur correspondant. Les informations sont recherchées sur le serveur, acheminées ajusqu'au client et finalement affichées dans le navigateur du client.

![client_serveur](images/client_serveur.png)

Il est important de comprendre que le code JQuery s'exécute coté client. Dans la plupart des cas, il n'y aura aucun échange avec un serveur et donc quasiment aucun délai entre le débute et la fin de l'exécution du code JQuery. Attention cependant un code JQuery mal écrit ou/et non optimisé peut nécessité de nombreuses secondes (voir minutes) pour s'éxécuter!

Avec JQuery vous n'êtes soumis à la disponibilité d'aucun serveur ce qui rend les temps d'éxécution très courts.

HTML, JavaScript, AJAX et JQuery:

* **HTML** langage de base du Web, utilise un ensemble de balises pour décrire les données à afficher

* **CSS** langage consacré à la mise en forme de contenus HTML . Il assure l'uniformité des pages et facilite leur maintenance.

* **JavScript** éxécuté coté client, il ajoute de l'interactivité aux pages web

* **AJAX** permet de mettre à jour une partie (et une partie seulement) d'une page web en demandant les données nécessaires à un serveur. Les échanges client-serveur sont donc limités et les pages Web sont affichée plus rapidement.

* **JQuery** est une bibliothèque (c'est à dire un ensemble de codes prêts à l'emploi) conçue pour simplifier l'écriture de code JavaScript et AJAX.

![Fonctionnement JQuery](images/fonctionnement_jquery.png)

Ce shéma suppose qu'une page Web est affichée sur l'ordinateur, la tablette ou le téléphone client. Le code JQuery peut mettrre à jour la page sans accéder au serveur. Mais il peut également mettre à jour la page en demandant l'aide du serveur. Il se comporte alors comme du code AJAX (2 et 3).


## Qu'est-ce que JQuery

JQuery est une bibliothèque qui permet d'agit sur le code HTML, CSS, JavaScript et AJAX. JQuery permet de manipuler les éléments mis en place en HTML (textes, images, liens, vidéos, etc...) et mis en forme en CSS (position, taille, couleur, transparence, etc) en utilisant des instructions simples qui donnent accès aux immenses possibilités de JavaScript et d'AJAX.

Pourquoi ne pas utliser directement la puissance de JavaScript et AJAX. Cest langages sont très puissant mais sont également très "susceptibles" dnas leur syntaxe et vraiment très verbeux. Toute erreur insignifiante dans la syntaxe provoque généralement la non-exécution de l'instruction correspondante, de plus il est nécessaire d'écrire de nombreuses lignes pour faire un simple petit traitement.Une seule instruction JQuery peut remplacer plusieurs dizaine d'instructions JavaScript!

Voici où intervient JQuery dont la devise est "Write less, do more" (Ecrire moins pour faire plus). Le fait d'écrire moins de code réduit d'autant la possibilité d'écrire des erreurs dans le code.

La syntaxe utilisée en Jquery est logique, facile à mettre en oeuvre et devient vite une seconde nature du programmeur.

N'oubliez pas de tester votre code sur les principaux navigateurs (Chrome, Safari, Firefox, Opéra) pour vérifier le bon fonctionnement des interactions que vous aurez mis en place avec JQuery.

## Ressources

Documentation officielle de JQuery (en anglais): http://learn.jquery.com/

Forum de discussion dédié à JQuery (en anglais) : https://forum.jquery.com/

Forum de discussion dédié à JQuery (en français) : http://www.jquery-fr.com/forum/


## Ce qui rend JQuery si puissant et universel

JavaSript est né en 1995 et son implémentation dans les différents navigateurs à été faite de façon plutôt anarchique, certaines fonctionnalités étant retenues, d'autres pas et cela selon les différentes navigateurs et même selon les différentes version d'un même navigateur. Un véritable casse-tête pour les programmeurs.

Jquery créer en 2006 par John Resig en définissant son propre jeu d'instructions a agit comme une surcouche aux différents versions de JavaScript, qu'elles soient existantes ouà vernir. JQuery tient compte des navigateurs présents sur le marché, de leurs multiples versions et de leur compatibilités avec les instructions des langages JavaScript et AJAX.

Cela évite qu'un traitement écrit en JavaScript pour qu'il s'exécute correctement sur les différentents versions de chaque navigateurs, demande au programmeur de mettre en place une batterie de teste et doivent exécuter un code spécifique à chaque navigateur et chaque version.

![Test Javascript](images/test_javascript.png)

Ce shéma est une caricature de la réalité ayant pour seul but de montrer la difficulté de créer un code qui s'éxécute de façon similaire sur les différentes navigateurs du marché.

Aujourd'hui on utilise des techniques plus modernes basées sur la détection des fonctionnalités supportées par chaque navigateur. Leurs mises en place peux cependant rester laborieuses.

En JQuery ces tests sont inutiles, il suffit d'éxécuter les instructions nécessaires, sans se préocupper du navigateur utlisé, ni de la version du langage JavaScript compatible avec ce navigateur. Tous ces tests sotn réalisés de façon transparencte par JQuery, vous n'avez à vous préoccuper que du code.

JQuery est très pratique mais ne négliger pas des bases solides HTML pour ne vous concentrer que sur l'aspect visuel du développement.

Lorsque une nouvelle version de JavaScript, voit le jour, les instructions JQuery sont complétées en conséquence. Vous pouvez continuer à utiliser les instructions qvec lesquelles vous avez l'habitude de travailler et/ou consulter la documentation sur les nouvelles instructions disponibless. . Toutes les instructions JQuery utlisées fonctionnneront dans tous les navigateurs disponibles.

Autres avantages de JQuery:

* Documentation officielle très fournie et de grande qualité
* Grande communauté en perpétuelle expansion fournissant un support de qualité
* De nombreux acteurs de premier plan du Web utilisent JQuery (Microsoft, Google, Amazon, Twitter, Mozilla, ...)
* Une multitudes de plugins est disponible afin d'augmenter les possibilités de base de JQuery.

## Installer Jquery

JQuery est une bibliothèque JavaScript. En d'autres termes, un fichier d'extension ```.js```. Pour l'utiliser dans une page HTML, il suffit d'y faire référence en utilisant une balise ```<script>```

```html
<script src="jquery.js"></script>
```

Dans cet exemple, l'attribut `src` vaut `jquery.js`. L'emplacement du fichier n'est pas précisé dans l'attribut. Cela signifie qu'il devra se trouver dans le même dossier que le document HTML.

Mais ce code seul ne fonctionnera pas si le fichier jquery.js n'est pas sur votre ordinateur. Vous avez donc 2 possibilités:

* Ordinateur pas raccordé à internet ou connexion lente: télécharger la bibliothèque JQuery dans une dossier quelconque et y faire référence localement.

* Si votre ordinateur est toujours connecté à internet. vosu pouvez faire référence à la bibliothèque JQuery en indiquant une adresse Web.

Voici ces 2 solutions expliquée en détails:

### Téléchargement de JQuery sur votre Ordinateur

Aller sur le site de JQuery : https://code.jquery.com/ et télécharger la dernière version en date en cliquant sur le lien ´jquery.js´ dans le cadre ´Recent Stable Versions´.

![Télécharger JQuery](images/telecharger_jquery.png)

Vous pouvez choisir entre la version jquery.js (utilisée en développement) et la version jquery.min.js (utilisée en production lorsque le code aura été testé, débogué et placé sur le web). Cest deux fichiers sont strictement identiques d'un point de vue fonctionnel. Par contre le deuxième (jquery.min.js) à une taille inférieure car tous les espaces et tabulations et commentaires ont été suppriméset le noms de variables et des fonctions ont été raccourcis.

![Version jquery.min.js](images/version_min.png)

Vous pouvez aussi minimiser vos propres script Jquery pour qu'ils se chargent plus vite avec Google Closure Compiler (https://closure-compiler.appspot.com/home) ou YUI Compressor (https://developer.yahoo.com/yui/compressor/)

Aller dans le dossier de téléchargement de votre ordinateur pour récupérer le fichier jquery.js et déplacer le dans le dossier où vous développez vos codes JQuery.

![Déplacer JQuery](images/deplacer_jquery.png)

Si vous disposez d'une connexion internet rapide et permanente , vous pouvez également faire référence au ficheir jquery.js sur un CDN (pour Content DElivery Network). Constitués d'ordinateurs reliés en réseau via internet . Ces éléments d'infrastructures coopèrrent pour mettre à disposition aussi vit que possible la bibliothèque JQuery. Vous pouvez utilisez les CSN JQuery, Google ou Microsoft. Voici les adresses correspondantes

**JQuery**
version non minimisée : http://code.jquery.com/jquery.js
version minimisée: http://code.jquery.com/jquery.min.js

**Google**
version non minimisée : http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js
version minimisée: http://ajax.googleapis.com/ajax/libs/j [...] jquery.min.js

**Microsoft**
version non minimisée : http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.js
version minimisée: http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js

Attention les CDN JQuery et Google donnent directement accès à la dernière version de JQuery, mais pour le CDN Microsoft il faut préciser la version à utiliser dans l'adresse. Cela peut être utile si vous voulez utlisez une version particulière de JQuery.

Voici la page listant les différentes versions de JQuery : https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0

L'utilisation d'un CDN est intéressante en production (quand votre code JQuery a été testé et hébergé sur une serveur Web).car :

* En faisant référence à un fichier externe à votre site, vous n'entamez pas sa bande passante.

* Etant donnés que les CDN ont une grande bande passante, ils sont très réactifs.

* Le fichier jquery.min.js issu d'un CDN est bien souvent déja présent dans la mémoire cache du navigateur.

Ces trois raisons font que votre page se chargera plus rapidement.

Par contre en phase de développement (lorsque vous mettez votre code JQuery au point sur votre ordinateur local),il est conseillé de télécharger le fichier jquery.js et d'y faire référence localement. En effet même si les les CDN ont une excellente bande passante, l'utilisation d'un fichier local est bien plus rapide.

###  En Résumé

* En règle générale, le code JQuery s'exécute sur les ordinateurs clients. Cependant il peut parfois demander à un serveur de mettre à jour une partie d'une page en utlisant du code AJAX.

* La meilleure technique pour développer du code JQuery sur son ordinateur consiste à télécharger le fichier jquery.js, à le placer dans un dossier de son disque dur et à faire référence à ce fichier dans une balise <script> dans votre fichier html..

* Lorsquele code a été testé et débogué, vous le placerez sur un serveur Web avec votre client FTP (exemple: FileZilla) et vous ferez référence au fichier jquery.min.js stocké sur un CDN pour améliorer les temsp de réponses sans grignoter la bande passante de votre serveur.
