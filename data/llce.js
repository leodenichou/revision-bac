/* ==========================================================================
   LLCER ANGLAIS — Spécialité Terminale, bac 2027
   3 thématiques + programme limitatif 2026-2027 / 2027-2028
   ========================================================================== */
{
const { pick, shuf, box, T } = OUT;

/* Phrases à traduire (anglais → français), rédigées pour l'entraînement */
const TRAD = [
  ["She had never dared to tell her parents that she wanted to become a painter.", "Elle n'avait jamais osé dire à ses parents qu'elle voulait devenir peintre.", "Plus-que-parfait : <i>had never dared</i> → « n'avait jamais osé »."],
  ["The longer he stayed in New York, the less he felt like a stranger.", "Plus il restait à New York, moins il se sentait étranger.", "<i>The longer…, the less…</i> → « Plus…, moins… »."],
  ["Had she known the truth, she would have left the town years before.", "Si elle avait connu la vérité, elle aurait quitté la ville des années plus tôt.", "Inversion = conditionnel passé : <i>had she known</i> → « si elle avait su / connu »."],
  ["The jury kept arguing until late into the night.", "Les jurés ne cessèrent de débattre jusque tard dans la nuit.", "<i>keep + V-ing</i> → « continuer à / ne pas cesser de »."],
  ["He walked out of the room without saying a word.", "Il sortit de la pièce sans dire un mot.", "Verbe de mouvement + particule : on traduit la direction par le verbe (« sortir ») et la manière disparaît ou devient un complément."],
  ["The girl was made to apologise in front of the whole class.", "On obligea la jeune fille à s'excuser devant toute la classe.", "Passif anglais → « on » en français."],
  ["It was not until she arrived in Lagos that she realised how much she had changed.", "Ce n'est qu'en arrivant à Lagos qu'elle se rendit compte à quel point elle avait changé.", "<i>It was not until… that…</i> → « Ce n'est que… que… »."],
  ["The old man used to sit by the window, watching the boats go by.", "Le vieil homme s'asseyait souvent près de la fenêtre et regardait passer les bateaux.", "<i>used to</i> → imparfait d'habitude ; <i>watch + V</i> → « regarder + infinitif »."],
  ["She could hear the music drifting up from the street.", "Elle entendait la musique qui montait de la rue.", "<i>could hear</i> → souvent simplement « entendait »."],
  ["Nobody had ever painted the city like that before.", "Personne n'avait jamais peint la ville ainsi auparavant.", "Double négation à éviter en anglais, nécessaire en français : « personne… jamais »."],
  ["Leaving home was the hardest thing she had ever done.", "Quitter la maison avait été la chose la plus difficile qu'elle ait jamais faite.", "Gérondif sujet → infinitif en français ; superlatif + subjonctif."],
  ["He tiptoed across the hall, afraid of waking his father.", "Il traversa le couloir sur la pointe des pieds, de peur de réveiller son père.", "<i>tiptoe across</i> : chassé-croisé → « traverser sur la pointe des pieds »."],
  ["The novel was banned in several states for its depiction of violence.", "Le roman fut interdit dans plusieurs États à cause de sa représentation de la violence.", "<i>depiction</i> → « représentation », <i>ban</i> → « interdire »."],
  ["I wish I had listened to my mother.", "Si seulement j'avais écouté ma mère.", "<i>I wish + past perfect</i> → regret sur le passé : « si seulement… » ou « je regrette de ne pas avoir… »."],
  ["The crowd had gathered outside the courthouse, waiting for the verdict.", "La foule s'était rassemblée devant le palais de justice dans l'attente du verdict.", "Participe présent → « dans l'attente de » ou « en attendant »."],
  ["She felt torn between two countries, two languages, two lives.", "Elle se sentait déchirée entre deux pays, deux langues, deux vies.", "<i>torn between</i> → « déchiré(e) entre »."],
];

/* Mots de liaison */
const LINK = [
  ["However", "cependant (opposition)"], ["Moreover / Furthermore", "de plus (addition)"], ["Whereas", "alors que (contraste)"], ["Therefore", "donc, par conséquent"],
  ["Although", "bien que"], ["As a result", "en conséquence"], ["On the one hand… on the other hand", "d'une part… d'autre part"], ["In the same way / Likewise", "de la même façon"],
  ["Nevertheless", "néanmoins"], ["Whereas document A…, document B…", "alors que le document A…, le document B…"], ["To sum up / All in all", "pour résumer / en somme"], ["Unlike", "contrairement à"],
];

const theme = (o) => ({ court: o.court, titre: o.titre, fiche: o.fiche, quiz: o.quiz, exos: o.exos });

MATIERES.push({
  cle: "llce", nom: "LLCER anglais", court: "LLCER", labelChap: "Thème",
  sous: "Spécialité · écrit 3 h 30 + oral · coef. 16",
  intro: "Les trois thématiques de Terminale, les œuvres du programme 2026-2028, la méthode de la synthèse, de la traduction et de l'oral, et du vocabulaire à réviser en cartes.",
  epreuve: `<p><b>Coefficient 16</b>, avec une <b>partie écrite</b> et une <b>partie orale</b> qui comptent chacune pour moitié.</p>
    <p><b>Écrit (3 h 30), le 16 ou le 17 juin 2027 :</b> tu choisis entre deux sujets, chacun sur une thématique différente du programme de Terminale.</p>
    <ul><li><b>Synthèse en anglais (16 points)</b> d'un dossier de 3 documents (au moins un texte littéraire et un document iconographique), guidée par 2 ou 3 questions. Environ 500 mots ; un court écrit argumentatif peut compléter la synthèse dans ce total.</li>
    <li><b>Traduction ou transposition en français (4 points)</b> d'un passage du dossier.</li></ul>
    <p><b>Oral (20 minutes) :</b> tu présentes un <b>dossier personnel</b> de documents vus en classe et choisis par toi, en lien avec les thématiques. C'est à l'oral que sont évaluées les œuvres du programme limitatif.</p>`,
  chapitres: [
theme({ court: "Arts et débats d'idées", titre: "Arts et débats d'idées",
  fiche: `
<p>Cette thématique interroge le rôle de l'art dans la société : l'art peut dénoncer, provoquer, déranger, et il met en scène l'échange d'idées.</p>
<h3>Axe 1 — Art et contestation</h3>
<p>L'art comme arme politique et sociale : protest songs (Bob Dylan, Billie Holiday et <i>Strange Fruit</i> contre les lynchages), street art (Banksy), littérature engagée (Steinbeck, Orwell, Toni Morrison), photographie documentaire (Dorothea Lange pendant la Grande Dépression), art du mouvement des droits civiques ou du Black Arts Movement.</p>
<h3>Axe 2 — L'art qui fait débat</h3>
<p>Œuvres qui ont choqué ou été censurées : <i>Lady Chatterley's Lover</i> (procès de 1960), le pop art d'Andy Warhol (qu'est-ce que l'art ?), les débats sur les statues confédérées, la « cancel culture », les livres retirés des bibliothèques scolaires aux États-Unis, la place de l'IA dans la création.</p>
<h3>Axe 3 — L'art du débat</h3>
<p>Rhétorique et discours : discours célèbres (Martin Luther King, <i>I Have a Dream</i>, 1963 ; Lincoln, <i>Gettysburg Address</i>), débats présidentiels, tradition du débat parlementaire britannique, théâtre (Shakespeare), procès et jurys (<i>12 Angry Men</i>), satire (Swift, <i>A Modest Proposal</i>).</p>
${box("Notions clés en anglais", "<i>to raise awareness</i>, <i>to challenge the status quo</i>, <i>censorship</i>, <i>freedom of speech</i>, <i>provocative</i>, <i>to spark a debate</i>, <i>rhetoric</i>, <i>to convince / to persuade</i>.", "tip")}
<h3>Œuvres du programme liées</h3>
<p><i>12 Angry Men</i> (Lumet), <i>Much Ado About Nothing</i> (Branagh), <i>The Handmaid's Tale</i> (Atwood), <i>The Caretaker</i> (Pinter).</p>`,
  quiz: [
    ["Quel axe correspond à l'étude des discours de Martin Luther King ?", ["L'art du débat", "Art et contestation uniquement", "Mise en scène de soi", "Ancrage et héritage"], "La rhétorique et les discours relèvent de l'axe « L'art du débat »."],
    ["<i>Strange Fruit</i>, chanté par Billie Holiday, dénonce…", ["les lynchages dans le Sud des États-Unis", "la guerre du Vietnam", "la Grande Dépression", "l'apartheid"], "C'est une protest song majeure de 1939."],
    ["« To raise awareness » signifie…", ["sensibiliser", "lever la main", "réveiller quelqu'un", "faire monter les prix"], "Expression clé pour parler de l'art engagé."],
    ["<i>A Modest Proposal</i> de Jonathan Swift est…", ["une satire", "un roman d'amour", "un discours présidentiel", "un poème romantique"], "Swift propose ironiquement de manger les enfants pauvres pour dénoncer la misère irlandaise."],
    ["« Censorship » se traduit par…", ["censure", "sens", "recensement", "sensibilité"], "La censure est au cœur de l'axe « L'art qui fait débat »."],
  ],
  exos: [
    { id: "ll1a", niv: 2, titre: "Essay (écrit argumentatif)", q: "<p>In about 200 words: <b>Can art change society?</b></p>", c: "<p><b>Plan possible :</b></p><ol><li><b>Art raises awareness</b>: protest songs and photographs (Dorothea Lange's <i>Migrant Mother</i>) made people aware of injustice; Banksy's works go viral.</li><li><b>Art can inspire action</b>: songs became anthems of the civil rights movement; novels like <i>Uncle Tom's Cabin</i> fuelled the abolitionist debate.</li><li><b>But its power is limited</b>: art can be ignored, censored or turned into a commodity; real change requires political action.</li></ol><p><b>Useful phrases</b>: <i>To some extent…</i>, <i>It could be argued that…</i>, <i>All in all, art may not change society on its own, but it can pave the way for change.</i></p>" },
    { id: "ll1b", niv: 1, titre: "Vocabulaire en contexte", q: "<p>Translate into English: 1. Cette œuvre a suscité un débat. 2. L'artiste dénonce le racisme. 3. Le livre a été censuré. 4. La liberté d'expression.</p>", c: "<p>1. <i>This work sparked a debate.</i> 2. <i>The artist denounces / condemns racism.</i> 3. <i>The book was censored / banned.</i> 4. <i>Freedom of speech / of expression.</i></p>" },
    { id: "ll1c", niv: 3, titre: "Analyse d'image", q: "<p>Describe and analyse a protest artwork of your choice (painting, street art, photograph) in English: what does it show, what does it denounce, how does it try to move the viewer?</p>", c: "<p><b>Structure attendue :</b></p><ol><li><b>Present</b> it: artist, date, medium, context (<i>This mural by Banksy, painted in 2005 on the West Bank barrier…</i>).</li><li><b>Describe</b>: foreground / background, colours, characters (<i>In the foreground, we can see…</i>).</li><li><b>Analyse</b>: symbols, contrast, irony, message (<i>The contrast between… emphasises…</i>).</li><li><b>Interpret</b>: link to the axis « Art et contestation » and your own opinion.</li></ol>" },
  ] }),
theme({ court: "Expression et construction de soi", titre: "Expression et construction de soi",
  fiche: `
<p>Cette thématique explore la façon dont l'individu exprime ses émotions, se met en scène et se construit au fil des expériences.</p>
<h3>Axe 1 — L'expression des émotions</h3>
<p>La poésie romantique (Wordsworth : « the spontaneous overflow of powerful feelings »), le journal intime, les lettres, la musique (blues, soul), le cinéma (le silence et la musique dans <i>The Piano</i>), les réseaux sociaux et l'exposition de soi.</p>
<h3>Axe 2 — Mise en scène de soi</h3>
<p>Le dandy (Oscar Wilde), l'autoportrait et le selfie, l'autobiographie et l'autofiction (<i>Boyhood</i> de Coetzee, écrit à la troisième personne), le théâtre et le masque (Shakespeare : « All the world's a stage »), les identités en ligne, le jeu de rôles social dans <i>Pride and Prejudice</i>.</p>
<h3>Axe 3 — Initiation, apprentissage</h3>
<p>Le <b>Bildungsroman</b> (roman d'apprentissage) : <i>Great Expectations</i> (Dickens), <i>The Catcher in the Rye</i> (Salinger), <i>Jane Eyre</i> (Brontë) ; le passage à l'âge adulte (<i>coming of age</i>) ; l'école ; le premier amour ; la découverte de l'injustice (<i>To Kill a Mockingbird</i>).</p>
${box("Notions clés en anglais", "<i>coming-of-age story</i>, <i>self-portrait</i>, <i>to come to terms with</i>, <i>identity</i>, <i>to grow up</i>, <i>self-fulfilment</i>, <i>to fit in</i>, <i>peer pressure</i>, <i>a rite of passage</i>.", "tip")}
<h3>Œuvres du programme liées</h3>
<p><i>Pride and Prejudice</i> (Austen), <i>Boyhood</i> (Coetzee), <i>The God of Small Things</i> (Roy), <i>Moon Palace</i> (Auster), <i>The Piano</i> (Campion).</p>`,
  quiz: [
    ["Un Bildungsroman est…", ["un roman d'apprentissage", "un roman policier", "une pièce de théâtre", "un recueil de poèmes"], "Il suit la formation d'un jeune héros jusqu'à l'âge adulte."],
    ["« Coming of age » signifie…", ["le passage à l'âge adulte", "le vieillissement", "l'arrivée à l'heure", "l'âge de la retraite"], "Expression clé de l'axe « Initiation, apprentissage »."],
    ["« All the world's a stage » est de…", ["Shakespeare", "Wordsworth", "Wilde", "Austen"], "<i>As You Like It</i> : le monde est un théâtre."],
    ["« To fit in » signifie…", ["s'intégrer, trouver sa place", "être en forme", "remplir un formulaire", "se battre"], "Très utile pour parler d'identité."],
    ["<i>Boyhood</i> de Coetzee est raconté…", ["à la troisième personne, au présent", "à la première personne, au passé", "sous forme de lettres", "en vers"], "Un récit autobiographique qui prend ses distances avec le « je »."],
  ],
  exos: [
    { id: "ll2a", niv: 2, titre: "Essay (écrit argumentatif)", q: "<p>In about 200 words: <b>Do social media help young people build their identity?</b></p>", c: "<ol><li><b>Yes</b>: they allow self-expression, creativity, finding communities of people who share the same interests, especially for those who feel isolated.</li><li><b>But</b>: constant comparison, peer pressure, the pressure to stage a perfect self (curated identity), cyberbullying.</li><li><b>Conclusion</b>: they can be a tool for self-construction if used critically.</li></ol><p><b>Useful phrases</b>: <i>On the one hand… on the other hand…</i>, <i>This raises the question of…</i>, <i>As far as I'm concerned…</i></p>" },
    { id: "ll2b", niv: 1, titre: "Vocabulaire en contexte", q: "<p>Translate: 1. Elle a eu du mal à trouver sa place. 2. Un roman d'apprentissage. 3. Il a fini par accepter son passé. 4. La pression du groupe.</p>", c: "<p>1. <i>She found it hard to fit in.</i> 2. <i>A coming-of-age novel / a Bildungsroman.</i> 3. <i>He eventually came to terms with his past.</i> 4. <i>Peer pressure.</i></p>" },
    { id: "ll2c", niv: 3, titre: "Analyse littéraire", q: "<p>Choose a novel or film you studied. In English, explain how the main character changes from the beginning to the end, and what triggers this change.</p>", c: "<p><b>Exemple avec <i>Pride and Prejudice</i> :</b> at the beginning, Elizabeth Bennet judges Mr Darcy proud and arrogant after the first ball. Darcy's letter, which reveals the truth about Wickham, is the turning point: she realises that her own prejudice blinded her (<i>« Till this moment I never knew myself »</i>). By the end, she has learnt to question her first impressions. <b>Structure :</b> initial situation → turning point → evolution → what the character (and the reader) learns.</p>" },
  ] }),
theme({ court: "Voyages, territoires, frontières", titre: "Voyages, territoires, frontières",
  fiche: `
<p>Cette thématique étudie les déplacements, le lien à un territoire et les frontières, réelles ou symboliques.</p>
<h3>Axe 1 — Exploration et aventure</h3>
<p>Le récit de voyage, la conquête de l'Ouest et la <b>Frontier</b> américaine, les explorateurs, le road trip (Kerouac, <i>On the Road</i>), la conquête spatiale, le voyage intérieur (<i>Moon Palace</i>).</p>
<h3>Axe 2 — Ancrage et héritage</h3>
<p>Le sentiment d'appartenance à un lieu (<i>sense of place</i>), le Sud des États-Unis, les peuples autochtones et leur terre (les Osage dans <i>Killers of the Flower Moon</i>), les héritages coloniaux (Inde, Afrique du Sud), la mémoire, les racines.</p>
<h3>Axe 3 — Migration et exil</h3>
<p>Ellis Island, l'émigration irlandaise (<i>Brooklyn</i>), l'immigration aux États-Unis et au Royaume-Uni (génération Windrush), la diaspora (<i>Americanah</i>), le déracinement, le mal du pays (<i>homesickness</i>), les murs et les frontières (frontière États-Unis–Mexique).</p>
${box("Notions clés en anglais", "<i>to settle</i>, <i>uprooted</i>, <i>homesick</i>, <i>to cross the border</i>, <i>the promised land</i>, <i>the American Dream</i>, <i>belonging</i>, <i>displacement</i>, <i>heritage</i>, <i>wilderness</i>.", "tip")}
<h3>Œuvres du programme liées</h3>
<p><i>Brooklyn</i> (Tóibín), <i>Americanah</i> (Adichie), <i>Moon Palace</i> (Auster), <i>Killers of the Flower Moon</i> (Scorsese), <i>The Piano</i> (Campion), <i>The Caretaker</i> (Pinter : le territoire d'une pièce).</p>`,
  quiz: [
    ["« Homesick » signifie…", ["qui a le mal du pays", "malade à la maison", "sans abri", "casanier"], "Le mal du pays est central dans <i>Brooklyn</i>."],
    ["La « Frontier » américaine désigne…", ["la limite mouvante de la colonisation vers l'Ouest", "la frontière avec le Canada", "une frontière fiscale", "la côte Est"], "Elle est au cœur du mythe de l'Ouest."],
    ["« Uprooted » signifie…", ["déraciné", "enraciné", "émerveillé", "révolté"], "Utile pour parler d'exil."],
    ["La génération Windrush désigne…", ["des migrants caribéens arrivés au Royaume-Uni après 1948", "des pionniers américains", "des réfugiés irlandais de 1850", "des astronautes"], "Du nom du navire <i>Empire Windrush</i>."],
    ["L'axe « Ancrage et héritage » porte sur…", ["le lien à un territoire et la transmission", "les voyages spatiaux uniquement", "les débats politiques", "l'expression des émotions"], "Racines, mémoire, sentiment d'appartenance."],
  ],
  exos: [
    { id: "ll3a", niv: 2, titre: "Essay (écrit argumentatif)", q: "<p>In about 200 words: <b>Is it possible to feel at home in two countries?</b></p>", c: "<ol><li><b>Migration often creates a feeling of being torn</b>: homesickness, cultural differences, the sense of not fully belonging anywhere (Eilis in <i>Brooklyn</i>, Ifemelu in <i>Americanah</i>).</li><li><b>But a double identity can be enriching</b>: bilingualism, a wider perspective, diaspora communities create a « home away from home ».</li><li><b>Home is not only a place</b>: it is made of people, language and memories.</li></ol>" },
    { id: "ll3b", niv: 1, titre: "Vocabulaire en contexte", q: "<p>Translate: 1. Ils se sont installés à New York. 2. Elle avait le mal du pays. 3. Franchir la frontière. 4. Le sentiment d'appartenance.</p>", c: "<p>1. <i>They settled in New York.</i> 2. <i>She was homesick.</i> 3. <i>To cross the border.</i> 4. <i>A sense of belonging.</i></p>" },
    { id: "ll3c", niv: 3, titre: "Comparer deux documents", q: "<p>Write a paragraph comparing two works about migration you studied (for example <i>Brooklyn</i> and <i>Americanah</i>): what do the main characters have in common, and how do they differ?</p>", c: "<p><b>Exemple :</b> <i>Both Eilis and Ifemelu leave their home countries to study and work abroad, and both experience loneliness and the shock of a new culture. However, whereas Eilis, in the 1950s, struggles mainly with homesickness and family duty, Ifemelu discovers that she is « black » in America and writes about race in her blog. In the end, both have to choose between two lives…</i></p><p>Utilise <i>both… / whereas / unlike / similarly / however</i>.</p>" },
  ] }),
theme({ court: "Œuvres 2026-2028", titre: "Les œuvres du programme limitatif (2026-2027 et 2027-2028)",
  fiche: `
<p>Ton professeur choisit <b>trois œuvres</b> dans cette liste, une par thématique, dont au moins un film. Elles sont évaluées à l'<b>oral</b>. Révise en priorité celles étudiées en classe.</p>
<h3>Romans et pièce de théâtre</h3>
${T(["Œuvre", "En bref", "Pistes de thématiques"], [
  ["<b>Americanah</b><br>Chimamanda Ngozi Adichie, 2013", "Ifemelu quitte le Nigeria pour étudier aux États-Unis ; elle y découvre la question raciale et tient un blog. Son amour de jeunesse, Obinze, tente sa chance à Londres. Elle finit par rentrer à Lagos.", "Migration et exil ; construction de soi"],
  ["<b>The Handmaid's Tale</b><br>Margaret Atwood, 1985", "Dans la république théocratique de Gilead, Offred est une « servante » contrainte de porter des enfants pour un Commandant. Elle raconte son histoire en secret.", "Art et contestation ; dystopie ; mise en scène de soi"],
  ["<b>Pride and Prejudice</b><br>Jane Austen, 1813", "Elizabeth Bennet et Mr Darcy se jugent mal au premier abord. Le roman explore le mariage, les classes sociales et l'erreur des premières impressions.", "Construction de soi ; l'art du débat (dialogues)"],
  ["<b>Moon Palace</b><br>Paul Auster, 1989", "Marco Stanley Fogg, jeune New-Yorkais, sombre dans la misère puis entreprend une quête de ses origines qui le mène vers l'Ouest américain.", "Exploration ; initiation ; héritage"],
  ["<b>Boyhood: Scenes from Provincial Life</b><br>J.M. Coetzee, 1997", "Récit autobiographique de l'enfance de l'auteur en Afrique du Sud sous l'apartheid, écrit à la troisième personne et au présent.", "Construction de soi ; ancrage et héritage"],
  ["<b>The Caretaker</b><br>Harold Pinter, 1960", "Un vagabond, Davies, est hébergé par Aston dans une pièce encombrée ; les deux frères, Aston et Mick, et Davies se disputent la place et le pouvoir.", "Territoire ; l'art du débat (langage et menace)"],
  ["<b>The God of Small Things</b><br>Arundhati Roy, 1997", "Au Kerala, les jumeaux Estha et Rahel vivent un drame familial lié aux « lois de l'amour » et au système des castes.", "Expression des émotions ; héritage ; frontières sociales"],
  ["<b>Brooklyn</b><br>Colm Tóibín, 2009", "Dans les années 1950, Eilis Lacey quitte l'Irlande pour Brooklyn. Elle affronte le mal du pays, construit une nouvelle vie, puis doit choisir entre deux pays.", "Migration et exil ; initiation"]])}
<h3>Films</h3>
${T(["Film", "En bref", "Pistes de thématiques"], [
  ["<b>12 Angry Men</b><br>Sidney Lumet, 1957", "Douze jurés délibèrent sur le sort d'un jeune accusé de meurtre ; un seul doute au départ et finit par convaincre les autres.", "L'art du débat ; justice ; préjugés"],
  ["<b>Much Ado About Nothing</b><br>Kenneth Branagh, 1993", "Adaptation de la comédie de Shakespeare : la « guerre joyeuse » des mots entre Beatrice et Benedick, et une tromperie qui brise l'union de Claudio et Hero.", "L'art du débat ; mise en scène de soi"],
  ["<b>The Piano</b><br>Jane Campion, 1993", "Ada, une Écossaise muette, part en Nouvelle-Zélande avec sa fille et son piano pour un mariage arrangé. La musique devient sa voix.", "Expression des émotions ; exil"],
  ["<b>Killers of the Flower Moon</b><br>Martin Scorsese, 2023", "Dans l'Oklahoma des années 1920, des membres de la nation Osage, enrichis par le pétrole, sont assassinés pour leur fortune.", "Ancrage et héritage ; territoires"]])}
${box("Pour l'oral", "Pour chaque œuvre étudiée, prépare : le résumé en 5 phrases, 3 thèmes, 2 passages ou scènes clés, et le lien avec une thématique et un axe. Entraîne-toi à en parler 5 minutes en anglais.", "tip")}`,
  quiz: [
    ["Qui a écrit <i>Americanah</i> ?", ["Chimamanda Ngozi Adichie", "Arundhati Roy", "Margaret Atwood", "Toni Morrison"], "Roman de 2013 sur une Nigériane aux États-Unis."],
    ["<i>12 Angry Men</i> se déroule…", ["dans une salle de délibération d'un jury", "dans un tribunal anglais", "dans une prison", "sur un bateau"], "Presque tout le film se passe dans une seule pièce."],
    ["Dans <i>The Piano</i>, Ada…", ["est muette et s'exprime par la musique", "est une pianiste célèbre", "est une migrante irlandaise", "est juge"], "Son piano est sa voix."],
    ["<i>Brooklyn</i> raconte l'histoire d'une jeune…", ["Irlandaise émigrée à New York", "Indienne au Kerala", "Nigériane à Londres", "Anglaise à Bath"], "Eilis Lacey, dans les années 1950."],
    ["Combien d'œuvres ton professeur choisit-il dans la liste ?", ["Trois, dont au moins un film", "Toutes", "Une seule", "Deux romans"], "Une par thématique, dont un film."],
    ["<i>Killers of the Flower Moon</i> porte sur…", ["les meurtres d'Osage dans les années 1920", "la conquête spatiale", "la guerre de Sécession", "l'immigration italienne"], "Film de Scorsese sorti en 2023."],
  ],
  exos: [
    { id: "ll4a", niv: 2, titre: "Présenter une œuvre à l'oral", q: "<p>Choose one work from the list. In English, prepare a 2-minute presentation: author, date, plot in a few sentences, two main themes, link to one thematic axis.</p>", c: "<p><b>Modèle avec <i>12 Angry Men</i> :</b> <i>12 Angry Men is a 1957 film directed by Sidney Lumet. Twelve jurors must decide whether a young man is guilty of killing his father. At first, eleven vote guilty; only Juror 8 has a reasonable doubt. Through argument and patience, he gradually convinces the others. The film deals with justice and prejudice, and it perfectly illustrates the axis « L'art du débat », since the whole plot is a debate in which reason overcomes passion and prejudice.</i></p>" },
    { id: "ll4b", niv: 3, titre: "Relier une œuvre à un axe", q: "<p>Explain in English how <i>The Handmaid's Tale</i> can be linked to the axis « Art et contestation ».</p>", c: "<p><i>Atwood's dystopia denounces the control of women's bodies and the use of religion to justify oppression. By imagining Gilead, she warns readers about real threats to women's rights. Offred's secret narrative is itself an act of resistance: telling her story is a way of refusing silence. The novel has become a symbol: activists have worn the red handmaid costume in protests.</i></p>" },
  ] }),
  ],
  generes: [
    { titre: "Traduction (anglais → français)", niv: 2, ch: null, gen() {
        const [en, frt, tip] = pick(TRAD);
        return { q: `<p>Traduis en français :</p><blockquote>${en}</blockquote>`, c: `<p><b>Proposition :</b> ${frt}</p><p><b>Point de traduction :</b> ${tip}</p>` };
    } },
    { titre: "Mots de liaison pour la synthèse", niv: 1, ch: null, gen() {
        const s = shuf(LINK).slice(0, 4);
        return { q: `<p>Donne le sens de ces mots de liaison et utilise-les dans une phrase sur un dossier de synthèse :</p><ul>${s.map(x => `<li>${x[0]}</li>`).join("")}</ul>`, c: `<ul>${s.map(x => `<li><b>${x[0]}</b> : ${x[1]}</li>`).join("")}</ul><p>Exemple : <i>Whereas document A celebrates migration as a new beginning, document B focuses on the pain of leaving. However, both show that…</i></p>` };
    } },
    { titre: "Série de traductions", niv: 3, ch: null, gen() {
        const s = shuf(TRAD).slice(0, 3);
        return { q: `<p>Traduis ces trois phrases en français :</p><ol>${s.map(x => `<li>${x[0]}</li>`).join("")}</ol>`, c: `<ol>${s.map(x => `<li>${x[1]}<br><small>${x[2]}</small></li>`).join("")}</ol>` };
    } },
  ],
  methode: [
    { titre: "La synthèse (16 points)", html: `
<p>Tu reçois un dossier de 3 documents et 2 ou 3 questions qui guident ta synthèse. Tu dois produire <b>un texte unique et organisé</b> d'environ 500 mots, en anglais, qui <b>met les documents en relation</b>.</p>
<ol><li><b>Lire les questions d'abord</b> : elles donnent le fil conducteur.</li>
<li><b>Analyser chaque document</b> : nature, auteur, date, idée principale, procédés. Pour l'image : composition, couleurs, symboles.</li>
<li><b>Faire un tableau de comparaison</b> : pour chaque question, ce que disent les documents (points communs et différences).</li>
<li><b>Rédiger</b> : une introduction qui présente le dossier et la problématique, un développement organisé <b>par idées</b> (pas document par document), une conclusion.</li></ol>
${box("À ne pas faire", "Résumer les documents l'un après l'autre, recopier des phrases entières, donner son avis partout. La synthèse confronte les documents ; ton opinion n'a sa place que si la consigne demande un écrit argumentatif.", "warn")}
${box("Phrases utiles", "<i>The three documents deal with…</i> / <i>Document A, an extract from a novel by…, published in…</i> / <i>Both documents show that…</i> / <i>Unlike document B, document C…</i> / <i>This echoes…</i> / <i>To conclude, the dossier highlights…</i>", "tip")}` },
    { titre: "La traduction (4 points)", html: `
<p>Tu traduis en français un passage d'un des documents. On évalue la <b>fidélité au sens</b> et la <b>correction du français</b>.</p>
<ul><li>Lis tout le passage avant de traduire, et repère les temps.</li><li>Ne traduis pas mot à mot : cherche ce qu'un écrivain français écrirait.</li><li>Garde le registre (familier, soutenu) et la ponctuation des dialogues à la française.</li><li>Relis ton français à voix basse : il doit sonner naturel.</li></ul>
${T(["Anglais", "Français"], [["Prétérit narratif (<i>she walked</i>)", "Passé simple ou imparfait, selon le texte (« elle marcha / marchait »)"], ["Passif (<i>he was told</i>)", "« on lui dit »"], ["<i>used to</i> + verbe", "imparfait d'habitude"], ["<i>walk out, run across</i>", "chassé-croisé : « sortir à pied », « traverser en courant »"], ["<i>the more…, the more…</i>", "« plus…, plus… »"]])}
<p>Entraîne-toi avec les exercices « Traduction » de l'onglet Exercices : ils sont tirés au hasard.</p>` },
    { titre: "L'oral (20 minutes)", html: `
<p>Tu présentes un <b>dossier personnel</b> de documents en lien avec les thématiques (dont des extraits des œuvres étudiées), puis tu échanges avec l'examinateur.</p>
<ol><li><b>Présentation (10 min environ)</b> : explique ton dossier, sa logique et ce que les documents montrent ensemble. Ne lis pas tes notes.</li>
<li><b>Entretien (10 min environ)</b> : l'examinateur te pose des questions sur les documents, les œuvres et ton point de vue.</li></ol>
${box("Conseils", "Prépare une problématique en anglais pour ton dossier, entraîne-toi à voix haute avec un chronomètre, prépare des phrases pour gagner du temps (<i>That's an interesting question…</i>, <i>What I mean is…</i>).", "tip")}` },
    { titre: "Analyser une image ou une scène de film", html: `<ol><li><b>Present</b> : <i>This is a photograph / painting / poster / film still by…, taken in…</i></li><li><b>Describe</b> : <i>In the foreground / background / on the left / at the top…</i></li><li><b>Analyse</b> : <i>close-up, long shot, high angle, low angle, lighting, contrast, colours…</i></li><li><b>Interpret</b> : <i>The artist seems to suggest that… This may symbolise…</i></li></ol>` },
  ],
  sujets: [
    { titre: "Voyages, territoires, frontières", type: "Synthèse + traduction", q: `
<p><b>Thématique :</b> « Voyages, territoires, frontières ». Les documents ci-dessous ont été écrits pour l'entraînement.</p>
<p><b>Document A — Extrait de roman</b></p>
<blockquote>The ship had left Cobh at dawn, and by noon the coast of Ireland was no more than a grey line. Nora stood at the rail, her hands numb with cold, and tried to remember her mother's face as it had looked on the quay. She had promised herself she would not cry. Around her, families were already speaking of jobs in factories, of cousins in Boston, of streets where, they said, nobody would ask who your father was. Nora said nothing. She had a letter in her pocket, an address in Brooklyn, and a fear she could not name.</blockquote>
<p><b>Document B — Article de presse</b></p>
<blockquote>For many second-generation migrants, « home » is a complicated word. Born in Manchester to Nigerian parents, Tolu, 24, says she feels « too Nigerian for England and too English for Lagos ». Yet she refuses to see this as a loss. « I belong to both places, » she explains. « My identity is not a border, it's a bridge. » Sociologists note that diaspora communities increasingly build hybrid identities, mixing languages, food and music.</blockquote>
<p><b>Document C — Description d'une photographie</b></p>
<blockquote>A black-and-white photograph shows a young man at a border fence at sunset. In the foreground, his hand rests on the wire mesh; behind the fence, a city's lights glow in the distance. His face is turned away from the camera.</blockquote>
<p><b>Partie 1. Synthèse (16 points) :</b> En prenant appui sur les documents, répondez en anglais (environ 500 mots) : 1. How do the documents present the experience of leaving one's home? 2. To what extent can migrants build a new sense of belonging?</p>
<p><b>Partie 2. Traduction (4 points) :</b> Traduisez en français le document A, de « Nora stood at the rail » à « She had promised herself she would not cry. »</p>`,
      c: `<p><b>Introduction :</b> <i>The dossier deals with migration: an extract from a novel about an Irish girl crossing the Atlantic (A), a press article about second-generation migrants in England (B) and a photograph of a young man at a border (C). It raises the question of how migrants experience departure and whether they can feel at home somewhere new.</i></p>
<p><b>Q1 — Leaving home is painful and uncertain.</b> A : séparation (le visage de la mère sur le quai), le froid, la peur sans nom, l'effort pour ne pas pleurer. C : la frontière comme obstacle, le visage détourné, la ville inaccessible. Mais aussi l'espoir : dans A, d'autres familles rêvent d'emplois et d'une liberté nouvelle (« nobody would ask who your father was ») ; dans C, les lumières de la ville symbolisent la promesse.</p>
<p><b>Q2 — A new belonging is possible but complex.</b> B : se sentir entre deux cultures (« too Nigerian for England… ») mais choisir d'appartenir aux deux (« not a border, it's a bridge ») ; identités hybrides. A : l'adresse à Brooklyn et la diaspora (cousins à Boston) montrent des réseaux d'accueil. Limite : C rappelle que les frontières physiques et légales empêchent parfois toute appartenance.</p>
<p><b>Conclusion :</b> <i>All three documents show that migration is both a loss and a new beginning; belonging is not given but built over time.</i></p>
<p><b>Traduction proposée :</b> Nora se tenait au bastingage, les mains engourdies par le froid, et essayait de se rappeler le visage de sa mère tel qu'il lui était apparu sur le quai. Elle s'était promis de ne pas pleurer.</p>` },
    { titre: "Arts et débats d'idées", type: "Synthèse + traduction", q: `
<p><b>Thématique :</b> « Arts et débats d'idées ». Documents écrits pour l'entraînement.</p>
<p><b>Document A — Extrait de pièce de théâtre</b></p>
<blockquote>MARGARET. You call it vandalism. I call it a conversation.<br>COUNCILLOR. A conversation? You painted a wall that does not belong to you.<br>MARGARET. And who does the city belong to? To the people who own the walls, or to the people who walk past them every day?<br>COUNCILLOR. To the law, Miss Hayes.<br>MARGARET. Then the law has nothing to say. My painting does.</blockquote>
<p><b>Document B — Article de presse</b></p>
<blockquote>When a mural criticising the closure of the local hospital appeared overnight on a council building, the town was divided. Some residents called for it to be removed immediately; others organised a petition to protect it. « Art should make people uncomfortable, » argued a local teacher. The council finally voted to keep the mural for one year, and visitors now come from all over the region to see it.</blockquote>
<p><b>Document C — Description d'une affiche</b></p>
<blockquote>A poster shows a raised fist holding a paintbrush instead of a weapon. Above it, in capital letters: « ART IS NOT A CRIME ».</blockquote>
<p><b>Partie 1. Synthèse (16 points) :</b> 1. How do the documents present art as a form of protest? 2. Why does such art spark debate?</p>
<p><b>Partie 2. Traduction (4 points) :</b> Traduisez le document B, de « Some residents » à « to protect it ».</p>`,
      c: `<p><b>Q1 — Art as protest :</b> A : Margaret présente son œuvre comme une prise de parole publique (« a conversation »), qui revendique l'espace commun. B : la fresque dénonce la fermeture de l'hôpital, elle donne une voix aux habitants. C : le pinceau remplace l'arme, l'art est une forme de lutte non violente.</p>
<p><b>Q2 — Why it sparks debate :</b> question de la légalité (A : « To the law », vandalisme), de la propriété de l'espace public, du rôle de l'art (B : « make people uncomfortable »). Le débat divise la ville mais aboutit à un compromis démocratique (vote, pétition) et donne de la visibilité à la cause.</p>
<p><b>Conclusion :</b> <i>The dossier shows that protest art blurs the line between creation and law-breaking, and that the debate it provokes is part of its message.</i></p>
<p><b>Traduction proposée :</b> Certains habitants ont exigé qu'elle soit retirée immédiatement ; d'autres ont lancé une pétition pour la protéger.</p>` },
  ],
  vocabSens: ["Anglais → Français", "Français → Anglais"],
  vocab: [
    { theme: "Arts et débats d'idées", mots: [["a masterpiece", "un chef-d'œuvre"], ["a mural", "une fresque murale"], ["to raise awareness", "sensibiliser"], ["to denounce", "dénoncer"], ["censorship", "la censure"], ["to ban", "interdire"], ["freedom of speech", "la liberté d'expression"], ["a protest song", "une chanson engagée"], ["to spark a debate", "susciter un débat"], ["controversial", "controversé"], ["to challenge", "remettre en question"], ["the status quo", "l'ordre établi"], ["a speech", "un discours"], ["to convince", "convaincre"], ["to persuade", "persuader"], ["rhetoric", "la rhétorique"], ["a jury", "un jury"], ["a verdict", "un verdict"], ["reasonable doubt", "le doute raisonnable"], ["satire", "la satire"], ["a playwright", "un dramaturge"], ["a stage", "une scène (de théâtre)"], ["to stand up for", "défendre"], ["a grievance", "un grief"], ["an outcry", "un tollé"]] },
    { theme: "Construction de soi", mots: [["to grow up", "grandir"], ["coming of age", "le passage à l'âge adulte"], ["a turning point", "un tournant"], ["to fit in", "s'intégrer"], ["peer pressure", "la pression du groupe"], ["self-esteem", "l'estime de soi"], ["to come to terms with", "accepter, se faire à"], ["a self-portrait", "un autoportrait"], ["a diary", "un journal intime"], ["to stage oneself", "se mettre en scène"], ["a mask", "un masque"], ["shy", "timide"], ["to overcome", "surmonter"], ["a rite of passage", "un rite de passage"], ["upbringing", "l'éducation (reçue)"], ["to long for", "désirer ardemment"], ["grief", "le chagrin, le deuil"], ["to blush", "rougir"], ["prejudice", "le préjugé"], ["pride", "la fierté, l'orgueil"], ["to be ashamed of", "avoir honte de"], ["loneliness", "la solitude"], ["a crush", "un béguin"], ["to break free", "se libérer"]] },
    { theme: "Voyages et migrations", mots: [["to settle", "s'installer"], ["homesick", "qui a le mal du pays"], ["uprooted", "déraciné"], ["a border", "une frontière"], ["to cross", "traverser, franchir"], ["a migrant", "un migrant"], ["an asylum seeker", "un demandeur d'asile"], ["a refugee", "un réfugié"], ["exile", "l'exil"], ["to belong", "appartenir"], ["a sense of belonging", "un sentiment d'appartenance"], ["heritage", "l'héritage, le patrimoine"], ["roots", "les racines"], ["the wilderness", "la nature sauvage"], ["a journey", "un voyage"], ["a voyage", "une traversée en mer"], ["the promised land", "la terre promise"], ["the American Dream", "le rêve américain"], ["a newcomer", "un nouvel arrivant"], ["a landmark", "un point de repère, un lieu emblématique"], ["to leave behind", "laisser derrière soi"], ["a quay", "un quai"], ["diaspora", "la diaspora"], ["a wall", "un mur"]] },
    { theme: "Synthèse et analyse", mots: [["to deal with", "traiter de"], ["to highlight", "souligner, mettre en évidence"], ["to echo", "faire écho à"], ["to contrast with", "contraster avec"], ["whereas", "alors que"], ["however", "cependant"], ["moreover", "de plus"], ["therefore", "donc, par conséquent"], ["although", "bien que"], ["unlike", "contrairement à"], ["likewise", "de même"], ["an extract", "un extrait"], ["the narrator", "le narrateur"], ["the plot", "l'intrigue"], ["the setting", "le cadre"], ["a close-up", "un gros plan"], ["a long shot", "un plan d'ensemble"], ["in the foreground", "au premier plan"], ["in the background", "à l'arrière-plan"], ["a turning point", "un tournant de l'intrigue"], ["to depict", "représenter, dépeindre"], ["the tone", "le ton"], ["irony", "l'ironie"], ["to sum up", "pour résumer"]] },
  ],
});
}
