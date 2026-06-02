# Gestionnaires


## Gestionnaire général

La création de documents dépend d'un gestionnaire général.

🔧 Au gestionnaire général de paramétrer tous les champs de dépose de documents demandés aux utilisateurs, et ce depuis le site d'administration.

::: warning ATTENTION ! 

⛔ Un gestionnaire établissement n'a pas accès au site d'administration.
:::

Sont à indiquer, pour chaque document, un titre, un acronyme et une description.

![Ajouter une document](/images/ajout-docs.png)

:::danger CHARTE_SITE !

⚠️ La charte qui détermine si une association est SITE ou HORS SITE est le seul document dont l'acronyme ne doit pas être modifié.

Pour le bon fonctionnement de la plateforme, son acronyme doit rester : CHARTE_SITE.

:::

Sont ensuite à définir les particularités du document.

![Ajouter une document](/images/ajout-docs2.png)

- **Nombre d'exemplaires maximum autorisé** : Laisser à 1 autorisera les utilisateurs à ne déposer qu'un seul document dans le champ concerné. Passer à 4 leur permettra de déposer jusqu'à 4 documents : par exemple, les certificats de scolarité des membres élus d'une association, dans le cadre d'une demande d'agrément.

- **Est requis dans son processus** : Cocher cette case rendra obligatoire la dépose d'un document dans le champ concerné.

:::info DOCUMENTS FACULTATIFS ?
Augmenter le nombre d'exemplaires maximum autorisé et ne pas cocher la case "Est requis dans son processus" 
permettra aux utilisateurs de déposer d'éventuels documents complémentaires, pouvant, par exemple, servir leur projet : affiche, flyer, tract, etc.
:::

- **Jour d'expiration du document au format %m-%d** : Pour la CHARTE_SITE, par exemple, renseigner 08-31 fera expirer le document au 31 août de chaque année.

- **Template de fichier d'exemple** : Ajouter un fichier d'exemple ou un document à signer permettra aux utilisateurs de le retrouver dans la bibliothèque de documents accessible depuis leur tableau de bord.

![Documents](/images/docs.png)

![Documents](/images/docs2.png)

- **Mime types** : À renseigner obligatoirement de façon à restreindre les types de fichier que les utilisateurs pourront déposer dans le champ concerné.

:::warning ATTENTION !

Pour autoriser les fichiers PDF uniquement, renseigner : application/pdf.

Pour autoriser les fichiers PDF et les images, renseigner : application/pdf,image/jpeg,image/png.

:::


:::info MIME TYPES UTILES !

Ci-dessous une liste non exhaustive :

- application/pdf (.pdf)
- image/jpeg (.jpeg, .jpg)
- image/png (.png)
- application/vnd.ms-excel (.xls)
- application/vnd.oasis.opendocument.spreadsheet (.ods)
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (.xlsx)

:::

- **Établissement** : N'en renseigner aucun rendra le document disponible pour tous les établissements.

- **Fonds** : N'en renseigner aucun rendra le document disponible pour tous les fonds.

:::danger RESTRICTIONS SOUHAITÉES ?
L'établissement ou le fonds est donc à préciser pour rendre la dépose d'un document obligatoire ou possible (selon qu'il a été ou non indiqué "requis dans son processus")
 pour un utilisateur appartenant à un établissement en particulier ou bien visant un fonds en particulier.

:::

- **Statut du document** : À choisir impérativement pour déterminer l'utilité du document et indiquer où il sera à déposer.

![Statut document](/images/statut-doc.png)

- "Charte pour Association" : C'est la CHARTE_SITE, qui permet aux associations reconnues comme SITE d'accéder à un fonds SITE, ici FSDIE.

*Le document à lire, approuver et signer est à retrouver par les utilisateurs dans la section "CHARTES" 
de leur bibliothèque de documents, avant de le déposer dans le formulaire de demande d'agrément.*

:::warning ATTENTION !

Afin de ne pas multiplier les documents à valider par les gestionnaires établissements, il est recommandé de ne donner le statut "Charte pour Association" 
qu'à un seul document.

💡 À vous de rassembler, au besoin, dans un même fichier, tous vos documents à faire signer puis à valider pour une période donnée !

Règlements intérieurs FSDIE, ainsi que RGPD FSDIE, peuvent ainsi être associés à la charte dont ils dépendent.

:::


:::danger CHARTE POUR DEMANDE DE SUBVENTION ?
🚫 Ce statut n'est pas à utiliser.
:::

- "Document pour Association" : C'est un document accompagnant la CHARTE_SITE lors d'une demande d'agrément.
- "Document pour Utilisateur" : C'est un document visant à justifier de son statut étudiant, dans le cadre d'une connexion avec un compte externe.
- "Document pour Demande de Subvention" : C'est un document demandé à chaque soumission de projet.
C'est le statut à donner à une charte à déposer pour chaque demande de subvention visant un fonds NON SITZ.


Le document à lire, approuver et signer est à retrouver par les utilisateurs dans la section "DOCUMENTS DE PROJETS" de la bibliothèque de documents, avant de le déposer dans le formulaire de demande de subvention.

- "Document pour Bilan de Subvention" : C'est un document demandé à chaque soumission de bilan.
- "Document non lié à un processus" : C'est un document d'information ou d'exemple mis à disposition des utilisateurs, sans lien direct avec un des processus ci-dessus.
*Le document est à retrouver par les utilisateurs dans la section "AUTRES DOCUMENTS" de la bibliothèque de documents.*

## Gestionnaire établissement

Vous pouvez, au besoin, mettre à jour les fichiers de votre établissement ou fonds, mais avec certaines restrictions.

Dans votre tableau de bord (accessible via "Mon compte > Mon espace"), cliquez ensuite sur "GÉRER LES DOCUMENTS".

Vous pouvez mettre à jour un document, uniquement si celui-ci est lié à votre établissement ou fonds. Le cas échéant, vous pourrez cliquer sur l'icône "Crayon" disponible et modifier :

- le nom du document ;
- le fichier d'exemple ou le document à signer.

![Gestion document](/images/gerer-doc.png)

:::warning  ATTENTION !
⛔ Les autres paramètres restent à la main du gestionnaire général, via le site d'administration.
:::

