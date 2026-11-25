/* ==========================================================================
   SES — Spécialité Terminale, bac 2027
   Les 9 questions évaluables à l'écrit (note de service de septembre 2026).
   ========================================================================== */
{
const { R, pick, T, fr, box } = OUT;

MATIERES.push({
  cle: "ses", nom: "SES", court: "SES",
  sous: "Spécialité · écrit 4 h · coef. 16",
  intro: "Les 9 chapitres qui peuvent tomber à l'écrit, la méthode de la dissertation et de l'épreuve composée, et des calculs à refaire à l'infini.",
  epreuve: `<p><b>Durée :</b> 4 heures, le 16 ou le 17 juin 2027 selon la convocation. <b>Coefficient 16.</b> Tu choisis entre deux sujets :</p>
    <ul><li><b>Dissertation</b> à partir d'un dossier de 3 ou 4 documents, surtout statistiques. Le dossier sert d'appui à ton raisonnement : on ne le résume pas document par document.</li>
    <li><b>Épreuve composée</b> en trois parties :
      <ul><li>Partie 1 : mobilisation des connaissances, sans document (<b>3,5 points</b>).</li>
      <li>Partie 2 : étude d'un document statistique, avec deux questions (<b>5,5 points</b>).</li>
      <li>Partie 3 : raisonnement à partir d'un dossier de 2 ou 3 documents, avec introduction, développement et conclusion (<b>9 points</b>).</li></ul></li></ul>
    <p>À partir de 2027, <b>2 points sur 20</b> récompensent l'orthographe et la syntaxe, dans les deux sujets. Seules 9 questions du programme peuvent tomber : ce sont les 9 chapitres de ce site.</p>`,
  methode: [],
  sujets: [],
  generes: [],
  chapitres: [
/* ------------------------------------------------------------ 1 */
{ court: "Croissance", titre: "Quels sont les sources et les défis de la croissance économique ?",
  fiche: `
<h3>La croissance et sa mesure</h3>
<p>La <b>croissance économique</b> est l'augmentation durable de la production de biens et de services d'un pays. On la mesure par le <b>taux de variation du PIB en volume</b> (corrigé de l'inflation). Le PIB est la somme des valeurs ajoutées des unités productrices résidentes.</p>
${box("À retenir", "Une croissance de 2 % du PIB en volume signifie que la production réelle a augmenté de 2 % par rapport à l'année précédente, indépendamment de la hausse des prix.")}
<h3>Les sources de la croissance</h3>
<ul>
<li><b>L'accumulation des facteurs de production</b> : plus de travail (population active, durée du travail) et plus de capital (investissement en capital physique).</li>
<li><b>La productivité globale des facteurs (PGF)</b> : la part de la croissance qui ne s'explique pas par la hausse des quantités de travail et de capital. Elle traduit surtout le <b>progrès technique</b>, c'est-à-dire l'efficacité de la combinaison productive.</li>
<li><b>L'innovation</b> : selon Schumpeter, les innovations (produits, procédés, organisation, marchés) arrivent par grappes et entraînent un processus de <b>destruction créatrice</b> : de nouvelles activités remplacent les anciennes.</li>
<li><b>La croissance endogène</b> (Paul Romer, années 1980) : le progrès technique n'est pas un « don du ciel », il est produit par l'économie elle-même, grâce aux investissements en <b>capital humain</b>, en <b>recherche-développement</b> et en <b>infrastructures publiques</b>. Ces investissements ont des <b>externalités positives</b> : la connaissance se diffuse.</li>
<li><b>Les institutions</b> (Douglass North) : des règles qui protègent les <b>droits de propriété</b>, notamment intellectuelle (brevets), garantissent l'État de droit et incitent à investir et innover.</li>
</ul>
<h3>Les défis de la croissance</h3>
<p><b>Les limites écologiques.</b> La croissance épuise des ressources (énergies fossiles, biodiversité) et dégrade l'environnement (réchauffement climatique, pollutions). Elle peut donc compromettre le bien-être des générations futures.</p>
<p><b>Le développement durable</b> : un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs. On distingue quatre formes de capital : <b>naturel, physique produit, humain et institutionnel</b>.</p>
<div class="two">${box("Soutenabilité faible", "Les capitaux sont <b>substituables</b> : on peut compenser la destruction du capital naturel par plus de capital physique ou humain. L'innovation peut repousser les limites écologiques.")}${box("Soutenabilité forte", "Le capital naturel est <b>non substituable</b> : certaines ressources critiques doivent être préservées quoi qu'il arrive. Il faut parfois limiter la croissance.", "warn")}</div>
<p><b>Le rôle de l'innovation</b> : elle peut aider à reculer les limites (énergies renouvelables, efficacité énergétique), mais un <b>effet rebond</b> est possible : les gains d'efficacité baissent les coûts et augmentent la consommation totale.</p>`,
  quiz: [
    ["La croissance économique se mesure par la variation…", ["du PIB en volume", "du PIB en valeur", "de l'indice des prix", "du revenu par habitant en valeur"], "On retire l'effet de l'inflation pour mesurer la hausse réelle de la production."],
    ["La productivité globale des facteurs correspond à…", ["la part de la croissance non expliquée par la hausse des quantités de travail et de capital", "la production par travailleur", "la hausse du nombre d'heures travaillées", "le rapport entre capital et travail"], "C'est le « résidu », attribué surtout au progrès technique."],
    ["Qui a développé l'idée de « destruction créatrice » ?", ["Joseph Schumpeter", "Adam Smith", "John Maynard Keynes", "Paul Romer"], "Pour Schumpeter, l'innovation détruit des activités anciennes et en crée de nouvelles."],
    ["Selon la théorie de la croissance endogène, le progrès technique…", ["résulte d'investissements (R&D, capital humain, infrastructures)", "tombe du ciel de façon exogène", "freine la croissance", "dépend uniquement du climat"], "Romer montre que la croissance entretient elle-même le progrès technique."],
    ["La soutenabilité forte considère que…", ["le capital naturel n'est pas substituable", "tous les capitaux sont substituables", "l'innovation résoudra tous les problèmes", "la croissance est toujours soutenable"], "Certaines ressources naturelles critiques doivent être préservées."],
    ["Les droits de propriété intellectuelle (brevets) favorisent la croissance car…", ["ils incitent à innover en protégeant les gains de l'innovateur", "ils bloquent la diffusion des idées", "ils baissent les prix", "ils augmentent la population active"], "C'est l'apport de l'analyse institutionnelle (North)."],
  ],
  exos: [
    { id: "ses1a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que le progrès technique est une source de croissance économique.",
      c: "<p><b>Idée 1 — Il augmente la productivité.</b> Le progrès technique permet de produire plus avec la même quantité de facteurs : c'est la productivité globale des facteurs. Par exemple, l'automatisation d'une chaîne de production augmente la production par heure de travail.</p><p><b>Idée 2 — Il fait apparaître de nouveaux produits et de nouveaux marchés.</b> Selon Schumpeter, les innovations de produit créent une nouvelle demande et de nouvelles activités (smartphones, services numériques) : c'est la destruction créatrice.</p><p><b>Idée 3 — Il s'auto-entretient.</b> Selon la théorie de la croissance endogène, les investissements en R&D et en capital humain produisent des connaissances qui se diffusent (externalités positives) et nourrissent de nouvelles innovations.</p>" },
    { id: "ses1b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les institutions favorisent la croissance économique.",
      c: "<p>Les institutions sont les règles formelles (lois, droit de propriété) et informelles qui encadrent les comportements économiques.</p><ul><li><b>Les droits de propriété</b> garantissent aux agents qu'ils profiteront des fruits de leur investissement : cela les incite à investir et à épargner.</li><li><b>Les brevets</b> protègent l'innovateur d'une imitation immédiate et l'incitent à financer la R&D.</li><li><b>L'État de droit</b> (justice indépendante, faible corruption) réduit l'incertitude et sécurise les contrats.</li></ul>" },
    { id: "ses1c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que l'innovation peut aider à reculer les limites écologiques de la croissance, mais qu'elle peut aussi rencontrer des limites.",
      c: "<p><b>L'innovation aide :</b> énergies renouvelables qui remplacent les énergies fossiles, procédés plus économes en ressources, recyclage, captage du carbone. Elle permet de produire autant en polluant moins.</p><p><b>Mais elle a des limites :</b> l'<b>effet rebond</b> (des voitures plus économes incitent à rouler plus, donc la consommation totale peut augmenter), les délais de diffusion des technologies, et la soutenabilité forte rappelle que certaines ressources détruites ne sont pas remplaçables (biodiversité).</p>" },
    { id: "ses1d", niv: 2, titre: "Distinguer deux notions", q: "Distinguez soutenabilité faible et soutenabilité forte, en donnant un exemple pour chacune.",
      c: "<p><b>Soutenabilité faible :</b> le capital naturel peut être remplacé par d'autres capitaux. Exemple : remplacer une forêt détruite par des usines plus efficaces ou des technologies de dépollution suffit si le stock total de capital se maintient.</p><p><b>Soutenabilité forte :</b> le capital naturel doit être maintenu, car il n'est pas substituable. Exemple : une espèce disparue ou un climat déréglé ne peuvent pas être compensés par du capital physique. On fixe donc des seuils à ne pas dépasser (quotas d'émissions).</p>" },
  ] },
/* ------------------------------------------------------------ 2 */
{ court: "Commerce international", titre: "Quels sont les fondements du commerce international et de l'internationalisation de la production ?",
  fiche: `
<h3>Pourquoi les pays échangent-ils ?</h3>
<ul>
<li><b>Les avantages comparatifs (Ricardo)</b> : chaque pays a intérêt à se spécialiser dans la production où il est <b>relativement</b> le plus efficace (là où son coût d'opportunité est le plus faible), même s'il n'a aucun avantage absolu. L'échange est alors gagnant pour tous les pays.</li>
<li><b>Les dotations factorielles (modèle HOS)</b> : un pays se spécialise dans les productions qui utilisent intensément le facteur dont il est <b>abondamment doté</b> (travail peu qualifié, capital, terre, travail qualifié).</li>
<li><b>La différenciation des produits</b> : les consommateurs aiment la <b>variété</b>. Les pays échangent des produits proches mais différenciés (voitures allemandes contre voitures françaises) : c'est le <b>commerce intra-branche</b>, important entre pays riches comparables.</li>
<li><b>Les économies d'échelle</b> : produire pour un marché mondial fait baisser le coût unitaire, ce qui favorise la spécialisation et les échanges.</li>
</ul>
<h3>La compétitivité</h3>
<div class="two">${box("Compétitivité prix", "Capacité à vendre moins cher que les concurrents : coût du travail, productivité, taux de change.")}${box("Compétitivité hors prix", "Capacité à vendre grâce à d'autres éléments que le prix : qualité, innovation, image de marque, service après-vente.")}</div>
<h3>L'internationalisation de la production</h3>
<p>Les <b>firmes multinationales (FMN)</b> organisent leur production à l'échelle mondiale. Elles fragmentent la chaîne de production en étapes localisées dans différents pays : ce sont les <b>chaînes de valeur mondiales</b>. Leurs motivations :</p>
<ul><li>accéder à des marchés (produire près des consommateurs, contourner les barrières douanières) ;</li><li>réduire les coûts (main-d'œuvre, fiscalité, accès aux ressources) ;</li><li>profiter de compétences ou de technologies locales.</li></ul>
<p>Une partie importante du commerce mondial correspond à des <b>échanges intra-firmes</b> entre filiales d'une même FMN.</p>
<h3>Les effets du commerce international</h3>
<p><b>Gains :</b> baisse des prix et hausse du pouvoir d'achat, plus grande variété de produits, diffusion des technologies, économies d'échelle.</p>
<p><b>Mais aussi des effets inégaux :</b> le commerce peut accroître les <b>inégalités de revenus au sein des pays</b> (les travailleurs peu qualifiés des pays riches sont mis en concurrence) et causer des <b>délocalisations</b> et des pertes d'emploi dans certains territoires. Il peut aussi avoir un coût environnemental (transport).</p>
${box("Libre-échange ou protectionnisme ?", "Le <b>libre-échange</b> supprime les obstacles aux échanges. Le <b>protectionnisme</b> utilise des droits de douane, des quotas ou des normes pour protéger la production nationale (par exemple les industries naissantes, selon Friedrich List). Le protectionnisme peut entraîner des représailles et faire monter les prix.", "tip")}`,
  quiz: [
    ["Selon Ricardo, un pays doit se spécialiser dans la production…", ["où il a un avantage comparatif", "où il a un avantage absolu uniquement", "qui utilise le plus de capital", "la plus rentable dans le monde"], "Même sans avantage absolu, un pays gagne à se spécialiser là où il est relativement le plus efficace."],
    ["Le modèle HOS explique la spécialisation par…", ["les dotations factorielles", "la différenciation des produits", "le goût pour la variété", "les taux de change"], "Un pays se spécialise dans les productions qui utilisent intensément le facteur qu'il possède en abondance."],
    ["L'échange de voitures entre la France et l'Allemagne est un exemple de…", ["commerce intra-branche", "commerce inter-branche", "délocalisation", "protectionnisme"], "Les deux pays échangent des produits similaires mais différenciés."],
    ["La qualité et l'image de marque relèvent de la…", ["compétitivité hors prix", "compétitivité prix", "politique monétaire", "productivité globale des facteurs"], "Elles permettent de vendre même à un prix plus élevé."],
    ["Une chaîne de valeur mondiale, c'est…", ["la fragmentation de la production en étapes situées dans plusieurs pays", "un réseau de magasins mondiaux", "la liste des pays les plus riches", "une taxe sur les importations"], "Exemple : un smartphone conçu aux États-Unis, assemblé en Asie avec des composants venant de plusieurs pays."],
    ["Un effet possible du commerce international sur les pays riches est…", ["une hausse des inégalités entre travailleurs qualifiés et peu qualifiés", "une hausse générale des prix", "la disparition des FMN", "la fin du commerce intra-branche"], "Les travailleurs peu qualifiés subissent la concurrence des pays où le travail peu qualifié est abondant."],
  ],
  exos: [
    { id: "ses2a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que la différenciation des produits explique une partie du commerce international.",
      c: "<p>Les consommateurs recherchent la <b>variété</b> : ils ne veulent pas tous le même modèle de voiture ou de vêtement. Les entreprises <b>différencient</b> leurs produits (marque, design, qualité, options). Les pays de niveau de développement proche échangent donc des produits similaires mais différenciés : c'est le <b>commerce intra-branche</b>. Par exemple, la France exporte des Renault vers l'Allemagne et importe des Volkswagen. Ce commerce est très important entre pays de l'Union européenne.</p>" },
    { id: "ses2b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les firmes multinationales cherchent à réduire leurs coûts en fragmentant leur chaîne de valeur.",
      c: "<p>Une FMN découpe sa production en étapes (conception, fabrication des composants, assemblage, distribution) et les place là où elles coûtent le moins cher ou rapportent le plus :</p><ul><li>l'assemblage, intensif en travail peu qualifié, dans des pays à bas salaires ;</li><li>la conception et la R&D dans des pays riches en travail qualifié ;</li><li>des filiales dans des pays à fiscalité avantageuse.</li></ul><p>Elle profite aussi d'<b>économies d'échelle</b> en concentrant chaque étape sur un seul site qui produit pour le monde entier.</p>" },
    { id: "ses2c", niv: 3, titre: "Raisonnement — avantages comparatifs", q: "Le pays A produit 1 tonne de blé en 2 heures et 1 tissu en 4 heures. Le pays B produit 1 tonne de blé en 6 heures et 1 tissu en 8 heures. Quel pays a un avantage absolu ? Dans quelle production chaque pays doit-il se spécialiser selon Ricardo ?",
      c: "<p><b>Avantage absolu :</b> A produit les deux biens plus vite que B, il a un avantage absolu dans les deux productions.</p><p><b>Coûts relatifs :</b> dans A, 1 tissu coûte 4/2 = 2 tonnes de blé. Dans B, 1 tissu coûte 8/6 ≈ 1,33 tonne de blé. Le tissu est donc relativement moins cher à produire dans B.</p><p><b>Spécialisation :</b> A se spécialise dans le <b>blé</b> (son avantage est le plus fort : 3 fois plus rapide, contre 2 fois pour le tissu) et B dans le <b>tissu</b>. Les deux pays gagnent à échanger.</p>" },
  ] },
/* ------------------------------------------------------------ 3 */
{ court: "Chômage", titre: "Comment lutter contre le chômage ?",
  fiche: `
<h3>Mesurer le chômage</h3>
<p>Selon le <b>Bureau international du travail (BIT)</b>, un chômeur est une personne en âge de travailler (15 ans ou plus) qui : est <b>sans emploi</b> (n'a pas travaillé, même une heure, pendant la semaine de référence), est <b>disponible</b> pour travailler dans les 15 jours et a <b>recherché activement</b> un emploi dans le mois précédent (ou en a trouvé un qui commence plus tard).</p>
<p><b>Taux de chômage</b> = chômeurs / population active × 100. La population active regroupe les actifs occupés et les chômeurs.</p>
<p>Le <b>halo du chômage</b> regroupe des personnes sans emploi qui souhaitent travailler mais ne remplissent pas tous les critères du BIT (par exemple, ne sont pas disponibles tout de suite). Le <b>sous-emploi</b> concerne surtout les personnes à temps partiel qui voudraient travailler plus.</p>
<h3>Le chômage structurel</h3>
<p>Il est lié au fonctionnement durable du marché du travail, indépendamment de la conjoncture.</p>
<ul>
<li><b>Les problèmes d'appariement</b> : les offres d'emploi ne correspondent pas aux demandeurs (qualifications, lieu). On peut avoir à la fois des postes vacants et du chômage.</li>
<li><b>Les asymétries d'information</b> : l'employeur ne connaît pas parfaitement la productivité du candidat. Selon la théorie du <b>salaire d'efficience</b>, l'entreprise paie un salaire supérieur au salaire d'équilibre pour motiver et retenir les salariés, ce qui crée du chômage.</li>
<li><b>Les effets des institutions</b> : salaire minimum, protection de l'emploi, allocations chômage. Selon certaines analyses, un salaire minimum trop élevé peut exclure les moins productifs de l'emploi, mais il soutient aussi le pouvoir d'achat et la demande.</li>
</ul>
<h3>Le chômage conjoncturel</h3>
<p>Il est lié au ralentissement de l'activité économique : quand la <b>demande globale</b> (consommation, investissement, exportations) baisse, les entreprises produisent moins et embauchent moins. C'est l'analyse de Keynes : le chômage peut venir d'une <b>insuffisance de la demande effective</b>.</p>
<h3>Les politiques de l'emploi</h3>
<div class="two">${box("Contre le chômage conjoncturel", "<b>Soutien de la demande globale</b> : politique budgétaire de relance (hausse des dépenses publiques, baisse des impôts), politique monétaire de baisse des taux d'intérêt.")}${box("Contre le chômage structurel", "<b>Baisse du coût du travail</b> (allègements de cotisations sur les bas salaires), <b>formation</b> des chômeurs pour améliorer l'appariement, <b>flexibilisation</b> du marché du travail (contrats, temps de travail).", "tip")}</div>
<p>La <b>flexicurité</b> (modèle danois) combine une grande flexibilité pour les employeurs (licenciements facilités) avec une forte sécurité pour les salariés (indemnisation généreuse et accompagnement vers l'emploi).</p>`,
  quiz: [
    ["Pour le BIT, un chômeur doit notamment…", ["rechercher activement un emploi", "être inscrit à France Travail", "avoir déjà travaillé", "toucher une allocation"], "Les trois critères : sans emploi, disponible, recherche active."],
    ["Le taux de chômage se calcule en divisant le nombre de chômeurs par…", ["la population active", "la population totale", "la population en âge de travailler", "le nombre d'emplois"], "La population active = actifs occupés + chômeurs."],
    ["La théorie du salaire d'efficience explique le chômage par…", ["un salaire fixé au-dessus de l'équilibre pour motiver les salariés", "un salaire minimum trop bas", "une demande trop forte", "le progrès technique uniquement"], "L'entreprise paie plus pour réduire l'absentéisme et retenir les meilleurs."],
    ["Un chômage dû à une insuffisance de la demande globale est un chômage…", ["conjoncturel", "structurel", "frictionnel", "technologique"], "C'est l'analyse keynésienne."],
    ["Pour lutter contre le chômage d'appariement, on peut…", ["développer la formation des chômeurs", "augmenter les taux d'intérêt", "baisser les dépenses publiques", "réduire la population active"], "La formation rapproche les qualifications des besoins des entreprises."],
    ["La flexicurité associe…", ["flexibilité de l'emploi et sécurité des parcours des salariés", "fermeture des frontières et sécurité", "baisse des salaires et hausse des impôts", "CDD obligatoires et retraite anticipée"], "C'est le modèle danois."],
  ],
  exos: [
    { id: "ses3a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les asymétries d'information sur le marché du travail peuvent être source de chômage.",
      c: "<p>Lors d'un recrutement, l'employeur ne connaît pas exactement la productivité et la motivation du candidat : il y a <b>asymétrie d'information</b>.</p><ul><li>Pour limiter ce risque, l'entreprise peut proposer un <b>salaire d'efficience</b>, supérieur au salaire d'équilibre, pour attirer les meilleurs et les inciter à l'effort. À ce salaire, l'offre de travail dépasse la demande : il y a du chômage.</li><li>Elle peut aussi sélectionner sur des signaux (diplôme, expérience), ce qui écarte des personnes pourtant capables, comme les jeunes sans expérience.</li></ul>" },
    { id: "ses3b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les politiques de soutien de la demande globale peuvent réduire le chômage.",
      c: "<p>Si le chômage est conjoncturel, il vient d'une demande trop faible. L'État peut la relancer :</p><ul><li><b>Politique budgétaire</b> : hausse des dépenses publiques (investissements, aides) ou baisse des impôts, qui augmentent le revenu disponible et la consommation. Grâce à l'<b>effet multiplicateur</b>, la production augmente plus que la dépense initiale.</li><li><b>Politique monétaire</b> : la banque centrale baisse ses taux d'intérêt, ce qui rend le crédit moins cher et stimule la consommation et l'investissement.</li></ul><p>Les entreprises, face à une demande plus forte, produisent plus et embauchent.</p>" },
    { id: "ses3c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les institutions du marché du travail peuvent avoir des effets ambivalents sur le chômage.",
      c: "<p><b>Effets défavorables possibles :</b> un salaire minimum élevé peut rendre l'embauche des moins qualifiés peu rentable ; une forte protection de l'emploi peut freiner les embauches, car licencier coûte cher.</p><p><b>Effets favorables :</b> le salaire minimum soutient le pouvoir d'achat donc la demande ; les allocations chômage permettent de chercher un emploi adapté (meilleur appariement) ; la protection de l'emploi stabilise les salariés et favorise leur formation dans l'entreprise.</p>" },
  ] },
/* ------------------------------------------------------------ 4 */
{ court: "Politiques européennes", titre: "Comment expliquer les politiques économiques dans le cadre européen ?",
  fiche: `
<h3>L'intégration européenne</h3>
<p>L'Union européenne a construit progressivement un <b>marché unique</b> (1993) : libre circulation des biens, des services, des capitaux et des personnes. Puis 21 pays (dont la Bulgarie depuis 2026) ont adopté une monnaie unique, l'<b>euro</b> : ils forment l'<b>Union économique et monétaire</b> (zone euro).</p>
<p>Effets attendus : plus de concurrence et donc des prix plus bas, des économies d'échelle, la fin des coûts de change et de l'incertitude sur les taux de change entre pays membres.</p>
<h3>La politique de la concurrence</h3>
<p>La Commission européenne veille à une concurrence non faussée : elle contrôle les <b>ententes</b> entre entreprises, sanctionne les <b>abus de position dominante</b>, contrôle les <b>fusions</b> et encadre les <b>aides d'État</b>. Objectif : protéger les consommateurs (prix, choix, innovation).</p>
<h3>La politique monétaire</h3>
<p>Dans la zone euro, elle est confiée à la <b>Banque centrale européenne (BCE)</b>, indépendante. Son objectif principal : la <b>stabilité des prix</b> (inflation proche de 2 % à moyen terme). Son principal instrument : les <b>taux directeurs</b>. En les baissant, elle rend le crédit moins cher et soutient l'activité ; en les montant, elle freine l'inflation.</p>
<p>Problème : un seul taux pour 21 pays dont la situation peut différer.</p>
<h3>La politique budgétaire</h3>
<p>Elle reste du ressort des États (dépenses et recettes publiques). Elle peut <b>stabiliser</b> l'économie (stabilisateurs automatiques, relance) et <b>répondre à un choc asymétrique</b>, qui ne touche qu'un pays. Mais elle est encadrée par des <b>règles européennes</b> (Pacte de stabilité et de croissance) : déficit public limité à <b>3 % du PIB</b> et dette publique à <b>60 % du PIB</b>, avec des trajectoires de réduction adaptées à chaque pays depuis la réforme de 2024.</p>
${box("Le problème de coordination", "Chaque État a intérêt à laisser les autres faire l'effort budgétaire (comportement de <b>passager clandestin</b>). En cas de crise commune, il faut coordonner les politiques : par exemple le plan de relance européen <b>NextGenerationEU</b> (2020), financé par un emprunt commun.", "tip")}
<p><b>Les tensions :</b> sans politique monétaire propre ni taux de change, un pays touché par un choc asymétrique doit s'ajuster par la politique budgétaire, alors que celle-ci est limitée par les règles. Le budget de l'UE (environ 1 % du PIB européen) reste trop faible pour jouer un grand rôle de stabilisation.</p>`,
  quiz: [
    ["L'objectif principal de la BCE est…", ["la stabilité des prix", "le plein emploi", "l'équilibre du commerce extérieur", "la baisse de la dette publique"], "Elle vise une inflation proche de 2 % à moyen terme."],
    ["L'instrument principal de la politique monétaire est…", ["le taux directeur", "le taux de TVA", "les dépenses publiques", "le salaire minimum"], "Il influence le coût du crédit dans toute l'économie."],
    ["Un choc asymétrique est un choc qui…", ["touche un seul pays ou quelques pays", "touche tous les pays de la même façon", "concerne seulement les prix", "vient forcément de l'extérieur de l'UE"], "Par exemple, une crise d'un secteur très présent dans un seul pays."],
    ["La politique de la concurrence de l'UE interdit notamment…", ["les ententes entre entreprises", "les fusions entre entreprises", "les exportations", "les subventions à la recherche"], "Les fusions sont contrôlées mais pas interdites par principe."],
    ["Dans la zone euro, la politique budgétaire est…", ["menée par chaque État dans le respect de règles communes", "menée par la BCE", "totalement libre", "interdite"], "Les États gardent leur budget, encadré par le Pacte de stabilité."],
    ["Le comportement de passager clandestin en politique budgétaire consiste à…", ["profiter des efforts des autres pays sans en faire soi-même", "voyager sans billet", "refuser l'euro", "baisser ses taux d'intérêt"], "C'est pourquoi la coordination est nécessaire."],
  ],
  exos: [
    { id: "ses4a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que la politique monétaire de la BCE peut agir sur l'activité économique.",
      c: "<p>La BCE fixe ses <b>taux directeurs</b>, qui déterminent le coût auquel les banques se refinancent. Si elle les <b>baisse</b> : les banques prêtent à des taux plus faibles, les ménages empruntent plus pour consommer ou acheter un logement, les entreprises investissent davantage. La demande et l'activité augmentent. Si elle les <b>monte</b>, elle freine le crédit, la demande et donc l'inflation.</p>" },
    { id: "ses4b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que la politique européenne de la concurrence profite aux consommateurs.",
      c: "<p>En interdisant les <b>ententes</b> (accords sur les prix), en sanctionnant les <b>abus de position dominante</b> et en contrôlant les <b>fusions</b>, la Commission européenne empêche les entreprises de fixer des prix trop élevés. La concurrence pousse aussi les entreprises à <b>innover</b> et à améliorer la qualité. Les consommateurs bénéficient de prix plus bas, d'un plus grand choix et de produits plus innovants.</p>" },
    { id: "ses4c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que la politique budgétaire des pays de la zone euro rencontre des difficultés.",
      c: "<ul><li><b>Pas d'autre outil face à un choc asymétrique</b> : un pays de la zone euro n'a plus sa propre politique monétaire ni la possibilité de dévaluer sa monnaie. Il ne lui reste que le budget.</li><li><b>Des règles contraignantes</b> : le Pacte de stabilité limite le déficit (3 % du PIB) et la dette (60 % du PIB), ce qui réduit les marges de relance.</li><li><b>Un problème de coordination</b> : chaque pays peut être tenté de laisser les autres relancer (passager clandestin), et le budget européen reste faible.</li></ul>" },
  ] },
/* ------------------------------------------------------------ 5 */
{ court: "Structure sociale", titre: "Comment est structurée la société française actuelle ?",
  fiche: `
<h3>Les facteurs de structuration</h3>
<p>La société française est structurée par plusieurs facteurs qui créent des différences et des hiérarchies entre individus et groupes :</p>
<ul><li>la <b>profession</b> et le statut d'emploi ;</li><li>le <b>revenu</b> et le patrimoine ;</li><li>le <b>diplôme</b> ;</li><li>la <b>composition du ménage</b> ;</li><li>la <b>position dans le cycle de vie</b> (âge, génération) ;</li><li>le <b>sexe</b> ;</li><li>le <b>lieu de résidence</b>.</li></ul>
<h3>La nomenclature des PCS</h3>
<p>L'Insee classe la population selon les <b>professions et catégories socioprofessionnelles (PCS)</b>, rénovées en 2020. Elles regroupent des individus qui ont une position professionnelle proche (statut, qualification, secteur). Six groupes d'actifs : agriculteurs exploitants ; artisans, commerçants et chefs d'entreprise ; cadres et professions intellectuelles supérieures ; professions intermédiaires ; employés ; ouvriers.</p>
<p>Évolutions depuis 1950 : forte baisse des agriculteurs, salarisation, hausse des cadres et professions intermédiaires (tertiarisation), féminisation de l'emploi, baisse puis stabilisation des ouvriers.</p>
<h3>Les analyses en termes de classes sociales</h3>
<div class="two">${box("Karl Marx", "Les classes se définissent par leur place dans les <b>rapports de production</b> : bourgeoisie (propriétaires des moyens de production) et prolétariat (vendeurs de leur force de travail). Elles sont en <b>lutte</b>. Une classe « en soi » (position commune) devient une classe « pour soi » quand elle prend <b>conscience</b> de ses intérêts.")}${box("Max Weber", "Une approche <b>multidimensionnelle</b> : l'ordre économique (<b>classes</b>, selon les chances d'accès aux biens), l'ordre social (<b>groupes de statut</b>, selon le prestige) et l'ordre politique (<b>partis</b>, selon l'accès au pouvoir). Les classes ne sont pas forcément conscientes ni en conflit.")}</div>
<h3>Les classes sociales sont-elles toujours pertinentes ?</h3>
<p><b>Arguments pour la fin des classes :</b> la <b>moyennisation</b> (Henri Mendras : la société a la forme d'une toupie, avec une large classe moyenne), l'<b>individualisation</b> (les individus se définissent moins par leur groupe social), l'affaiblissement de la conscience de classe ouvrière, l'importance croissante d'autres critères (âge, genre, origine).</p>
<p><b>Arguments pour leur persistance :</b> les inégalités de revenus et surtout de patrimoine restent fortes ; la <b>bourgeoisie</b> reste une classe mobilisée et consciente d'elle-même (Pinçon et Pinçon-Charlot) ; Louis Chauvel parle du « retour des classes sociales » ; les modes de vie, les pratiques culturelles et l'accès aux diplômes restent très liés à l'origine sociale.</p>`,
  quiz: [
    ["Les PCS de l'Insee classent les individus selon…", ["leur position professionnelle", "leur seul revenu", "leur lieu de résidence", "leurs opinions politiques"], "Statut, qualification, secteur d'activité."],
    ["Pour Marx, les classes sociales se définissent d'abord par…", ["leur place dans les rapports de production", "leur prestige", "leur niveau de diplôme", "leur religion"], "Propriétaires des moyens de production contre vendeurs de leur force de travail."],
    ["Chez Weber, les groupes de statut correspondent à l'ordre…", ["social (prestige)", "économique", "politique", "juridique"], "Classes = ordre économique, partis = ordre politique."],
    ["La « moyennisation » désigne…", ["l'élargissement des classes moyennes", "la hausse de la pauvreté", "la disparition des cadres", "la hausse des écarts de patrimoine"], "Mendras décrit une société en forme de toupie."],
    ["Une classe « pour soi », chez Marx, est une classe…", ["consciente de ses intérêts et mobilisée", "qui partage seulement une même position", "sans conflit avec les autres", "définie par le prestige"], "La classe « en soi » partage une position, la classe « pour soi » en a conscience."],
    ["Un argument en faveur de la persistance des classes sociales est…", ["la forte concentration du patrimoine", "l'individualisation des modes de vie", "la moyennisation", "la baisse du nombre d'ouvriers"], "Les inégalités de patrimoine restent très fortes et se transmettent."],
  ],
  exos: [
    { id: "ses5a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Distinguez l'analyse des classes sociales de Marx et celle de Weber.",
      c: "<p><b>Marx</b> a une approche <b>réaliste</b> et <b>unidimensionnelle</b> : les classes existent réellement et se définissent par leur place dans les rapports de production. Il y a deux classes principales (bourgeoisie et prolétariat) en conflit, et une classe devient « pour soi » quand elle prend conscience de ses intérêts.</p><p><b>Weber</b> a une approche <b>nominaliste</b> et <b>multidimensionnelle</b> : les classes sont un outil de classement selon les chances d'accès aux biens (ordre économique). Il distingue aussi les groupes de statut (prestige) et les partis (pouvoir). Les classes ne sont pas forcément conscientes ni en lutte.</p>" },
    { id: "ses5b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que le diplôme et le genre sont des facteurs de structuration de la société française.",
      c: "<p><b>Le diplôme</b> conditionne l'accès aux professions (cadres, professions intermédiaires) et donc aux revenus. Il influence aussi les pratiques culturelles et le mode de vie. Il crée une hiérarchie entre diplômés du supérieur et non-diplômés.</p><p><b>Le genre</b> structure aussi la société : les femmes sont plus souvent employées et à temps partiel, moins souvent cadres dirigeantes, et gagnent en moyenne moins que les hommes (écart de salaire). Elles assument encore la majorité des tâches domestiques.</p>" },
    { id: "ses5c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que des évolutions remettent en cause la pertinence d'une analyse en termes de classes sociales.",
      c: "<ul><li><b>La moyennisation</b> : avec la hausse des niveaux de vie et la tertiarisation, une large classe moyenne s'est développée, aux modes de vie proches (Mendras).</li><li><b>L'individualisation</b> : les individus construisent leur identité à partir de plusieurs appartenances (loisirs, genre, génération), moins à partir de leur classe.</li><li><b>L'affaiblissement de la conscience de classe</b> : recul du syndicalisme et du vote de classe ouvrier.</li><li><b>D'autres clivages</b> prennent de l'importance : genre, âge, origine, territoire.</li></ul>" },
  ] },
/* ------------------------------------------------------------ 6 */
{ court: "Mobilité sociale", titre: "Quelles sont les caractéristiques contemporaines et les facteurs de la mobilité sociale ?",
  fiche: `
<h3>Définitions</h3>
<ul><li><b>Mobilité sociale</b> : changement de position sociale d'un individu. Elle est <b>intergénérationnelle</b> (entre parents et enfants) ou <b>intragénérationnelle</b> (au cours de la vie d'un individu).</li>
<li><b>Mobilité ascendante</b> (vers une position plus élevée), <b>descendante</b> (déclassement), <b>horizontale</b> (changement sans changer de niveau).</li>
<li><b>Reproduction sociale</b> (ou immobilité) : les enfants occupent la même position que leurs parents.</li></ul>
<h3>Mesurer la mobilité : les tables de mobilité</h3>
<p>Elles croisent la PCS des individus (souvent les fils ou filles de 35 à 59 ans) avec celle de leur père (ou mère).</p>
<div class="two">${box("Table de destinée", "On part de l'<b>origine</b> : « Sur 100 fils d'ouvriers, combien sont devenus cadres ? ». Elle se lit en ligne, avec un total de 100 % par origine.")}${box("Table de recrutement", "On part de la <b>position actuelle</b> : « Sur 100 cadres, combien sont fils d'ouvriers ? ». Elle se lit en colonne, avec un total de 100 % par position.")}</div>
<p>La <b>diagonale</b> donne la part des immobiles. La <b>mobilité observée</b> (ou brute) est la part des individus qui n'ont pas la même PCS que leur père.</p>
<h3>Mobilité structurelle et fluidité sociale</h3>
<p>Une partie de la mobilité est <b>structurelle</b> : elle s'explique par l'évolution de la structure des emplois entre deux générations (moins d'agriculteurs et d'ouvriers, plus de cadres). Une partie des enfants d'agriculteurs est « obligée » de changer de catégorie.</p>
<p>La <b>fluidité sociale</b> mesure l'égalité des chances d'accès aux positions, indépendamment des changements de structure. On la mesure par les <b>rapports de chances relatives</b> (odds ratios) : en France, un enfant de cadre a beaucoup plus de chances qu'un enfant d'ouvrier de devenir cadre plutôt qu'ouvrier. La fluidité a un peu progressé mais reste limitée.</p>
${box("Mobilité des femmes", "Comparer les filles à leur mère montre une forte mobilité ascendante, liée à la hausse de l'activité et des qualifications féminines. Mais les femmes restent plus souvent employées, et le déclassement par rapport au père est plus fréquent.", "tip")}
<h3>Les facteurs de la mobilité</h3>
<ul><li><b>L'évolution de la structure socioprofessionnelle</b> (mobilité structurelle).</li>
<li><b>Le niveau de formation</b> : le diplôme favorise la mobilité ascendante. Mais selon le <b>paradoxe d'Anderson</b>, un fils plus diplômé que son père n'a pas toujours une position plus élevée, car la hausse générale des diplômes réduit leur valeur relative (inflation scolaire).</li>
<li><b>Les ressources et configurations familiales</b> : capital économique, culturel (Bourdieu) et social transmis par les parents, taille de la fratrie, modèle familial, aspirations.</li></ul>`,
  quiz: [
    ["La mobilité intergénérationnelle compare…", ["la position d'un individu à celle de ses parents", "les positions successives d'un individu", "les salaires de deux pays", "deux entreprises"], "La mobilité intragénérationnelle concerne la carrière d'un même individu."],
    ["« Sur 100 fils d'ouvriers, 12 sont devenus cadres » se lit dans une table…", ["de destinée", "de recrutement", "de mortalité", "input-output"], "On part de l'origine sociale."],
    ["La mobilité structurelle est due…", ["à l'évolution de la structure des emplois", "à l'égalité des chances", "au mérite individuel uniquement", "à l'héritage"], "Exemple : la baisse du nombre d'agriculteurs."],
    ["La fluidité sociale désigne…", ["l'égalité des chances d'accès aux positions sociales", "le nombre total de mobiles", "la mobilité géographique", "la vitesse des carrières"], "On la mesure avec des rapports de chances relatives."],
    ["Le paradoxe d'Anderson montre que…", ["être plus diplômé que son père ne garantit pas une position plus élevée", "les diplômes ne servent à rien", "les enfants de cadres ne réussissent pas", "la mobilité est toujours ascendante"], "La hausse générale des diplômes réduit leur valeur relative."],
    ["Pour Bourdieu, l'école reproduit les inégalités notamment via…", ["le capital culturel transmis par la famille", "la taille des classes", "les cantines", "la carte scolaire uniquement"], "Les enfants de milieux favorisés maîtrisent mieux les codes scolaires."],
  ],
  exos: [
    { id: "ses6a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Distinguez mobilité observée et fluidité sociale.",
      c: "<p>La <b>mobilité observée</b> est la part des individus qui occupent une position différente de celle de leurs parents. Elle inclut la mobilité structurelle, due à l'évolution des emplois.</p><p>La <b>fluidité sociale</b> mesure l'égalité des chances : est-ce que les enfants de toutes les origines ont les mêmes chances d'accéder à une position ? Une société peut avoir beaucoup de mobilité observée (parce que la structure des emplois change) tout en restant peu fluide.</p>" },
    { id: "ses6b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les ressources familiales influencent la mobilité sociale.",
      c: "<ul><li><b>Le capital économique</b> : les familles aisées financent des études longues, des cours particuliers, un logement étudiant, un réseau d'écoles privées.</li><li><b>Le capital culturel</b> (Bourdieu) : maîtrise de la langue, pratiques culturelles et familiarité avec les attentes scolaires, qui facilitent la réussite scolaire.</li><li><b>Le capital social</b> : le réseau de relations des parents aide à trouver des stages et des emplois.</li><li><b>La configuration familiale</b> : taille de la fratrie, aspirations des parents, modèle de réussite proche.</li></ul>" },
    { id: "ses6c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que l'évolution de la structure socioprofessionnelle explique une partie de la mobilité sociale.",
      c: "<p>Entre deux générations, la structure des emplois a changé : la part des agriculteurs et des ouvriers a fortement baissé, celle des cadres et des professions intermédiaires a augmenté (tertiarisation, hausse des qualifications). Mécaniquement, de nombreux enfants d'agriculteurs ou d'ouvriers ne peuvent pas occuper la même position que leurs parents : ils deviennent mobiles. Comme les emplois qualifiés se sont développés, cette <b>mobilité structurelle</b> est surtout <b>ascendante</b>.</p>" },
  ] },
/* ------------------------------------------------------------ 7 */
{ court: "Travail et emploi", titre: "Quelles mutations du travail et de l'emploi ?",
  fiche: `
<h3>Travail, emploi, chômage</h3>
<p>Le <b>travail</b> est une activité de production. L'<b>emploi</b> est un travail rémunéré, encadré par un statut (salarié, indépendant) et un contrat. On parle de <b>qualité de l'emploi</b> : salaire, conditions de travail, sécurité de l'emploi, possibilités de formation, conciliation avec la vie privée.</p>
<h3>Les évolutions de l'organisation du travail</h3>
<ul><li><b>Le taylorisme</b> (organisation scientifique du travail) : division verticale (conception séparée de l'exécution) et horizontale (tâches parcellisées), salaire au rendement.</li>
<li><b>Le fordisme</b> : travail à la chaîne, production de masse standardisée, salaires plus élevés pour permettre la consommation de masse.</li>
<li><b>Le post-taylorisme</b> (depuis les années 1970-1980) : <b>polyvalence</b>, travail en équipe, <b>autonomie</b> plus grande, production en flux tendu (toyotisme, juste-à-temps), management participatif. Mais ces modèles peuvent intensifier le travail et maintenir des tâches répétitives (néo-taylorisme, centres d'appels, logistique).</li></ul>
<h3>Le numérique</h3>
<p>Il transforme le travail : télétravail, automatisation et intelligence artificielle, surveillance numérique, effacement des frontières entre vie privée et vie professionnelle. Il développe aussi le travail de <b>plateforme</b> (livreurs, chauffeurs) : des travailleurs souvent indépendants mais dépendants d'une plateforme, avec peu de protection sociale. On parle d'<b>ubérisation</b>.</p>
<h3>Les mutations de l'emploi</h3>
<ul><li><b>Salarisation</b> : environ 9 actifs occupés sur 10 sont salariés en France, même si l'emploi indépendant a progressé avec les micro-entrepreneurs.</li>
<li><b>Précarisation</b> : développement des formes particulières d'emploi (CDD, intérim, temps partiel subi), surtout chez les jeunes et pour les embauches. Le CDI reste majoritaire dans l'emploi total.</li>
<li><b>Polarisation des emplois</b> : hausse des emplois très qualifiés et des emplois peu qualifiés de services, recul des emplois intermédiaires routiniers (automatisables).</li></ul>
<h3>Le travail, source d'intégration sociale ?</h3>
<p>Le travail procure un revenu, un statut, des droits sociaux, des relations sociales et une identité : c'est un facteur d'<b>intégration</b>. Mais les mutations du travail et de l'emploi (précarité, chômage, isolement des travailleurs de plateforme, perte de sens) peuvent <b>affaiblir ce pouvoir intégrateur</b>.</p>`,
  quiz: [
    ["Le taylorisme repose sur…", ["la séparation entre conception et exécution", "la polyvalence des ouvriers", "le télétravail", "l'autonomie des équipes"], "C'est la division verticale du travail."],
    ["Le fordisme associe…", ["travail à la chaîne et production de masse", "travail artisanal et luxe", "plateformes et indépendants", "télétravail et autonomie"], "Ford augmente aussi les salaires pour permettre la consommation de masse."],
    ["Le post-taylorisme se caractérise par…", ["la polyvalence et l'autonomie", "la parcellisation des tâches", "le travail à la chaîne", "le salaire au rendement uniquement"], "Mais il peut s'accompagner d'une intensification du travail."],
    ["La polarisation des emplois désigne…", ["la hausse des emplois très qualifiés et peu qualifiés, au détriment des emplois intermédiaires", "la hausse de tous les emplois", "la disparition des emplois de services", "la fin du salariat"], "Les emplois routiniers intermédiaires sont les plus automatisables."],
    ["Les CDD, l'intérim et le temps partiel subi sont des…", ["formes particulières d'emploi", "emplois indépendants", "formes de chômage", "contrats de fonctionnaires"], "Ils sont associés à la précarisation."],
    ["Les travailleurs des plateformes numériques sont souvent…", ["indépendants mais dépendants économiquement de la plateforme", "fonctionnaires", "salariés en CDI", "sans aucune rémunération"], "On parle d'ubérisation."],
  ],
  exos: [
    { id: "ses7a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que le numérique transforme les relations d'emploi.",
      c: "<ul><li><b>Développement du travail de plateforme</b> : des travailleurs indépendants (livreurs, chauffeurs VTC) dépendent d'une application qui fixe les prix et note leur travail, sans les protections du salariat.</li><li><b>Télétravail</b> : il change le lien avec l'entreprise, permet plus d'autonomie mais brouille les frontières entre vie privée et professionnelle.</li><li><b>Contrôle numérique</b> : les outils permettent de mesurer en continu l'activité des salariés.</li></ul>" },
    { id: "ses7b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les nouvelles formes d'organisation du travail n'ont pas fait disparaître le taylorisme.",
      c: "<p>Le post-taylorisme a apporté polyvalence, travail en équipe et autonomie. Mais de nombreux emplois restent <b>néo-tayloriens</b> : dans les centres d'appels (scripts imposés, temps d'appel mesuré), la logistique (préparateurs de commandes guidés par un logiciel), la restauration rapide (procédures standardisées). Les tâches y sont répétitives, les cadences contrôlées et l'autonomie faible, souvent avec l'aide d'outils numériques.</p>" },
    { id: "ses7c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les mutations de l'emploi peuvent affaiblir le pouvoir intégrateur du travail.",
      c: "<ul><li><b>La précarité</b> (CDD courts, intérim) rend les revenus instables, limite l'accès au logement et au crédit et empêche de se projeter.</li><li><b>Le chômage de longue durée</b> isole et dévalorise.</li><li><b>Le travail de plateforme</b> prive de collectif de travail et de protection sociale complète.</li><li><b>L'intensification du travail</b> et la perte de sens peuvent dégrader la santé et l'identité professionnelle.</li></ul>" },
  ] },
/* ------------------------------------------------------------ 8 */
{ court: "Engagement politique", titre: "Comment expliquer l'engagement politique dans les sociétés démocratiques ?",
  fiche: `
<h3>Les formes de l'engagement politique</h3>
<p>L'engagement politique regroupe les différentes façons de participer à la vie publique : le <b>vote</b>, le <b>militantisme</b> (dans un parti, un syndicat), l'<b>engagement associatif</b>, la <b>manifestation</b>, la <b>pétition</b>, la <b>consommation engagée</b> (boycott, achat éthique), l'engagement en ligne.</p>
<h3>Le paradoxe de l'action collective</h3>
<p>Selon Mancur <b>Olson</b>, un individu rationnel a intérêt à ne pas s'engager : il profitera des avantages obtenus par le groupe (hausse de salaire, loi protectrice) sans en supporter les coûts (temps, argent, risque). C'est le comportement de <b>passager clandestin</b>. Pourtant, des individus s'engagent. Pourquoi ?</p>
<ul><li><b>Les incitations sélectives</b> (Olson) : des avantages réservés aux membres (services juridiques d'un syndicat, assurances, formations).</li>
<li><b>Les rétributions symboliques</b> : plaisir d'agir ensemble, reconnaissance, sentiment d'utilité, construction d'une identité.</li>
<li><b>La structure des opportunités politiques</b> : le contexte (ouverture du pouvoir, alliés, répression, élections) rend l'action plus ou moins probable et efficace.</li></ul>
<h3>Les variables sociodémographiques de l'engagement</h3>
<p>L'engagement dépend de la <b>PCS</b> et du <b>diplôme</b> (les plus diplômés participent davantage : ils ont plus de « compétence politique »), de l'<b>âge et de la génération</b> (les jeunes votent moins mais s'engagent sous d'autres formes), et du <b>sexe</b> (les femmes restent moins présentes dans les fonctions politiques, même si l'écart se réduit).</p>
<h3>Les transformations de l'action collective</h3>
<ul><li><b>De nouveaux enjeux</b> : environnement, égalité femmes-hommes, discriminations, cause animale, à côté des conflits du travail.</li>
<li><b>De nouveaux acteurs</b> : collectifs informels, associations, coordinations, mouvements sans leader (Gilets jaunes, marches pour le climat).</li>
<li><b>De nouveaux répertoires d'action</b> (Charles Tilly) : chaque époque a ses formes d'action. Aujourd'hui : actions médiatiques, désobéissance civile, mobilisation en ligne, recours au droit.</li></ul>`,
  quiz: [
    ["Le paradoxe de l'action collective a été formulé par…", ["Mancur Olson", "Charles Tilly", "Max Weber", "Pierre Bourdieu"], "Un individu rationnel aurait intérêt à être passager clandestin."],
    ["Un avantage réservé aux membres d'un syndicat est une…", ["incitation sélective", "rétribution symbolique", "structure des opportunités politiques", "répertoire d'action"], "Exemple : une aide juridique gratuite."],
    ["Le plaisir d'agir ensemble et la reconnaissance sont des…", ["rétributions symboliques", "incitations sélectives", "taxes", "variables sociodémographiques"], "Elles expliquent qu'on s'engage malgré les coûts."],
    ["Le concept de « répertoire d'action collective » est dû à…", ["Charles Tilly", "Karl Marx", "Joseph Schumpeter", "Émile Durkheim"], "Chaque époque dispose d'un ensemble de formes d'action possibles."],
    ["Quelle variable est fortement liée à la participation politique ?", ["le niveau de diplôme", "la couleur des yeux", "le mois de naissance", "la taille"], "Les plus diplômés se sentent plus compétents en politique."],
    ["Les marches pour le climat illustrent…", ["de nouveaux enjeux de mobilisation", "un conflit du travail classique", "une incitation sélective", "l'abstention"], "Les nouveaux mouvements sociaux portent des enjeux non matériels."],
  ],
  exos: [
    { id: "ses8a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Présentez le paradoxe de l'action collective.",
      c: "<p>Pour Mancur Olson, l'action collective produit un <b>bien collectif</b> : si une grève obtient une hausse de salaire, tous les salariés en profitent, grévistes ou non. Un individu rationnel compare alors les coûts de son engagement (perte de salaire, temps, risques) et ses gains, qu'il obtiendra de toute façon. Il a donc intérêt à ne pas s'engager : c'est le <b>passager clandestin</b>. Le paradoxe : si tout le monde raisonne ainsi, l'action collective n'a pas lieu, alors que tous y avaient intérêt.</p>" },
    { id: "ses8b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les rétributions symboliques et les incitations sélectives expliquent l'engagement.",
      c: "<p><b>Incitations sélectives</b> : des avantages réservés aux membres poussent à adhérer (conseils juridiques, réductions, formations, accès à des postes).</p><p><b>Rétributions symboliques</b> : l'engagement apporte de la reconnaissance, des amitiés, le sentiment de défendre une cause juste, une identité. Ces gains non matériels compensent les coûts de l'engagement.</p>" },
    { id: "ses8c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les variables sociodémographiques influencent l'engagement politique.",
      c: "<ul><li><b>Diplôme et PCS</b> : les cadres et les diplômés votent et militent davantage ; ils maîtrisent mieux les enjeux politiques et se sentent légitimes pour s'exprimer.</li><li><b>Âge et génération</b> : les jeunes votent moins régulièrement mais s'engagent davantage dans des formes ponctuelles (manifestations, pétitions en ligne, associations).</li><li><b>Sexe</b> : les femmes restent sous-représentées parmi les élus et dirigeants, malgré les lois sur la parité.</li></ul>" },
  ] },
/* ------------------------------------------------------------ 9 */
{ court: "Environnement", titre: "Quelle action publique pour l'environnement ?",
  fiche: `
<h3>Comment un problème environnemental devient-il public ?</h3>
<p>Un problème devient public lorsqu'il est <b>mis à l'agenda politique</b>, grâce à l'action de plusieurs <b>acteurs</b> : pouvoirs publics, ONG et associations, partis politiques, entreprises, experts et scientifiques (GIEC), médias, mouvements citoyens. Ces acteurs coopèrent mais entrent aussi en <b>conflit</b> (lobbying des entreprises contre des ONG, par exemple).</p>
<p>L'action publique se joue à plusieurs <b>échelles</b> : locale (communes), nationale, européenne (Pacte vert) et mondiale (COP, accord de Paris de 2015).</p>
<h3>Pourquoi l'État doit-il intervenir ?</h3>
<p>La pollution est une <b>externalité négative</b> : le pollueur impose un coût à d'autres agents sans le payer. Le climat et la biodiversité sont des <b>biens communs</b> : non excluables mais rivaux, ils risquent d'être surexploités (tragédie des biens communs).</p>
<h3>Les instruments de la politique climatique</h3>
<div class="two">${box("La réglementation", "Normes et interdictions (normes d'émission des voitures, interdiction de certains produits). <b>Simple et efficace</b>, mais rigide : elle n'incite pas à faire mieux que la norme et ignore les différences de coûts entre entreprises.")}${box("La taxation", "Une taxe (« pigouvienne ») fait payer le coût de la pollution : le pollueur internalise l'externalité. Principe <b>pollueur-payeur</b>. Elle incite à réduire la pollution, mais son niveau est difficile à fixer et elle peut peser sur les ménages modestes.", "tip")}</div>
<div class="two">${box("Le marché de quotas d'émission", "Les pouvoirs publics fixent un <b>plafond total</b> d'émissions et distribuent des quotas, que les entreprises peuvent <b>échanger</b>. Celles qui réduisent facilement leurs émissions vendent leurs quotas. Le volume de pollution est garanti, mais le prix peut être instable (exemple : marché européen du carbone).")}${box("La subvention à l'innovation verte", "Aide aux technologies propres (renouvelables, rénovation, véhicules électriques). Elle accélère la transition mais coûte cher aux finances publiques et peut profiter à des projets qui auraient eu lieu de toute façon.", "warn")}</div>
<h3>Les difficultés de la coopération internationale</h3>
<p>Chaque pays a intérêt à laisser les autres faire les efforts : c'est le comportement de <b>passager clandestin</b>. S'y ajoutent les inégalités de développement (les pays en développement réclament un droit au développement et une aide des pays riches, responsables historiques des émissions) et l'absence d'autorité mondiale capable de sanctionner. L'accord de Paris repose sur des engagements nationaux volontaires.</p>`,
  quiz: [
    ["La pollution est un exemple d'…", ["externalité négative", "externalité positive", "bien public pur", "incitation sélective"], "Le pollueur impose un coût à d'autres sans le payer."],
    ["Une taxe qui fait payer au pollueur le coût de la pollution est dite…", ["pigouvienne", "keynésienne", "ricardienne", "marxiste"], "Elle porte le nom de l'économiste Arthur Pigou."],
    ["Dans un marché de quotas d'émission, les pouvoirs publics fixent…", ["la quantité totale d'émissions autorisées", "le prix du carbone directement", "le nombre d'entreprises", "le taux d'intérêt"], "Le prix se forme ensuite sur le marché."],
    ["Le climat est considéré comme un…", ["bien commun", "bien privé", "bien de club", "bien de luxe"], "Il est non excluable mais sa qualité dépend de l'usage de chacun."],
    ["Le principal frein à la coopération internationale sur le climat est…", ["le comportement de passager clandestin", "l'absence de scientifiques", "la baisse de la population mondiale", "la fin des COP"], "Chaque pays a intérêt à laisser les autres faire l'effort."],
    ["La mise à l'agenda d'un problème environnemental dépend…", ["de l'action de nombreux acteurs (ONG, experts, médias, partis…)", "uniquement du gouvernement", "uniquement des entreprises", "du hasard"], "Ces acteurs coopèrent et entrent en conflit."],
  ],
  exos: [
    { id: "ses9a", niv: 1, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que la taxation est un instrument de la politique climatique.",
      c: "<p>La pollution est une externalité négative : le pollueur ne paie pas le coût qu'il impose. Une <b>taxe</b> sur les émissions (taxe carbone) augmente le prix des activités polluantes : le pollueur <b>internalise</b> le coût de l'externalité. Il est incité à réduire ses émissions, par exemple en changeant de procédé ou d'énergie. C'est le principe <b>pollueur-payeur</b>. Les recettes peuvent financer la transition ou compenser les ménages modestes.</p>" },
    { id: "ses9b", niv: 2, titre: "Partie 1 — Mobilisation des connaissances", q: "Montrez que les acteurs de l'action publique pour l'environnement peuvent entrer en conflit.",
      c: "<p>Les <b>ONG</b> et les mouvements citoyens réclament des mesures fortes et rapides. Certaines <b>entreprises</b>, dont l'activité serait pénalisée (énergies fossiles, industrie lourde), font du lobbying pour retarder ou adoucir les réglementations. Les <b>pouvoirs publics</b> doivent arbitrer entre objectifs climatiques, emploi et pouvoir d'achat (exemple : le mouvement des Gilets jaunes contre la hausse de la taxe carbone en 2018). Entre <b>États</b>, les pays en développement et les pays riches s'opposent sur le partage des efforts.</p>" },
    { id: "ses9c", niv: 3, titre: "Partie 1 — Mobilisation des connaissances", q: "Comparez la réglementation et le marché de quotas d'émission comme instruments de la politique climatique.",
      c: "<p><b>Réglementation</b> : l'État impose une norme à chaque entreprise. Avantage : effet direct et contrôlable. Limites : rigide, coûteuse pour les entreprises qui ont du mal à s'adapter, aucune incitation à faire mieux que la norme.</p><p><b>Marché de quotas</b> : l'État fixe un plafond global et les entreprises échangent leurs droits. Avantage : la quantité totale d'émissions est garantie et la réduction se fait là où elle coûte le moins cher. Limites : le prix du quota peut être trop bas ou instable (trop de quotas distribués), et il faut un système de contrôle fiable.</p>" },
  ] },
  ],
});

/* ------------------------------------------------------------ générateurs (outils statistiques) */
const SES = MATIERES[MATIERES.length - 1];
const ctx = () => pick([
  ["le PIB de la France", "milliards d'euros", 2400, 2900], ["le nombre de chômeurs", "milliers", 2100, 3200],
  ["le salaire net moyen mensuel", "euros", 2100, 2800], ["les émissions de CO₂ d'un pays", "millions de tonnes", 300, 450],
  ["le chiffre d'affaires d'une entreprise", "millions d'euros", 80, 150], ["les exportations d'un pays", "milliards d'euros", 500, 700]]);
SES.generes = [
  { titre: "Taux de variation", niv: 1, ch: null, gen() {
      const [nom, u, a, b] = ctx(), v1 = R(a, b), v2 = Math.round(v1 * (1 + R(-15, 25) / 100)), y1 = R(2010, 2018), y2 = y1 + R(2, 6), tv = (v2 - v1) / v1 * 100;
      return { q: `Données fictives : ${nom} passe de ${v1} ${u} en ${y1} à ${v2} ${u} en ${y2}. Calculez et interprétez le taux de variation.`,
        c: `<p>Taux de variation = (valeur d'arrivée − valeur de départ) / valeur de départ × 100 = (${v2} − ${v1}) / ${v1} × 100 ≈ <b>${fr(tv)} %</b>.</p><p>Phrase type : entre ${y1} et ${y2}, ${nom} a ${tv >= 0 ? "augmenté" : "diminué"} de ${fr(Math.abs(tv))} %.</p>` };
  } },
  { titre: "Coefficient multiplicateur", niv: 1, ch: null, gen() {
      const [nom, u, a, b] = ctx(), v1 = R(a, b), k = R(110, 340) / 100, v2 = Math.round(v1 * k);
      return { q: `Données fictives : ${nom} passe de ${v1} à ${v2} ${u}. Calculez le coefficient multiplicateur et interprétez-le, puis donnez le taux de variation correspondant.`,
        c: `<p>CM = valeur d'arrivée / valeur de départ = ${v2} / ${v1} ≈ <b>${fr(v2 / v1, 2)}</b>. ${nom.charAt(0).toUpperCase() + nom.slice(1)} a été multiplié par ${fr(v2 / v1, 2)}.</p><p>Taux de variation = (CM − 1) × 100 ≈ <b>${fr((v2 / v1 - 1) * 100)} %</b>.</p>${box("Attention", "On dit « multiplié par » quand le CM est supérieur à 2 environ ; en dessous, on préfère le taux de variation.", "warn")}` };
  } },
  { titre: "Indices base 100", niv: 2, ch: null, gen() {
      const y0 = R(2010, 2015), i1 = R(80, 160), i2 = R(80, 160), y1 = y0 + R(3, 6), y2 = y1 + R(2, 5);
      return { q: `Données fictives : un indice du salaire réel vaut 100 en ${y0}, ${i1} en ${y1} et ${i2} en ${y2}. 1. Interprétez l'indice de ${y1}. 2. Calculez le taux de variation entre ${y1} et ${y2}.`,
        c: `<p>1. Entre ${y0} et ${y1}, le salaire réel a ${i1 >= 100 ? "augmenté" : "baissé"} de <b>${Math.abs(i1 - 100)} %</b> (indice − 100, uniquement par rapport à l'année de base).</p><p>2. Entre deux années qui ne sont pas l'année de base, on ne soustrait pas les indices : (${i2} − ${i1}) / ${i1} × 100 ≈ <b>${fr((i2 - i1) / i1 * 100)} %</b>.</p>${box("Piège classique", `Écrire « ${i2 - i1} % » serait faux : la différence d'indices donne des <b>points</b>, pas des pourcentages.`, "warn")}` };
  } },
  { titre: "Proportion et points de pourcentage", niv: 2, ch: null, gen() {
      const tot = R(25000, 32000), p = R(18, 45), part = Math.round(tot * p / 100), p2 = p + R(-6, 8);
      return { q: `Données fictives : sur ${tot.toLocaleString("fr-FR")} milliers d'actifs, ${part.toLocaleString("fr-FR")} milliers sont cadres ou professions intermédiaires. 1. Calculez leur part. 2. Dix ans plus tard, cette part est de ${p2} %. Exprimez l'évolution en points de pourcentage puis en pourcentage.`,
        c: `<p>1. Part = partie / tout × 100 = ${part} / ${tot} × 100 ≈ <b>${fr(part / tot * 100)} %</b>.</p><p>2. En points : ${p2} − ${p} = <b>${p2 - p >= 0 ? "+" : ""}${p2 - p} points</b>. En pourcentage : (${p2} − ${p}) / ${p} × 100 ≈ <b>${fr((p2 - p) / p * 100)} %</b>.</p>` };
  } },
  { titre: "Taux de croissance annuel moyen", niv: 3, ch: 0, gen() {
      const v1 = R(1800, 2400), n = R(5, 12), tcam = R(5, 35) / 10, v2 = Math.round(v1 * (1 + tcam / 100) ** n);
      return { q: `Données fictives : le PIB en volume passe de ${v1} à ${v2} milliards d'euros en ${n} ans. Calculez le taux de croissance annuel moyen.`,
        c: `<p>TCAM = [(valeur d'arrivée / valeur de départ)<sup>1/n</sup> − 1] × 100 = [(${v2} / ${v1})<sup>1/${n}</sup> − 1] × 100 ≈ <b>${fr(((v2 / v1) ** (1 / n) - 1) * 100, 2)} %</b> par an.</p><p>On ne divise pas le taux global (${fr((v2 / v1 - 1) * 100)} %) par ${n} : les hausses se cumulent d'année en année.</p>` };
  } },
  { titre: "Lire une table de mobilité", niv: 3, ch: 5, gen() {
      const o = R(8, 14), c = R(45, 55), rec = R(10, 18), recO = R(30, 40);
      return { q: `Données fictives (hommes de 35 à 59 ans). Table de destinée : sur 100 fils d'ouvriers, ${o} sont cadres ; sur 100 fils de cadres, ${c} sont cadres. Table de recrutement : sur 100 cadres, ${rec} sont fils d'ouvriers ; sur 100 ouvriers, ${recO} sont fils d'ouvriers.<br>1. Rédigez une phrase pour la donnée « ${o} ». 2. Rédigez une phrase pour la donnée « ${rec} ». 3. Que montre la comparaison de ${o} et ${c} ?`,
        c: `<p>1. Selon cette table de destinée fictive, sur 100 hommes de 35 à 59 ans dont le père était ouvrier, <b>${o} sont devenus cadres</b>.</p><p>2. Sur 100 cadres de 35 à 59 ans, <b>${rec} ont un père ouvrier</b> (table de recrutement).</p><p>3. Un fils de cadre a environ <b>${fr(c / o)} fois</b> plus de chances (${c} / ${o}) qu'un fils d'ouvrier de devenir cadre : l'origine sociale pèse fortement sur la position, ce qui traduit une <b>fluidité sociale limitée</b>.</p>` };
  } },
];

/* ------------------------------------------------------------ méthode */
SES.methode = [
  { titre: "La dissertation (4 h)", html: `
<p>On te pose une question et on te donne un dossier de 3 ou 4 documents. Tu dois construire une <b>réponse argumentée</b> qui mobilise tes connaissances <b>et</b> les documents.</p>
<ol><li><b>Analyser le sujet (15 min)</b> : définir chaque mot-clé, repérer le type de sujet (« Montrez que… » demande de démontrer ; « Dans quelle mesure… » ou « Faut-il… » demande de discuter, avec une partie qui nuance).</li>
<li><b>Exploiter le dossier (30 min)</b> : pour chaque document, noter l'idée principale et 1 ou 2 données chiffrées utiles. Faire les calculs simples.</li>
<li><b>Construire le plan (30 min)</b> : 2 ou 3 parties, avec 2 ou 3 sous-parties chacune. Chaque sous-partie est un argument.</li>
<li><b>Rédiger (2 h 15)</b> et <b>relire (15 min)</b> : l'orthographe compte pour 2 points.</li></ol>
${box("L'introduction", "1. Une <b>accroche</b> (fait d'actualité, chiffre). 2. La <b>définition</b> des termes du sujet. 3. La <b>problématique</b> (la question reformulée et l'enjeu). 4. L'<b>annonce du plan</b>.")}
${box("Un paragraphe argumenté (AEI)", "<b>A</b>ffirmer une idée, l'<b>E</b>xpliquer avec ton cours (mécanisme, auteur), l'<b>I</b>llustrer avec un document précis (chiffre cité avec sa source : « selon le document 2… ») ou un exemple.", "tip")}
${box("La conclusion", "Un bilan qui répond clairement à la question, puis une ouverture (une question liée, pas une nouvelle partie).")}
${box("Erreurs à éviter", "Paraphraser les documents un par un, oublier de définir les notions, faire une partie « hors sujet », ne pas citer les documents, une conclusion qui ne répond pas.", "warn")}` },
  { titre: "Épreuve composée — Partie 1 : mobilisation des connaissances (3,5 pts)", html: `
<p>Une question de cours, <b>sans document</b>. Réponse attendue : une vingtaine de lignes environ.</p>
<ul><li>Commence par <b>définir</b> les notions de la question.</li><li>Développe <b>2 ou 3 arguments</b> distincts, chacun dans un paragraphe, avec un mécanisme expliqué et un exemple.</li><li>Pas besoin d'introduction et de conclusion développées, mais une phrase d'annonce aide le correcteur.</li></ul>
${box("Astuce", "Les questions « Montrez que… » demandent de démontrer sans discuter. Les questions « Présentez… » ou « Distinguez… » demandent d'expliquer clairement des notions.", "tip")}` },
  { titre: "Épreuve composée — Partie 2 : étude d'un document (5,5 pts)", html: `
<p>Un document statistique (tableau, graphique) et <b>deux questions</b> : la première demande de lire ou calculer des données, la seconde de les utiliser pour montrer quelque chose.</p>
<ul><li><b>Présente le document</b> en une phrase (source, date, champ, unité).</li><li>Rédige des <b>phrases de lecture</b> exactes : « Selon l'Insee, en 2023, le taux de chômage des 15-24 ans était de … % en France. »</li><li>Utilise les bons outils : taux de variation, coefficient multiplicateur, écarts en points, rapports.</li><li>Pour la question 2 : une idée, des données qui la prouvent, une explication.</li></ul>
${T(["Outil", "Formule", "Phrase type"], [["Taux de variation", "(VA − VD) / VD × 100", "a augmenté de x %"], ["Coefficient multiplicateur", "VA / VD", "a été multiplié par x"], ["Indice base 100", "valeur / valeur de base × 100", "a augmenté de (indice − 100) % depuis l'année de base"], ["Écart de parts", "part 2 − part 1", "a augmenté de x points de pourcentage"], ["Proportion", "partie / tout × 100", "x % des … sont …"]])}` },
  { titre: "Épreuve composée — Partie 3 : raisonnement sur dossier (9 pts)", html: `
<p>Un sujet (souvent « Montrez que… ») et un dossier de 2 ou 3 documents. C'est une <b>mini-dissertation</b> : introduction, développement en plusieurs paragraphes argumentés, conclusion.</p>
<ul><li>Introduction courte : définitions et annonce des parties.</li><li>2 ou 3 parties, chacune avec un ou deux paragraphes AEI.</li><li><b>Utilise tous les documents</b>, sans les paraphraser, et ajoute tes connaissances personnelles.</li><li>Conclusion qui répond au sujet.</li></ul>
${box("Barème 2027", "Partie 1 : 3,5 pts, partie 2 : 5,5 pts, partie 3 : 9 pts. 2 points récompensent la langue (0,5 + 0,5 + 1). Garde du temps pour relire.", "tip")}` },
];

/* ------------------------------------------------------------ sujets type bac */
SES.sujets = [
  { titre: "Dissertation", type: "Dissertation", q: "<p><b>Sujet :</b> Dans quelle mesure les politiques de l'emploi permettent-elles de lutter contre le chômage ?</p><p>Le dossier officiel comporterait 3 ou 4 documents (évolution du taux de chômage, coût du travail, dépenses de formation…). Entraîne-toi d'abord à construire le plan avec tes connaissances.</p>",
    c: "<p><b>Définitions :</b> politiques de l'emploi (mesures publiques visant à réduire le chômage et à améliorer le fonctionnement du marché du travail), chômage au sens du BIT. <b>Problématique :</b> les politiques de l'emploi sont-elles efficaces quelle que soit la nature du chômage ?</p><p><b>I. Les politiques de l'emploi peuvent réduire le chômage…</b></p><ul><li>A. Le soutien de la demande globale réduit le chômage conjoncturel (relance budgétaire, baisse des taux, effet multiplicateur).</li><li>B. Les politiques structurelles réduisent le chômage structurel : allègements du coût du travail sur les bas salaires, formation pour améliorer l'appariement, flexibilisation.</li></ul><p><b>II. … mais leur efficacité est limitée</b></p><ul><li>A. Elles sont coûteuses et contraintes (règles budgétaires européennes, dette) ; la relance peut augmenter les importations plutôt que la production nationale.</li><li>B. Elles ont des effets pervers : effets d'aubaine des allègements de cotisations, précarisation liée à la flexibilité, formations parfois mal ciblées.</li><li>C. Leur efficacité dépend du bon diagnostic : une relance ne résout pas un chômage structurel, et inversement.</li></ul><p><b>Conclusion :</b> elles peuvent réduire le chômage à condition d'être adaptées à sa nature et combinées. Ouverture : le modèle de flexicurité est-il transposable en France ?</p>" },
  { titre: "Épreuve composée", type: "Épreuve composée", q: `<p><b>Partie 1 (3,5 pts) :</b> Montrez que l'innovation est source de croissance économique.</p>
    <p><b>Partie 2 (5,5 pts) :</b> Document (données fictives pour l'entraînement) — Part des cadres et professions intellectuelles supérieures dans l'emploi, en France (en %)</p>
    ${T(["Année", "1982", "1992", "2002", "2012", "2022"], [["Part des cadres (%)", "8", "11", "14", "17", "22"]])}
    <p>1. Comparez la part des cadres en 1982 et en 2022 (1,5 pt). 2. À l'aide des données, montrez que l'évolution de la structure socioprofessionnelle favorise la mobilité sociale (4 pts).</p>
    <p><b>Partie 3 (9 pts) :</b> À l'aide du dossier et de vos connaissances, vous montrerez que l'engagement politique dépend de variables sociodémographiques.</p>`,
    c: `<p><b>Partie 1 :</b> voir l'exercice « Montrez que le progrès technique est une source de croissance » : hausse de la productivité, nouveaux produits et destruction créatrice (Schumpeter), croissance endogène (R&D, capital humain, externalités).</p>
    <p><b>Partie 2. Q1 :</b> Selon ces données fictives, la part des cadres dans l'emploi est passée de 8 % en 1982 à 22 % en 2022, soit une hausse de 14 points de pourcentage ; elle a été multipliée par 2,75.</p>
    <p><b>Q2 :</b> La forte hausse de la part des cadres (de 8 % à 22 %) montre que les emplois qualifiés se sont développés entre deux générations. Les enfants d'origine modeste ont donc plus de places disponibles en haut de la hiérarchie sociale : une partie d'entre eux deviennent cadres sans que l'égalité des chances ait forcément progressé. C'est la <b>mobilité structurelle</b>, surtout <b>ascendante</b>. Elle s'explique par la tertiarisation et la hausse des qualifications.</p>
    <p><b>Partie 3 :</b> Intro : définir engagement politique et variables sociodémographiques. I. Le diplôme et la PCS (compétence politique, sentiment de légitimité : les cadres et diplômés votent et militent plus). II. L'âge et la génération (les jeunes votent moins mais s'engagent dans des formes ponctuelles et en ligne). III. Le sexe (sous-représentation des femmes en politique, malgré la parité ; écarts qui se réduisent). Dans chaque partie, utiliser les documents du dossier. Conclusion : l'engagement est socialement inégal, ce qui pose la question de la représentativité des démocraties.</p>` },
  { titre: "Dissertation", type: "Dissertation", q: "<p><b>Sujet :</b> Les classes sociales permettent-elles encore de rendre compte de la structure sociale française ?</p>",
    c: "<p><b>Définitions :</b> classe sociale (grand groupe d'individus partageant une position économique et sociale proche, voire une conscience commune) ; structure sociale. <b>Problématique :</b> malgré la moyennisation et l'individualisation, les inégalités entre groupes restent-elles assez fortes pour parler de classes ?</p><p><b>I. Plusieurs évolutions remettent en cause l'analyse en classes</b></p><ul><li>A. Moyennisation et hausse générale des niveaux de vie (Mendras).</li><li>B. Individualisation et multiplication des appartenances.</li><li>C. Montée d'autres facteurs de différenciation : genre, âge, origine, territoire ; affaiblissement de la conscience de classe ouvrière.</li></ul><p><b>II. Mais les classes sociales restent un outil pertinent</b></p><ul><li>A. Les inégalités de revenus et surtout de patrimoine restent fortes et se transmettent.</li><li>B. La bourgeoisie reste une classe consciente et mobilisée (Pinçon-Charlot), et Chauvel parle d'un retour des classes.</li><li>C. Les modes de vie, la réussite scolaire et la mobilité sociale restent fortement liés à l'origine sociale.</li></ul><p><b>Conclusion :</b> l'analyse en classes doit être complétée par d'autres critères, mais elle garde une forte pertinence. Ouverture : le genre et l'origine se croisent avec la classe (intersectionnalité).</p>" },
];
}
