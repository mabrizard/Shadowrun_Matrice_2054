/* =====================================================================
   CAMPAGNE 2054 (Confrérie Universelle, chapitre #42, Tacoma)
   Nœuds : SAN-01, ES-02/06, SPU-03/05/07/08, CPU-04/09.
   ===================================================================== */
const CONFIG = {
  era: 2054,
  storageKey: "mx54",
  pageTitle: "RTG Seattle // SAN-01",
  brandTitle: "SAN-01",
  brandSub: "RTG SEATTLE › LTG TACOMA · PORT DE CONNEXION FILAIRE",
  hostId: "SAN-01",
  startLines: ["RTG SEATTLE", "LTG TACOMA", "SAN-01 — port de connexion filaire"],
  startButton: "[ JACK IN ]",
  startSound: "modem",
  jackOut: "⏻ JACK OUT",
  tabAR: "▦ NŒUDS",
  tabCLI: "▮ CONSOLE",
  topology: true,
  topoRoot: "SAN-01",
  themeClass: "crt era2054",
  theme: {"--bg":"#050a05","--panel":"#081008","--line":"#1b4a1b","--green":"#33ff55","--cyan":"#ffb000","--amber":"#ffb000","--red":"#ff3b3b","--text":"#b8f5b8","--dim":"#4f8a4f"},
  looks: {facade:"◦ CONFRÉRIE UNIVERSELLE — CHAPITRE #42 · L'HARMONIE COMMENCE PAR L'ÉCOUTE ◦", deep:"▓ NŒUD OCCULTE — ACCÈS NON RÉFERTORIÉ ▓"},
  deepLevel: 2,
  alert: [{from:0,label:"BLEU",color:"#3a8bff"},{from:25,label:"VERT",color:"#33ff55"},{from:50,label:"ORANGE",color:"#ff9900"},{from:75,label:"ROUGE",color:"#ff2d2d"}],
  gaugeTrace: "NIVEAU D'ALERTE (GLACE)",
  gaugeLevels: "ACCÈS (NŒUDS)",
  searchPlaceholder: "⌕ Scanner : planning, Darryl, Elena, Reine…",
  searchChips: ["Darryl", "Elena", "Gabriel", "Reine", "Lone Star"],
  accessDenied: "ACCÈS REFUSÉ — GLACE ACTIVE",
  lockdownTitle: "⚠ GLACE NOIRE ⚠",
  lockdownIdle: "ÉJECTION FORCÉE — DUMPSHOCK",
  lockdownText: "ÉJECTION FORCÉE — DUMPSHOCK — RECONNEXION DANS {s}s",
  voice: { t50: "Alerte orange. Sonde GLACE active.", t75: "Alerte rouge. Contre-mesures déployées.", lock: "Éjection. Dumpshock." },
  stampText: "ACCÈS RESTREINT",
  stampFrom: 2,
  prompt: "decker@san-01",
  banner: ["RTG SEATTLE › LTG TACOMA › SAN-01", "Liaison filaire établie. Tapez 'help' pour les commandes.\n"],
  feedTab: "☰ FORUM",
  feedTitle: "RÉSEAU LOCAL // FORUM",
  feedSub: "Accès libre · Messages anonymes, non vérifiés, probablement surveillés.",
  feedSearchPlaceholder: "⌕ Rechercher dans le forum…"
};
const IMAGES = {"colombe": "colombe_confrerie.svg", "plan": "plan_chapitre.svg", "ruche": "ruche_hexagones.svg"};
const CODES = {1:"HARMONIE", 2:"TRIEUR", 3:"LA-REINE"};
const LEVEL_NAMES = {0:"BLEU · PUBLIC",1:"ORANGE · PERSONNEL",2:"ROUGE · GLACE NOIRE",3:"NOIR · CŒUR DU NID"};
const FILES = [
 {id:"san01", dir:"/SAN-01", name:"accueil_noeud.txt", level:0, look:"facade", title:"SAN-01 — Nœud d'entrée général", kw:["accueil", "confrérie", "harmonie", "san"], summary:"Message d'accueil du nœud public du chapitre.", text:`## Bienvenue
« Bienvenue à la Confrérie. L'harmonie commence par l'écoute. »
Chapitre #42 — Tacoma (Seattle). Accès libre, GLACE blanche passive.

## Orientation
- ES-02 : services communautaires (repas, cliniques, dons)
- SPU-03 : registre des volontaires
- Scan des nœuds adjacents : autorisé

## Nos engagements
- Un repas chaud, sans condition
- Des soins gratuits, sans SIN
- Une écoute, sans jugement`, img:"colombe"},
 {id:"planning", dir:"/ES-02", name:"planning_repas_tacoma_2054.doc", level:0, look:"facade", title:"Planning des repas & cliniques", kw:["soupe", "repas", "clinique", "don"], summary:"Soupes populaires, horaires des cliniques gratuites, formulaire de don.", text:`## Soupes populaires
- Tous les soirs, 20h00 — réfectoire du Chapitre
- Plus de 400 repas chauds servis chaque soir

## Cliniques gratuites
- Lundi, mercredi, vendredi — 9h à 17h
- Aucun SIN requis. Aucune question posée.

## Dons
Chaque nuyen compte. Chaque main aussi.`},
 {id:"dons", dir:"/ES-02", name:"formulaire_don.dat", level:0, look:"facade", title:"Faire un don à la Confrérie", kw:["don", "nuyen", "harmonie", "programme"], summary:"Formulaire de don en ligne — programme « Harmonie ».", text:`## Soutenez le programme Harmonie
Votre don finance les repas, les soins et l'accueil des personnes sans abri de Tacoma.

## Montants suggérés
- 20 ¥ : un repas chaud pour une famille
- 100 ¥ : une semaine de soins
- 500 ¥ : un lit pour la nuit, un mois entier

## Modalités
Virement certicred ou espèces à l'accueil. Reçu fiscal sur demande (SIN requis pour le reçu uniquement).

## Mentions
Les dons « fléchés Harmonie » sont gérés directement par la direction du chapitre. Aucun compte rendu public n'est publié.`},
 {id:"admission", dir:"/SPU-03", name:"formulaire_admission_sinless.dat", level:0, look:"facade", title:"Dossier d'admission — Vance, Darryl « D-Rail »", kw:["sinless", "admission", "vance", "darryl", "puyallup"], summary:"Registre des volontaires : fiche d'admission d'un SINless.", text:`## UB-SYSTEMS v4.12 — Dossier d'admission & évaluation sanitaire
Chapitre #42 — Tacoma (Seattle) · Date : 14 octobre 2054
Sujet : Vance, Darryl « D-Rail » · SINless · Humain, 24 ans · Origine : Puyallup Barrens
Éditeur du dossier : Sœur Sarah (Services d'accueil)

## 1. État social & anamnèse
Le sujet s'est présenté spontanément à la soupe populaire de 20h. Malnutrition sévère (régime prolongé au nutrisoja vicié). Aucune attache familiale connue, aucun contact dans la Matrice. Personne ne signalera une absence prolongée.

## 2. Évaluation biologique & astrale
- Volonté psychologique : faible / épuisé (soumis à l'autorité du chapitre)
- Compatibilité physique : excellente (vigueur musculaire préservée)
- Aura magique : inactive (non-Éveillé)
- Indice de réceptivité à l'Harmonie : 94,2 %

## Annotation restreinte — direction du chapitre
- Sujet idéal pour l'Incubation de Phase 2.
- Transfert approuvé vers le sous-sol (Dortoir C) sous prétexte de « cure de repos et supplémentation vitaminique ».
- NE PAS enregistrer dans le registre d'état civil public.`},
 {id:"benevoles", dir:"/SPU-03", name:"registre_volontaires_extrait.dat", level:0, look:"facade", title:"Registre des volontaires (extrait)", kw:["volontaires", "sarah", "gabriel", "elena", "benevoles"], summary:"Liste des bénévoles inscrits aux programmes d'entraide.", text:`## UB-SYSTEMS v4.12 — Registre des volontaires, Chapitre #42
Extrait public. Données personnelles masquées.

## Direction
- Frère Gabriel — directeur du chapitre
- Sœur Sarah — services d'accueil

## Bénévoles actifs
- Elena_M — bénévole santé (statut : ACTIF jusqu'au 28 oct.)
- 14 bénévoles cuisine & distribution
- 6 bénévoles clinique

## Résidents hébergés (dortoirs)
- Dortoirs A-B : 52 lits
- Dortoir C : accès réservé (« cure de repos »)`},
 {id:"syslog", dir:"/CPU-04", name:"journal_systeme_chapitre.log", level:1, title:"Journal système du chapitre", kw:["journal", "systeme", "glace", "brouilleuse", "lone star"], summary:"Processeur central : logistique interne et liaisons avec le siège.", text:`## CPU-04 — Processeur central du chapitre #42
Sécurité : GLACE brouilleuse (échec d'authentification = reboot forcé du deck)

## Extrait du journal
- 02:14 — Transfert « Dortoir C » : 3 sujets (réf. D-Rail, Mouse, Padre)
- 02:31 — Ventilation sous-sol : cycle sédatif OK
- 03:05 — Liaison siège (Boston) : rapport hebdomadaire envoyé
- 03:20 — Badge Lone Star #4471 : entrée porte de service
- 04:02 — Caméras sous-sol : flux interrompu 11 min (maintenance)

## Notes d'administration
Les gardes Lone Star du poste 4471 et 4480 sont « partenaires » du chapitre. Ne pas consigner leurs passages dans le registre public.`},
 {id:"siege", dir:"/CPU-04", name:"messagerie_siege.msg", level:1, title:"Messagerie — liaison siège (Boston)", kw:["siege", "boston", "gabriel", "messagerie", "reine"], summary:"Échanges chiffrés entre Frère Gabriel et le siège.", text:`## De : Siège (Boston) — À : F. Gabriel — Objet : Quotas
Le programme Harmonie progresse. Merci de maintenir un flux de dix nouveaux hôtes par semaine. Les profils robustes sont prioritaires.

## De : F. Gabriel — À : Siège — Objet : Incident bénévole
La bénévole Elena_M a posé des questions sur un résident. Elle a quitté le chapitre le 28. Je recommande un suivi discret.

## De : Siège — À : F. Gabriel
Suivi approuvé. Ne laissez aucune trace dans le registre.`},
 {id:"profils", dir:"/SPU-05", name:"profils_compatibilite_vitales.log", level:1, title:"Profils de compatibilité vitale", kw:["profils", "compatibilite", "reception", "venin", "residents", "sante"], summary:"Fiches de santé des « résidents », avec taux de réceptivité.", text:`## SPU-05 — Fiches de santé des résidents
Indices de « réceptivité à l'Harmonie » et de « résistance au venin ».

## Extrait
- D-Rail (24 ans, humain) — réceptivité 94,2 % — transféré
- Mouse (19 ans, elfe) — réceptivité 88,0 % — en observation
- Padre (41 ans, nain) — réceptivité 61,5 % — écarté (faible)
- Brisa (30 ans, orke) — réceptivité 97,1 % — Dortoir C, semaine 44

## Annotation de la direction
Les orks et les trolls offrent la meilleure constitution. Les magiciens éveillés sont à écarter : ils perçoivent la barrière astrale.

## Sous-menu masqué
Option « T » : accès au nœud SPU-07 — code « TRIEUR »`},
 {id:"journal", dir:"/SPU-05", name:"journal_interne_benevole.txt", level:1, title:"Journal d'Elena_M — bénévole santé", kw:["elena", "journal", "gabriel", "darryl", "ruche"], summary:"Fichier personnel d'une bénévole qui commence à comprendre.", text:`## FICHIER PERSONNEL — NE PAS COPIER
Propriétaire : Elena_M@UB-Net-Tacoma (bénévole santé) · Dernière modification : 28 octobre 2054

## 3 octobre
Une autre bonne journée au chapitre. Plus de 400 repas chauds ce soir. Le Frère Gabriel est incroyable, son calme inspire tout le monde. Les gens arrivent cassés par la rue, et en quelques jours ici, ils retrouvent le sourire.

## 19 octobre
Je ne trouve plus Darryl, le jeune homme de Puyallup que j'aidais à soigner. Le Frère Gabriel dit qu'il a été transféré dans notre clinique centrale de Boston... Mais ses affaires sont encore dans son casier. Même son blouson de cuir auquel il tenait tant.

## 26 octobre
Il se passe des choses anormales la nuit. Je suis restée tard pour classer des dossiers médicaux. Des bruits venant du monte-charge du sous-sol : un grattement métallique rythmé, comme des pattes ou des mandibules contre le béton. Et cette odeur d'insecticide et de phéromones sucrées qui prend à la gorge.

## 28 octobre
J'ai croisé le Frère Gabriel ce matin. Je lui ai parlé de Darryl. Il n'a PAS CLIGNÉ DES YEUX UNE SEULE FOIS en trois minutes. Ses pupilles étaient d'un noir fixe, presque vitreux. Voix monotone : « Ne te tracasse pas, Elena. Nous trouverons bientôt une place pour toi dans la Ruche. »

Je range mes affaires ce soir. Je ne reviens plus jamais ici.`},
 {id:"acces", dir:"/ES-06", name:"controle_acces_batiment.cfg", level:1, title:"Contrôle d'accès physique du bâtiment", kw:["acces", "serrures", "cameras", "buanderie", "eclairage"], summary:"Serrures magnétiques, caméras, éclairage du rez-de-chaussée.", img:"plan", text:`## ES-06 — Contrôle d'accès physique
Commandes des serrures magnétiques et flux des caméras.

## Actions disponibles
- Déverrouiller la porte de la buanderie
- Couper l'éclairage du rez-de-chaussée
- Boucler les dortoirs A-B (verrouillage 22h)
- Caméras sous-sol : flux désactivé en maintenance (02:00-04:00)

## Note de maintenance
Le monte-charge du sous-sol est verrouillé en permanence. Code technicien du sous-sol : TRIEUR`},
 {id:"trieur", dir:"/SPU-07", name:"candidats_chrysalide_semaine_44.db", level:2, look:"deep", title:"Le Trieur — candidats chrysalide, semaine 44", kw:["trieur", "chrysalide", "candidats", "sous-sol", "dortoir"], summary:"SINless sélectionnés pour descendre au sous-sol.", text:`## NŒUD MASQUÉ — accessible depuis le sous-menu caché de SPU-05
SINless sélectionnés pour descendre dans les sous-sols et ne plus jamais en ressortir.

## Liste (semaine 44)
- D-Rail — transféré le 14 oct. (Dortoir C) — chrysalide active
- Mouse — transfert prévu le 6 nov.
- Brisa (orke) — transfert prévu le 7 nov. — « sujet idéal »
- 12 autres résidents — liste complète dans le registre du Trieur

## Rappel
Les candidats du Dortoir C sont à transférer avant la nuit du 12 novembre.

## Clé d'accès au cœur du nid
Autorisation maître pour CPU-09 : LA-REINE`},
 {id:"nids", dir:"/SPU-08", name:"statut_nids_reine_v3.bin", level:2, look:"deep", title:"Statut des nids — phase pré-éclosion", kw:["reine", "nids", "ruche", "éclosion", "incubation"], summary:"Transmission décryptée à la hiérarchie de la Ruche.", text:`## !!! TRANSMISSION DÉCRYPTÉE — EYES ONLY !!!
Destinataire : Siège central / hiérarchie de la Ruche · Émetteur : Chapitre #42 (Tacoma Colony)

## 1. Cheptel d'hôtes
- Hôtes captifs en chrysalide active : 38 sujets
- Formes de Chair viables (infiltrés actifs) : 12 unités (dont 2 gardes Lone Star)
- Pertes durant le rituel : 4 sujets (incinérés)

## 2. Déploiement spirituel
- Formes Ouvrières (nidification & entretien) : 18 matérialisées
- Formes Nourrices (gelée nutritive) : 4 matérialisées
- Formes Soldats (garde du sous-sol) : 6 en attente d'invocation

## 3. Sécurité du site
- Conduits de ventilation de Tacoma scellés au sédatif liquide
- Barrière astrale du sous-sol stabilisée à Puissance 6
- GLACE Noire prête sur le port de connexion SAN-01

## 4. Prochaine étape
Grand rituel d'ensemencement la nuit du 12 novembre. La Reine nécessite 15 hôtes supplémentaires à forte constitution (Orks/Trolls privilégiés). Demande d'intensification des maraudes dans les Barrens.

L'HARMONIE SERA RESTAURÉE. LA REINE SERA NOURRIE.`, img:"ruche"},
 {id:"ventil", dir:"/CPU-09", name:"ventilation_soussol.sys", level:3, look:"deep", title:"Nœud Reine — ventilation & confinement", kw:["ventilation", "sedatif", "confinement", "reine", "alarme"], summary:"Nœud maître : ventilation et confinement des sous-sols. GLACE NOIRE.", text:`## CPU-09 — Core nœud Reine / système subterrané
Sécurité : GLACE NOIRE. Un échec de connexion inflige des dégâts physiques au decker.

## Commandes de contrôle
- Purger les sédatifs gazeux : INVERSER la ventilation (les résidents du Dortoir C se réveillent)
- Déclencher l'alarme maximale : confinement total, verrouillage de toutes les portes
- Désactiver la barrière astrale (Puissance 6) : 3 tours de combat

## Avertissement
Inverser la ventilation sans masque expose tout le personnel à la phéromone de la Ruche.`},
 {id:"rituel", dir:"/CPU-09", name:"protocole_ensemencement.txt", level:3, look:"deep", title:"Protocole du grand rituel d'ensemencement", kw:["rituel", "ensemencement", "reine", "12 novembre", "orks", "trolls"], summary:"Déroulement de la nuit du 12 novembre.", text:`## Rituel d'ensemencement — nuit du 12 novembre
- 22h00 : verrouillage des dortoirs A-B, coupure des caméras
- 23h00 : descente des 15 hôtes (orks et trolls privilégiés)
- 00h00 : la Reine est nourrie
- 03h00 : éclosion des formes Ouvrières supplémentaires

## Conséquence
Au matin, le chapitre rouvre ses portes comme si de rien n'était.

L'HARMONIE SERA RESTAURÉE.`}
];
const HANDLES = {"Pigeon":["PG","#33ff55"],"Rail":["RL","#ffb000"],"Sœur_Sarah":["SS","#3a8bff"],"Mouse":["MO","#ff7a1a"],"Elena_M":["EM","#3a8bff"],"Anonyme":["??","#4f8a4f"]};
const THREADS = [
 {tag:"RUE & RUMEURS", title:"La soupe de Tacoma, quelqu'un connaît ?", who:"Rail", ts:"12 Oct 2054 - 21:40:02",
  text:"Y a une asso qui sert des repas chauds à Tacoma, sans demander de SIN. Ça vaut le coup ?",
  re:[["Pigeon","J'y ai mangé deux fois. Gentils. Presque trop gentils."],["Sœur_Sarah","Venez comme vous êtes. La porte est ouverte à tous."]]},
 {tag:"RUE & RUMEURS", title:"Plus de nouvelles de D-Rail", who:"Pigeon", ts:"24 Oct 2054 - 03:15:44",
  text:"Quelqu'un a vu Darryl, le gamin de Puyallup ? Plus personne ne le croise depuis deux semaines.",
  re:[["Rail","Il est parti se faire soigner à Boston, paraît-il."],["Mouse","Je dors au Dortoir C depuis hier. Je vous dirai si je le vois."]]},
 {tag:"RUE & RUMEURS", title:"Odeur bizarre près de la Confrérie", who:"Anonyme", ts:"27 Oct 2054 - 23:50:12",
  text:"Ça sent le sucre et l'insecticide près du chapitre la nuit. Et des bruits dans les murs. Je ne mange plus là-bas.",
  re:[["Pigeon","T'es sûr ? Ils m'ont donné une couverture neuve."],["Elena_M","Ne retournez pas là-bas. Je vous en prie."]]},
 {tag:"MATRICE & TECH", title:"Port SAN-01 : GLACE blanche seulement ?", who:"Rail", ts:"29 Oct 2054 - 01:08:30",
  text:"Un decker a testé le port du chapitre : GLACE blanche passive en façade. Mais des sondes vers l'intérieur.",
  re:[["Pigeon","Fais gaffe : une GLACE brouilleuse derrière le nœud admin. Tu te fais éjecter."]]}
];
const CATS=[["RUE & RUMEURS",["RUE & RUMEURS"]],["MATRICE & TECH",["MATRICE & TECH"]]];
const DIRS=["/SAN-01","/ES-02","/SPU-03","/CPU-04","/SPU-05","/ES-06","/SPU-07","/SPU-08","/CPU-09"];
