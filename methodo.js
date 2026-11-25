/* ==========================================================================
   EXEMPLES ANNOTÉS EN COULEUR — ajoutés à la méthode de chaque matière.
   Chaque couleur correspond à un élément de la méthode (voir la légende).
   ========================================================================== */
{
const { mk, exemple } = OUT;
const M = cle => MATIERES.find(m => m.cle === cle);
/* ajoute un bloc à la fin de la méthode dont le titre commence par « debut » */
const add = (cle, debut, html) => { const m = M(cle); if (!m) return; const x = m.methode.find(t => t.titre.startsWith(debut)); if (x) x.html += html; };

/* ================================================================ SES */
add("ses", "La dissertation", exemple("Exemple annoté : introduction de dissertation",
  [[1, "Accroche"], [2, "Définitions"], [3, "Problématique"], [4, "Annonce du plan"]],
  `<p><b>Sujet :</b> Dans quelle mesure les politiques de l'emploi permettent-elles de lutter contre le chômage ?</p>
  <p>${mk(1, "En France, le taux de chômage reste supérieur à 7 % de la population active, malgré des décennies de mesures en faveur de l'emploi.")} ${mk(2, "Le chômage, au sens du BIT, concerne les personnes sans emploi, disponibles et qui en recherchent un activement. Les politiques de l'emploi désignent l'ensemble des mesures publiques qui visent à réduire ce chômage, en agissant sur la demande globale ou sur le fonctionnement du marché du travail.")} ${mk(3, "Ces politiques sont-elles efficaces quelle que soit la nature du chômage, ou leur succès dépend-il du bon diagnostic ?")} ${mk(4, "Nous verrons d'abord que les politiques de l'emploi peuvent réduire le chômage conjoncturel comme le chômage structurel, puis que leur efficacité reste limitée.")}</p>`)
 + exemple("Exemple annoté : un paragraphe argumenté (AEI)",
  [[3, "Affirmer l'idée"], [2, "Expliquer (mécanisme du cours)"], [5, "Illustrer (document ou exemple)"], [4, "Conclure le paragraphe"]],
  `<p>${mk(3, "Tout d'abord, la baisse du coût du travail peu qualifié peut favoriser l'embauche.")} ${mk(2, "En effet, lorsque le coût d'un salarié dépasse ce qu'il rapporte à l'entreprise, celle-ci renonce à embaucher. En allégeant les cotisations sociales sur les bas salaires, l'État rend ces emplois plus rentables sans baisser le salaire net.")} ${mk(5, "Ainsi, selon le document 2, les allègements de cotisations ont représenté plusieurs dizaines de milliards d'euros par an en France, et les études estiment qu'ils ont créé ou sauvegardé des centaines de milliers d'emplois peu qualifiés.")} ${mk(4, "Cette politique agit donc sur le chômage structurel, mais elle coûte cher et peut produire des effets d'aubaine.")}</p>`)
 + exemple("Exemple annoté : conclusion",
  [[3, "Réponse à la problématique"], [4, "Rappel du raisonnement"], [1, "Ouverture"]],
  `<p>${mk(4, "Nous avons vu que les politiques de l'emploi agissent sur les deux formes de chômage, mais qu'elles se heurtent à leur coût, à des effets pervers et aux contraintes européennes.")} ${mk(3, "Elles permettent donc de lutter contre le chômage à condition d'être adaptées à sa nature et combinées entre elles.")} ${mk(1, "On peut alors se demander si le modèle danois de flexicurité, qui associe flexibilité et sécurité, serait transposable en France.")}</p>`));
add("ses", "Épreuve composée — Partie 1", exemple("Exemple annoté : réponse de partie 1",
  [[2, "Définition"], [3, "Idée 1"], [4, "Idée 2"], [5, "Exemple"]],
  `<p><b>Question :</b> Montrez que les institutions favorisent la croissance économique.</p>
  <p>${mk(2, "Les institutions sont l'ensemble des règles, formelles ou informelles, qui encadrent les comportements économiques.")}</p>
  <p>${mk(3, "D'abord, la protection des droits de propriété incite à investir : un entrepreneur investit s'il est sûr de profiter des revenus de son investissement.")} ${mk(5, "Par exemple, un agriculteur qui possède un titre de propriété sur sa terre investira plus dans l'irrigation.")}</p>
  <p>${mk(4, "Ensuite, les brevets protègent les innovateurs contre l'imitation immédiate et les incitent à financer la recherche-développement, source de progrès technique.")} ${mk(5, "C'est le cas dans l'industrie pharmaceutique, où un brevet protège un médicament pendant 20 ans.")}</p>`));
add("ses", "Épreuve composée — Partie 2", exemple("Exemple annoté : phrase de lecture d'une donnée",
  [[1, "Source"], [2, "Date et lieu"], [6, "Champ (qui ?)"], [5, "Donnée et unité"]],
  `<p>${mk(1, "Selon l'Insee,")} ${mk(2, "en 2023, en France,")} ${mk(6, "parmi les actifs de 15 à 24 ans,")} ${mk(5, "le taux de chômage s'élevait à 17,3 %")}. <small>(phrase d'exemple)</small></p>
  <p>Variante avec un calcul : ${mk(1, "D'après le document,")} ${mk(6, "la part des cadres dans l'emploi")} ${mk(5, "a augmenté de 14 points de pourcentage")} ${mk(2, "entre 1982 et 2022")}.</p>`));
add("ses", "Épreuve composée — Partie 3", exemple("Exemple annoté : utiliser deux documents dans un même paragraphe",
  [[3, "Idée"], [2, "Explication"], [1, "Document 1"], [5, "Document 2"], [4, "Lien avec le sujet"]],
  `<p>${mk(3, "Les variables sociodémographiques influencent fortement la participation électorale.")} ${mk(2, "Les plus diplômés se sentent plus compétents en politique et plus légitimes pour s'exprimer.")} ${mk(1, "Ainsi, le document 1 montre que les diplômés du supérieur votent nettement plus souvent que les non-diplômés,")} ${mk(5, "tandis que le document 2 indique que l'abstention est bien plus forte chez les 18-24 ans que chez les plus de 60 ans.")} ${mk(4, "L'engagement politique n'est donc pas réparti au hasard : il dépend de la position sociale et de l'âge.")}</p>`));

/* ================================================================ PHILO */
add("philo", "La dissertation", exemple("Exemple annoté : analyser le sujet",
  [[2, "Définition des termes"], [6, "Présupposé"], [5, "Tension / paradoxe"], [3, "Problématique"]],
  `<p><b>Sujet :</b> Le travail rend-il heureux ?</p>
  <p>${mk(2, "Le travail est l'activité par laquelle l'homme transforme la nature pour produire ce dont il a besoin ; il est souvent pénible et contraint. Le bonheur est un état de satisfaction complète et durable.")}</p>
  <p>${mk(6, "La question suppose qu'une activité nécessaire, et parfois subie, pourrait être source de satisfaction.")}</p>
  <p>${mk(5, "Or le travail semble s'opposer au bonheur (on attend le week-end, les vacances, la retraite), alors qu'on souffre aussi de ne pas travailler (le chômage isole et dévalorise).")}</p>
  <p>${mk(3, "Le travail est-il seulement un moyen de vivre, qui nous éloigne du bonheur, ou peut-il être une source d'accomplissement de soi ?")}</p>`)
 + exemple("Exemple annoté : introduction complète",
  [[1, "Accroche"], [2, "Analyse des termes"], [3, "Problématique"], [4, "Annonce du plan"]],
  `<p>${mk(1, "« Vivement le week-end ! » : cette exclamation banale suggère que le bonheur commence quand le travail s'arrête.")} ${mk(2, "Pourtant, le travail n'est pas seulement une peine : c'est l'activité par laquelle l'homme transforme le monde et se transforme lui-même, et le bonheur, état de satisfaction durable, suppose peut-être qu'on se sente utile.")} ${mk(3, "Le travail n'est-il qu'une contrainte qui nous détourne du bonheur, ou peut-il en être une condition ?")} ${mk(4, "Nous verrons d'abord que le travail apparaît comme une nécessité pénible, puis qu'il peut être un moyen de se réaliser, avant de montrer que son rapport au bonheur dépend des conditions dans lesquelles il s'exerce.")}</p>`)
 + exemple("Exemple annoté : un paragraphe de développement",
  [[3, "Idée directrice"], [2, "Explication"], [1, "Référence philosophique"], [5, "Exemple"], [4, "Transition"]],
  `<p>${mk(3, "Le travail peut être un moyen de se réaliser.")} ${mk(2, "En transformant la matière, l'homme met quelque chose de lui-même dans ce qu'il produit et prend conscience de ses capacités.")} ${mk(1, "C'est ce que montre Hegel avec la dialectique du maître et de l'esclave : c'est en travaillant que l'esclave se forme et devient, à terme, plus libre que le maître qui jouit sans rien faire.")} ${mk(5, "L'artisan qui contemple le meuble qu'il a fabriqué éprouve ainsi une satisfaction que n'apporte pas la simple consommation.")} ${mk(4, "Mais cette réalisation de soi suppose que le travail ait un sens : qu'en est-il lorsqu'il devient répétitif et aliéné ?")}</p>`));
add("philo", "L'explication de texte", exemple("Exemple annoté : introduction d'une explication de texte",
  [[6, "Thème"], [3, "Problème"], [1, "Thèse de l'auteur"], [5, "Enjeu"], [4, "Étapes du texte"]],
  `<p>Dans un extrait du <i>Discours de la méthode</i> (1637), Descartes s'interroge sur ${mk(6, "la connaissance de soi et la recherche d'une vérité certaine.")} ${mk(3, "Peut-on trouver une vérité qui résiste à tous les doutes, même les plus extrêmes ?")} ${mk(1, "Descartes soutient que, si je peux douter de tout, je ne peux pas douter que je pense pendant que je doute : « je pense, donc je suis » est une vérité indubitable.")} ${mk(5, "L'enjeu est considérable : fonder toute la connaissance sur une première certitude, celle du sujet pensant.")} ${mk(4, "Dans un premier moment, l'auteur rejette tout ce qui peut être mis en doute ; dans un deuxième, il découvre ce qui résiste au doute ; enfin, il en fait le premier principe de sa philosophie.")}</p>`));

/* ================================================================ LLCER */
add("llce", "La synthèse", exemple("Exemple annoté : introduction de synthèse",
  [[1, "Présentation des documents"], [2, "Thème commun"], [3, "Problématique"], [4, "Annonce du plan"]],
  `<p>${mk(1, "The dossier is made up of an extract from a novel about an Irish girl leaving for America in the 1950s (document A), a press article about second-generation migrants in Britain (document B) and a photograph of a young man standing at a border fence (document C).")} ${mk(2, "All three documents deal with migration and the search for a new home.")} ${mk(3, "They raise the question of whether migrants can ever feel that they fully belong in a new country.")} ${mk(4, "We will first see how painful leaving one's home can be, before examining how a new sense of belonging can be built.")}</p>`)
 + exemple("Exemple annoté : paragraphe qui met les documents en relation",
  [[3, "Idée"], [1, "Document A"], [5, "Document B"], [2, "Connecteur"], [4, "Bilan"]],
  `<p>${mk(3, "Leaving one's country is first experienced as a painful separation.")} ${mk(1, "In document A, Nora struggles not to cry as she remembers her mother's face on the quay,")} ${mk(2, "whereas")} ${mk(5, "in document B, Tolu explains that she feels « too Nigerian for England and too English for Lagos ».")} ${mk(2, "However,")} ${mk(4, "both documents suggest that this pain is not the end of the story: it can lead to a richer, hybrid identity.")}</p>`));
add("llce", "La traduction", exemple("Exemple annoté : traduire sans calquer",
  [[1, "Temps"], [2, "Verbe de mouvement"], [5, "Tournure à adapter"], [4, "Ordre des mots"]],
  `<p><b>Anglais :</b> ${mk(1, "She had never")} ${mk(5, "dared")} to tell anyone that she ${mk(2, "ran across")} the bridge ${mk(4, "every single morning")}.</p>
  <p><b>Calque à éviter :</b> « Elle n'avait jamais osé dire à quelqu'un qu'elle courait à travers le pont chaque seul matin. »</p>
  <p><b>Bonne traduction :</b> ${mk(1, "Elle n'avait jamais")} ${mk(5, "osé avouer à personne")} qu'elle ${mk(2, "traversait le pont en courant")} ${mk(4, "tous les matins sans exception")}.</p>`));
add("llce", "L'oral", exemple("Exemple annoté : début de présentation orale",
  [[1, "Annonce du dossier"], [3, "Problématique"], [4, "Plan"], [5, "Lien avec l'œuvre"]],
  `<p>${mk(1, "Today I am going to present my personal dossier on the theme « Arts et débats d'idées », and more precisely the axis « L'art du débat ».")} ${mk(3, "My question is: can a debate really change people's minds?")} ${mk(4, "I will first show how arguments can overcome prejudice, then how debate can also be a form of performance.")} ${mk(5, "My main document is the film 12 Angry Men, in which a single juror manages to convince eleven others.")}</p>`));

/* ================================================================ MATHS */
add("maths", "Réussir un devoir", exemple("Exemple annoté : rédiger une question de probabilités",
  [[1, "Justifier la loi"], [2, "Paramètres"], [5, "Calcul"], [4, "Conclusion dans le contexte"]],
  `<p><b>Question :</b> On interroge 20 clients ; chacun est satisfait avec la probabilité 0,8, indépendamment des autres. Calculer la probabilité qu'exactement 15 clients soient satisfaits.</p>
  <p>${mk(1, "On répète 20 fois, de manière identique et indépendante, une épreuve de Bernoulli dont le succès est « le client est satisfait ».")} ${mk(2, "Donc X suit la loi binomiale de paramètres n = 20 et p = 0,8.")} ${mk(5, "P(X = 15) = C(20, 15) × 0,8<sup>15</sup> × 0,2<sup>5</sup> ≈ 0,175.")} ${mk(4, "La probabilité qu'exactement 15 clients sur 20 soient satisfaits est d'environ 17,5 %.")}</p>`));
add("maths", "Rédiger une démonstration", exemple("Exemple annoté : récurrence",
  [[1, "Propriété"], [2, "Initialisation"], [5, "Hérédité"], [4, "Conclusion"]],
  `<p>${mk(1, "Pour tout entier n, on note P(n) : « u<sub>n</sub> ≤ 6 », avec u<sub>0</sub> = 2 et u<sub>n+1</sub> = 0,5 u<sub>n</sub> + 3.")}</p>
  <p>${mk(2, "Initialisation : u<sub>0</sub> = 2 ≤ 6, donc P(0) est vraie.")}</p>
  <p>${mk(5, "Hérédité : supposons P(n) vraie pour un entier n, c'est-à-dire u<sub>n</sub> ≤ 6. Alors 0,5 u<sub>n</sub> ≤ 3, donc 0,5 u<sub>n</sub> + 3 ≤ 6, soit u<sub>n+1</sub> ≤ 6 : P(n+1) est vraie.")}</p>
  <p>${mk(4, "Conclusion : par récurrence, u<sub>n</sub> ≤ 6 pour tout entier naturel n.")}</p>`));

/* ================================================================ HISTOIRE-GÉO */
add("hg", "La question problématisée", exemple("Exemple annoté : introduction",
  [[1, "Accroche"], [2, "Bornes et définitions"], [3, "Problématique"], [4, "Annonce du plan"]],
  `<p><b>Sujet :</b> Comment la guerre froide structure-t-elle les relations internationales entre 1947 et 1962 ?</p>
  <p>${mk(1, "En 1946, Churchill dénonce le « rideau de fer » qui coupe l'Europe en deux.")} ${mk(2, "La guerre froide désigne l'affrontement idéologique, politique et géopolitique entre les États-Unis et l'URSS, sans conflit armé direct entre eux ; de 1947, date de la doctrine Truman, à 1962, crise de Cuba, elle connaît sa phase la plus tendue.")} ${mk(3, "Comment cette rivalité organise-t-elle le monde en deux blocs et fait-elle naître des crises ?")} ${mk(4, "Nous verrons la formation de deux blocs opposés, puis les crises qui les opposent, enfin l'extension mondiale de leur rivalité.")}</p>`));
add("hg", "L'analyse de document", exemple("Exemple annoté : présentation d'un document",
  [[1, "Nature"], [2, "Auteur"], [5, "Date"], [6, "Contexte"], [3, "Intérêt pour la consigne"]],
  `<p>${mk(1, "Ce document est un discours radiodiffusé,")} ${mk(2, "prononcé par le général de Gaulle, alors sous-secrétaire d'État à la Guerre réfugié à Londres,")} ${mk(5, "le 18 juin 1940 sur les ondes de la BBC.")} ${mk(6, "La veille, le maréchal Pétain a annoncé qu'il demandait l'armistice à l'Allemagne.")} ${mk(3, "Il permet de comprendre pourquoi de Gaulle refuse la défaite et appelle à poursuivre le combat.")}</p>`));

/* ================================================================ ENSEIGNEMENT SCIENTIFIQUE */
add("es", "Rédiger une argumentation", exemple("Exemple annoté : argumentation scientifique",
  [[1, "Donnée du document"], [2, "Connaissance du cours"], [5, "Raisonnement"], [4, "Conclusion"]],
  `<p><b>Question :</b> Expliquez pourquoi la fonte de la banquise accélère le réchauffement.</p>
  <p>${mk(1, "Le document 1 indique que l'albédo de la glace est d'environ 0,6, contre 0,06 pour l'océan.")} ${mk(2, "Or l'albédo est la part du rayonnement solaire réfléchie : plus il est faible, plus la surface absorbe d'énergie.")} ${mk(5, "Quand la banquise fond, elle est remplacée par l'océan sombre, qui absorbe davantage d'énergie solaire ; la température augmente, ce qui fait encore fondre la glace.")} ${mk(4, "La fonte de la banquise est donc une rétroaction positive qui amplifie le réchauffement.")}</p>`));

/* ================================================================ EMC */
add("emc", "Argumenter", exemple("Exemple annoté : un argument complet",
  [[3, "Position"], [2, "Argument"], [5, "Exemple précis"], [1, "Objection prise en compte"], [4, "Réponse"]],
  `<p>${mk(3, "Je pense que les conventions citoyennes peuvent enrichir la démocratie.")} ${mk(2, "Elles donnent la parole à des citoyens tirés au sort, plus représentatifs de la diversité de la population que les élus, et qui délibèrent sans enjeu électoral.")} ${mk(5, "La Convention citoyenne pour le climat (2019-2020) a ainsi réuni 150 citoyens qui ont formulé 149 propositions.")} ${mk(1, "On peut objecter que ces citoyens n'ont pas été élus et qu'une partie de leurs propositions n'a pas été reprise.")} ${mk(4, "C'est pourquoi ces conventions doivent compléter le Parlement, non le remplacer.")}</p>`));

/* ================================================================ LANGUES */
add("lva", "Expression écrite", exemple("Exemple annoté : paragraphe d'essai",
  [[3, "Idée"], [2, "Connecteur"], [5, "Exemple"], [6, "Structure B2"], [4, "Conclusion du paragraphe"]],
  `<p>${mk(3, "Social media can be a powerful tool for young citizens.")} ${mk(2, "First of all,")} they allow teenagers to get involved in causes they care about. ${mk(5, "For instance, millions of students joined the climate strikes after Greta Thunberg's protest went viral in 2018.")} ${mk(2, "However,")} ${mk(6, "the information they find online, which is not always checked, can be misleading.")} ${mk(4, "That is why social media should be used with a critical mind.")}</p>`));
add("lvb", "Expression écrite", exemple("Exemple annoté : párrafo argumentado",
  [[3, "Idea"], [2, "Conector"], [5, "Ejemplo"], [6, "Opinión"], [4, "Conclusión"]],
  `<p>${mk(3, "El arte puede ser una forma de denunciar la violencia.")} ${mk(2, "En primer lugar,")} muestra el sufrimiento de las víctimas. ${mk(5, "Por ejemplo, en Guernica (1937), Picasso pinta a una madre que llora con su hijo muerto en los brazos.")} ${mk(2, "Además,")} ${mk(6, "creo que una obra como esta es más fuerte que un discurso porque todo el mundo la entiende.")} ${mk(4, "Por eso, el arte comprometido sigue siendo importante hoy.")}</p>`));
}
