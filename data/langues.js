/* ==========================================================================
   LANGUES VIVANTES — Anglais (LVA) et espagnol (LVB), contrôle continu
   Programme du cycle terminal : « Gestes fondateurs et mondes en mouvement »,
   8 axes communs aux langues vivantes.
   ========================================================================== */
{
const { R, pick, shuf, box, T } = OUT;

const AXES = ["Identités et échanges", "Espace privé et espace public", "Art et pouvoir", "Citoyenneté et mondes virtuels", "Fictions et réalités", "Innovations scientifiques et responsabilité", "Diversité et inclusion", "Territoire et mémoire"];
const PROB = [
  "Comment les échanges (migrations, mondialisation, langues) transforment-ils les identités ?",
  "Où passe la frontière entre vie privée et vie publique, et comment évolue-t-elle ?",
  "L'art sert-il le pouvoir, ou permet-il de le contester ?",
  "Comment le numérique transforme-t-il la participation citoyenne et l'information ?",
  "Comment la fiction éclaire-t-elle ou déforme-t-elle la réalité ?",
  "Le progrès scientifique est-il toujours un progrès pour l'humanité ?",
  "Comment les sociétés font-elles une place à la diversité et luttent-elles contre les discriminations ?",
  "Comment un territoire garde-t-il la mémoire de son histoire, y compris de ses blessures ?",
];
function axe(i, exemples, expressions, quiz, exo) {
  return { court: AXES[i], titre: `Axe ${i + 1} — ${AXES[i]}`,
    fiche: `<p><b>Problématique :</b> ${PROB[i]}</p><h3>Exemples à connaître</h3><ul>${exemples.map(e => `<li>${e}</li>`).join("")}</ul>${box("Expressions clés", expressions, "tip")}`,
    quiz, exos: exo ? [exo] : [] };
}

/* ======================================================= ANGLAIS (LVA) */
const EN_TRANS = [
  ["Il vit à Londres depuis trois ans.", "He has been living in London for three years.", "Action commencée dans le passé et qui dure : present perfect (+ be + V-ing) avec <i>for</i> (durée)."],
  ["Si j'avais plus de temps, je voyagerais.", "If I had more time, I would travel.", "Conditionnel présent : <i>if</i> + prétérit, <i>would</i> + verbe."],
  ["Elle a été élue en 2020.", "She was elected in 2020.", "Date précise : prétérit (ici passif)."],
  ["On m'a dit de ne pas venir.", "I was told not to come.", "« On » + verbe → souvent un passif en anglais."],
  ["Il doit être fatigué, il a travaillé toute la nuit.", "He must be tired, he worked all night.", "<i>must</i> exprime une forte probabilité (déduction)."],
  ["Nous avions l'habitude de jouer dans ce parc.", "We used to play in this park.", "Habitude passée révolue : <i>used to</i>."],
  ["Plus on lit, plus on apprend.", "The more you read, the more you learn.", "<i>The more…, the more…</i>"],
  ["C'est la première fois que je vois ce film.", "It's the first time I have seen this film.", "<i>It's the first time</i> + present perfect."],
  ["Je préférerais que tu restes.", "I would rather you stayed.", "<i>would rather</i> + sujet + prétérit."],
  ["Les réseaux sociaux peuvent être dangereux pour les adolescents.", "Social media can be dangerous for teenagers.", "<i>can</i> pour une possibilité générale ; <i>social media</i> sans article."],
  ["Il est en train d'écrire un article sur le racisme.", "He is writing an article about racism.", "Action en cours : présent en be + V-ing."],
  ["Bien qu'il pleuve, ils manifestent.", "Although it is raining, they are demonstrating.", "<i>Although</i> + indicatif (pas de subjonctif en anglais)."],
];
const EN_GRAM = [
  ["Mets à la voix passive.", "People speak English all over the world.", "English is spoken all over the world.", "Passif : be (au temps du verbe actif) + participe passé."],
  ["Mets à la voix passive.", "The government built a new hospital last year.", "A new hospital was built (by the government) last year.", "Prétérit → <i>was / were</i> + participe passé."],
  ["Passe au discours indirect.", "She said: « I am tired. »", "She said (that) she was tired.", "Concordance des temps : présent → prétérit."],
  ["Passe au discours indirect.", "He asked: « Where do you live? »", "He asked me where I lived.", "Question indirecte : pas d'inversion, pas de <i>do</i>."],
  ["Complète avec <i>for</i> ou <i>since</i> : I have known her … 2015.", "", "I have known her since 2015.", "<i>since</i> + point de départ ; <i>for</i> + durée."],
  ["Complète avec <i>for</i> ou <i>since</i> : They have lived here … ten years.", "", "They have lived here for ten years.", "<i>for</i> + durée."],
  ["Mets le verbe au bon temps : Yesterday, I (see) a great documentary.", "", "Yesterday, I saw a great documentary.", "Moment passé révolu (<i>yesterday</i>) : prétérit."],
  ["Mets le verbe au bon temps : I (never / be) to the USA.", "", "I have never been to the USA.", "Expérience sans date précise : present perfect."],
  ["Fais une phrase au conditionnel : If she (study) harder, she (pass) the exam.", "", "If she studied harder, she would pass the exam.", "Hypothèse sur le présent : if + prétérit, would + base verbale."],
  ["Exprime un regret : (Je regrette de ne pas être venu.)", "", "I wish I had come.", "<i>I wish</i> + past perfect = regret sur le passé."],
  ["Choisis le modal : You … wear a helmet, it's compulsory. (must / might)", "", "You must wear a helmet, it's compulsory.", "<i>must</i> = obligation."],
  ["Mets au comparatif : This city is (big) than mine.", "", "This city is bigger than mine.", "Adjectif court : -er + than (doublement de la consonne)."],
  ["Mets au superlatif : It's the (interesting) book I've ever read.", "", "It's the most interesting book I've ever read.", "Adjectif long : the most + adjectif."],
  ["Transforme avec <i>used to</i> : When I was a child, I often played football.", "", "When I was a child, I used to play football.", "Habitude passée."],
];
MATIERES.push({
  cle: "lva", nom: "Anglais (LVA)", court: "Anglais",
  sous: "Langue vivante A · contrôle continu · coef. 6",
  intro: "Les 8 axes du programme avec des exemples du monde anglophone, la grammaire qui rapporte des points, du vocabulaire en cartes et des exercices tirés au hasard.",
  epreuve: `<p>L'anglais en LVA est évalué en <b>contrôle continu</b> (moyennes de Première et de Terminale, coefficient 6). Les évaluations portent sur les quatre activités : <b>compréhension de l'écrit</b>, <b>compréhension de l'oral</b>, <b>expression écrite</b> et <b>expression orale</b>.</p>
    <p>Le niveau visé en fin de Terminale est <b>B2</b> pour la LVA. Le programme s'organise autour de 8 axes, qui servent de thèmes aux documents et aux sujets d'expression.</p>`,
  chapitres: [
    axe(0, ["Ellis Island et l'immigration aux États-Unis ; <i>melting pot</i> ou <i>salad bowl</i>", "La génération Windrush au Royaume-Uni", "Le Brexit et la question de l'identité britannique", "L'anglais langue mondiale (<i>global English</i>)"], "<i>to emigrate / to immigrate, a newcomer, to fit in, a melting pot, cultural heritage, to be torn between two cultures</i>",
      [["« Melting pot » désigne…", ["un modèle d'intégration par fusion des cultures", "une recette de cuisine", "un quartier chinois", "une loi sur l'immigration"], "Contrairement au « salad bowl », où les cultures coexistent."], ["La génération Windrush est arrivée au Royaume-Uni depuis…", ["les Caraïbes", "l'Inde", "l'Irlande", "l'Australie"], "Du nom du navire arrivé en 1948."]],
      { id: "lva1", niv: 2, titre: "Expression écrite", q: "In about 150 words: <b>Is it possible to keep one's culture while adopting a new one?</b>", c: "<p><b>Pistes :</b> yes — bilingualism, diaspora communities, food, festivals ; but — pressure to fit in, loss of the mother tongue in the second generation, discrimination. Conclusion : identity is plural. <i>Useful : to some extent, on the one hand… on the other hand, all in all.</i></p>" }),
    axe(1, ["La vie privée et les réseaux sociaux ; la surveillance (Orwell, <i>1984</i> : « Big Brother is watching you »)", "Le débat sur les armes à feu aux États-Unis", "La place des femmes dans l'espace public (suffragettes)", "Les célébrités et la presse à scandale (<i>tabloids</i>)"], "<i>privacy, to invade someone's privacy, surveillance, to share personal data, the public sphere, a whistleblower</i>",
      [["« Privacy » signifie…", ["la vie privée", "la privatisation", "la prison", "le privilège"], "Faux ami partiel."], ["« Big Brother » vient du roman…", ["1984 de George Orwell", "Brave New World", "The Great Gatsby", "Hamlet"], "Symbole de la surveillance totale."]],
      { id: "lva2", niv: 2, titre: "Expression écrite", q: "In about 150 words: <b>Should we be worried about how much personal data we share online?</b>", c: "<p>Yes : data collected and sold, targeted ads, hacking, surveillance. But : convenience, free services, we can protect ourselves (privacy settings, laws like the GDPR). Give a personal example.</p>" }),
    axe(2, ["Les affiches de propagande (Uncle Sam, « I Want You », 1917)", "Les <i>protest songs</i> (Bob Dylan, <i>Blowin' in the Wind</i>)", "Banksy et le street art politique", "Hollywood et le <i>soft power</i> américain"], "<i>propaganda, to denounce, to glorify, a protest song, soft power, to raise awareness, censorship</i>",
      [["« Soft power » désigne…", ["une influence par la culture et l'attractivité", "la force militaire", "un logiciel", "un pouvoir faible"], "Notion de Joseph Nye."], ["L'affiche « I Want You » représente…", ["Uncle Sam", "Abraham Lincoln", "la reine Victoria", "un soldat anonyme"], "Affiche de recrutement de 1917."]]),
    axe(3, ["Les <i>fake news</i> et la désinformation", "Le scandale Cambridge Analytica (2018) et les élections", "Le cyberharcèlement", "Le militantisme en ligne (#MeToo)"], "<i>fake news, to go viral, an algorithm, a filter bubble, cyberbullying, to fact-check, digital citizenship</i>",
      [["« To fact-check » signifie…", ["vérifier les faits", "inventer une information", "partager une vidéo", "supprimer un compte"], "Indispensable face aux fake news."], ["Le scandale Cambridge Analytica concernait…", ["l'utilisation de données Facebook à des fins électorales", "un virus informatique", "une panne d'Internet", "un jeu vidéo"], "Révélé en 2018."]],
      { id: "lva4", niv: 3, titre: "Expression écrite", q: "In about 180 words: <b>Do social media make us better citizens?</b>", c: "<p>For : information, mobilisation (#MeToo, climate strikes), voice for minorities. Against : fake news, filter bubbles, polarisation, cyberbullying, manipulation of elections. Conclusion : they are tools ; digital education and regulation are needed.</p>" }),
    axe(4, ["Les dystopies : <i>1984</i>, <i>Brave New World</i>, <i>The Handmaid's Tale</i>, <i>Black Mirror</i>", "Les séries et films inspirés de faits réels (<i>biopics</i>)", "La téléréalité", "Les mythes américains (Far West, rêve américain)"], "<i>a dystopia, a utopia, a biopic, based on a true story, science fiction, a warning, to blur the line between</i>",
      [["Une dystopie est…", ["une société imaginaire cauchemardesque", "une société idéale", "un documentaire", "une biographie"], "Elle sert souvent d'avertissement."], ["« Based on a true story » signifie…", ["inspiré d'une histoire vraie", "basé sur un roman", "complètement inventé", "un film d'horreur"], "Typique des biopics."]]),
    axe(5, ["L'intelligence artificielle et ses dangers", "Les OGM et le génie génétique", "La conquête spatiale (Apollo 11, 1969 ; SpaceX)", "La Silicon Valley et les géants du numérique", "Frankenstein (Mary Shelley, 1818), mythe du savant irresponsable"], "<i>a breakthrough, to clone, artificial intelligence, ethical issues, to be accountable, sustainable, a threat</i>",
      [["« A breakthrough » est…", ["une avancée majeure", "une panne", "une rupture amoureuse", "une interdiction"], "Utile pour parler de découvertes."], ["Qui a écrit <i>Frankenstein</i> ?", ["Mary Shelley", "Jane Austen", "H.G. Wells", "Charles Dickens"], "Publié en 1818."]],
      { id: "lva6", niv: 3, titre: "Expression écrite", q: "In about 180 words: <b>Should we be afraid of artificial intelligence?</b>", c: "<p>Benefits : medicine, research, productivity, accessibility. Risks : job losses, bias, deepfakes, privacy, concentration of power. Responsibility : regulation (the EU AI Act), ethics, education. Conclusion nuancée.</p>" }),
    axe(6, ["Le mouvement des droits civiques : Rosa Parks (1955), Martin Luther King, <i>I Have a Dream</i> (1963)", "Black Lives Matter (né en 2013, massivement relancé en 2020)", "Les droits LGBTQ+", "Les Aborigènes d'Australie et les Maoris de Nouvelle-Zélande"], "<i>to discriminate against, equal rights, segregation, to stand up for, inclusive, prejudice, a minority</i>",
      [["Rosa Parks refuse de céder sa place dans un bus en…", ["1955", "1963", "1920", "1989"], "À Montgomery (Alabama)."], ["« Segregation » désigne…", ["la séparation imposée entre groupes", "une élection", "une intégration", "une fête"], "Aux États-Unis, jusqu'aux lois des années 1960."]],
      { id: "lva7", niv: 2, titre: "Expression orale", q: "Prepare a 2-minute presentation about a person who fought for equal rights in an English-speaking country.", c: "<p>Exemple : <i>Martin Luther King was an African-American pastor who led the civil rights movement in the 1950s and 1960s. He advocated non-violence, organised the Montgomery bus boycott and the March on Washington in 1963, where he delivered his « I Have a Dream » speech. He was awarded the Nobel Peace Prize in 1964 and assassinated in 1968.</i></p>" }),
    axe(7, ["Les Amérindiens et la « piste des larmes » (<i>Trail of Tears</i>, 1838)", "Le mémorial du 11 septembre à New York", "Les <i>Troubles</i> en Irlande du Nord et l'accord du Vendredi saint (1998)", "La mémoire de l'esclavage (musées, débats sur les statues)"], "<i>to commemorate, a memorial, heritage, to remember, a scar, to apologise, reconciliation</i>",
      [["L'accord du Vendredi saint (1998) concerne…", ["l'Irlande du Nord", "l'Écosse", "le Canada", "l'Inde"], "Fin des Troubles."], ["« To commemorate » signifie…", ["commémorer", "commenter", "commencer", "communiquer"], "Utile pour l'axe mémoire."]]),
    { court: "Grammaire", titre: "Grammaire essentielle",
      fiche: `${T(["Point", "Règle", "Exemple"], [["Prétérit", "action passée datée, terminée", "<i>She left in 2019.</i>"], ["Present perfect", "lien passé-présent, expérience, bilan", "<i>I have lived here for 5 years.</i>"], ["for / since", "for + durée ; since + point de départ", "<i>for two years / since 2024</i>"], ["Passif", "be + participe passé", "<i>The law was passed in 1964.</i>"], ["Discours indirect", "concordance des temps", "<i>He said he was busy.</i>"], ["Conditionnel", "if + prétérit → would + verbe", "<i>If I won, I would travel.</i>"], ["Regret", "I wish + past perfect", "<i>I wish I had known.</i>"], ["Modaux", "must (obligation, déduction), can (capacité), may/might (possibilité), should (conseil)", "<i>You should read it.</i>"], ["used to", "habitude passée révolue", "<i>I used to live in Paris.</i>"]])}
      ${box("Erreurs fréquentes", "Oublier le -s à la 3e personne du présent ; employer le present perfect avec une date passée ; « people is » (people est pluriel) ; « informations » (information est indénombrable).", "warn")}`,
      quiz: [["« Since » s'emploie avec…", ["un point de départ", "une durée", "un futur", "un adjectif"], "since 2020 / for three years."], ["« Yesterday I … the film. »", ["saw", "have seen", "see", "seen"], "Date passée : prétérit."], ["Le passif de « They built it » est…", ["It was built", "It is built", "It has build", "It built"], "be au prétérit + participe passé."], ["« People … happy. »", ["are", "is", "be", "was"], "People est un pluriel."]],
      exos: [] },
  ],
  generes: [
    { titre: "Traduction (français → anglais)", niv: 2, ch: null, gen() { const [f, e, t] = pick(EN_TRANS); return { q: `<p>Traduis en anglais :</p><blockquote>${f}</blockquote>`, c: `<p><b>${e}</b></p><p>${t}</p>` }; } },
    { titre: "Grammaire au hasard", niv: 1, ch: 8, gen() { const s = shuf(EN_GRAM).slice(0, 4); return { q: `<ol>${s.map(g => `<li>${g[0]}${g[1] ? ` <i>${g[1]}</i>` : ""}</li>`).join("")}</ol>`, c: `<ol>${s.map(g => `<li><b>${g[2]}</b><br><small>${g[3]}</small></li>`).join("")}</ol>` }; } },
    { titre: "Sujet d'expression sur un axe", niv: 3, ch: null, gen() {
        const s = pick([["Identités et échanges", "Can travelling abroad change who you are?"], ["Espace privé et espace public", "Should celebrities have a right to privacy?"], ["Art et pouvoir", "Can a song change the world?"], ["Citoyenneté et mondes virtuels", "Should social media be banned for under-15s?"], ["Fictions et réalités", "Why are dystopian stories so popular among young people?"], ["Innovations scientifiques et responsabilité", "Should there be limits to scientific research?"], ["Diversité et inclusion", "Is diversity a strength for a country?"], ["Territoire et mémoire", "Should statues of controversial historical figures be removed?"]]);
        return { q: `<p>Axe « ${s[0]} ». In about 180 words: <b>${s[1]}</b></p>`, c: `<p><b>Structure attendue :</b> une introduction qui reformule la question ; deux ou trois paragraphes (arguments pour, contre, avec exemples tirés du monde anglophone vus en classe) ; une conclusion personnelle nuancée.</p><p><b>Connecteurs :</b> <i>First of all, Moreover, However, On the other hand, For instance, As a consequence, To conclude.</i></p><p><b>Pour viser B2 :</b> varier les temps, utiliser des modaux, des subordonnées (<i>which, whereas, although</i>) et du vocabulaire précis de l'axe.</p>` };
    } },
  ],
  methode: [
    { titre: "Compréhension de l'écrit et de l'oral", html: `<ol><li>Lis le titre, la source et les consignes avant le document : fais des hypothèses.</li><li>Repère <b>qui, quoi, où, quand, pourquoi</b>.</li><li>Pour l'oral : à la première écoute, la situation générale ; ensuite, les détails (chiffres, noms, opinions).</li><li>Rends compte en français (ou en anglais selon la consigne) de façon <b>organisée</b>, avec le plus de détails précis possible.</li></ol>${box("Niveau B2", "On attend de comprendre les idées principales mais aussi les points de vue, les nuances et l'implicite (ironie, intention de l'auteur).", "tip")}` },
    { titre: "Expression écrite", html: `<ul><li>Respecte le <b>type de texte</b> demandé (article, lettre, essai, dialogue) et le nombre de mots.</li><li>Organise en paragraphes avec des <b>connecteurs</b>.</li><li>Donne des <b>exemples précis</b> liés aux axes.</li><li>Relis : accords, temps, -s, orthographe.</li></ul>` },
    { titre: "Expression orale", html: `<ul><li>Prépare une introduction (sujet, problématique), deux ou trois idées et une conclusion.</li><li>Parle à partir de mots-clés, pas d'un texte rédigé.</li><li>Phrases pour gagner du temps : <i>Let me think… / What I mean is… / That's a good question.</i></li></ul>` },
  ],
  sujets: [
    { titre: "Expression écrite", type: "Sujet type", q: "<p><b>Axe « Citoyenneté et mondes virtuels ».</b> You are a member of your school's student council. Write an article for the school newspaper (200 words) about the dangers and benefits of social media for teenagers.</p>", c: "<p><b>Titre accrocheur</b> (<i>Social media: friend or foe?</i>). Introduction : most teenagers spend hours online every day. Benefits : staying in touch, creativity, information, activism. Dangers : cyberbullying, addiction, fake news, self-esteem issues. Advice : time limits, privacy settings, fact-checking. Conclusion with a question to the readers.</p>" },
    { titre: "Expression orale", type: "Sujet type", q: "<p><b>Axe « Diversité et inclusion ».</b> Present in English (3 minutes) a document studied in class about the fight against discrimination, and explain what it teaches us today.</p>", c: "<p>Plan : 1. Présenter le document (type, auteur, date, contexte). 2. Expliquer son message. 3. Le relier à aujourd'hui (Black Lives Matter, inclusion). 4. Donner un avis personnel. Vocabulaire : <i>to fight against, equal rights, discrimination, to stand up for, to raise awareness.</i></p>" },
  ],
  vocabSens: ["Anglais → Français", "Français → Anglais"],
  vocab: [
    { theme: "Identités et échanges", mots: [["to settle", "s'installer"], ["a newcomer", "un nouvel arrivant"], ["to fit in", "s'intégrer"], ["heritage", "le patrimoine, l'héritage"], ["to be torn between", "être tiraillé entre"], ["a citizen", "un citoyen"], ["a border", "une frontière"], ["a mother tongue", "une langue maternelle"], ["to welcome", "accueillir"], ["belonging", "l'appartenance"]] },
    { theme: "Espace privé et public", mots: [["privacy", "la vie privée"], ["personal data", "les données personnelles"], ["surveillance", "la surveillance"], ["a whistleblower", "un lanceur d'alerte"], ["to invade", "envahir"], ["gun control", "le contrôle des armes"], ["a tabloid", "un journal à scandale"], ["to share", "partager"], ["a right", "un droit"], ["to protect", "protéger"]] },
    { theme: "Art et pouvoir", mots: [["propaganda", "la propagande"], ["a poster", "une affiche"], ["to denounce", "dénoncer"], ["a protest", "une manifestation, une protestation"], ["censorship", "la censure"], ["to glorify", "glorifier"], ["soft power", "l'influence culturelle"], ["a mural", "une fresque"], ["a ruler", "un dirigeant"], ["to challenge", "défier, remettre en question"]] },
    { theme: "Numérique et citoyenneté", mots: [["fake news", "les fausses informations"], ["to go viral", "devenir viral"], ["a filter bubble", "une bulle de filtre"], ["cyberbullying", "le cyberharcèlement"], ["to fact-check", "vérifier les faits"], ["an algorithm", "un algorithme"], ["a follower", "un abonné"], ["to post", "publier"], ["to vote", "voter"], ["misleading", "trompeur"]] },
    { theme: "Sciences et responsabilité", mots: [["a breakthrough", "une avancée majeure"], ["a threat", "une menace"], ["to clone", "cloner"], ["research", "la recherche"], ["accountable", "responsable (qui doit rendre des comptes)"], ["sustainable", "durable"], ["a scientist", "un scientifique"], ["to improve", "améliorer"], ["harmful", "nocif"], ["ethical", "éthique"]] },
    { theme: "Diversité et mémoire", mots: [["equal rights", "l'égalité des droits"], ["to discriminate against", "discriminer"], ["segregation", "la ségrégation"], ["prejudice", "le préjugé"], ["a minority", "une minorité"], ["to commemorate", "commémorer"], ["a memorial", "un mémorial"], ["slavery", "l'esclavage"], ["to apologise", "s'excuser, présenter des excuses"], ["reconciliation", "la réconciliation"]] },
  ],
});

/* ======================================================= ESPAGNOL (LVB) */
const PRON = ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ellas / ustedes"];
const REG = { ar: ["hablar", "trabajar", "viajar", "cantar", "estudiar", "caminar", "comprar", "mirar", "escuchar", "bailar"], er: ["comer", "beber", "aprender", "vender", "correr", "comprender"], ir: ["vivir", "escribir", "decidir", "recibir", "subir", "abrir"] };
const END = {
  "présent": { ar: ["o", "as", "a", "amos", "áis", "an"], er: ["o", "es", "e", "emos", "éis", "en"], ir: ["o", "es", "e", "imos", "ís", "en"] },
  "passé simple (pretérito indefinido)": { ar: ["é", "aste", "ó", "amos", "asteis", "aron"], er: ["í", "iste", "ió", "imos", "isteis", "ieron"], ir: ["í", "iste", "ió", "imos", "isteis", "ieron"] },
  "imparfait (pretérito imperfecto)": { ar: ["aba", "abas", "aba", "ábamos", "abais", "aban"], er: ["ía", "ías", "ía", "íamos", "íais", "ían"], ir: ["ía", "ías", "ía", "íamos", "íais", "ían"] },
  "futur": { all: ["é", "ás", "á", "emos", "éis", "án"] },
  "conditionnel": { all: ["ía", "ías", "ía", "íamos", "íais", "ían"] },
  "subjonctif présent": { ar: ["e", "es", "e", "emos", "éis", "en"], er: ["a", "as", "a", "amos", "áis", "an"], ir: ["a", "as", "a", "amos", "áis", "an"] },
};
const conj = (v, tps) => { const g = v.slice(-2), rad = v.slice(0, -2), e = END[tps]; return e.all ? e.all.map(x => v + x) : e[g].map(x => rad + x); };
const IRR = {
  ser: { "présent": ["soy", "eres", "es", "somos", "sois", "son"], "passé simple (pretérito indefinido)": ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"] },
  estar: { "présent": ["estoy", "estás", "está", "estamos", "estáis", "están"], "passé simple (pretérito indefinido)": ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"] },
  tener: { "présent": ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"], "passé simple (pretérito indefinido)": ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"] },
  hacer: { "présent": ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"], "passé simple (pretérito indefinido)": ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"] },
  ir: { "présent": ["voy", "vas", "va", "vamos", "vais", "van"], "passé simple (pretérito indefinido)": ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"] },
  poder: { "présent": ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"], "passé simple (pretérito indefinido)": ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"] },
  decir: { "présent": ["digo", "dices", "dice", "decimos", "decís", "dicen"], "passé simple (pretérito indefinido)": ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"] },
  querer: { "présent": ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"], "passé simple (pretérito indefinido)": ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"] },
};
const ES_TRANS = [
  ["J'aime beaucoup les films espagnols.", "Me gustan mucho las películas españolas.", "<i>gustar</i> s'accorde avec ce qui plaît : <i>me gustan</i> (pluriel)."],
  ["Il faut protéger l'environnement.", "Hay que proteger el medio ambiente.", "Obligation impersonnelle : <i>hay que</i> + infinitif."],
  ["Quand j'étais petit, je vivais à Séville.", "Cuando era pequeño, vivía en Sevilla.", "Description et habitude passées : imparfait."],
  ["Hier, nous sommes allés au musée.", "Ayer fuimos al museo.", "Action passée datée et terminée : pretérito indefinido."],
  ["Je cherche un livre qui parle de la guerre civile.", "Busco un libro que hable de la guerra civil.", "Antécédent indéterminé : subjonctif dans la relative."],
  ["Il est très fatigué parce qu'il travaille trop.", "Está muy cansado porque trabaja demasiado.", "<i>estar</i> pour un état passager."],
  ["Madrid est la capitale de l'Espagne.", "Madrid es la capital de España.", "<i>ser</i> pour une caractéristique essentielle, une identité."],
  ["Je veux que tu viennes avec moi.", "Quiero que vengas conmigo.", "Volonté + que + subjonctif ; <i>conmigo</i>."],
  ["Il continue à étudier l'espagnol.", "Sigue estudiando español.", "Durée : <i>seguir</i> + gérondif."],
  ["On parle espagnol dans plus de vingt pays.", "Se habla español en más de veinte países.", "Le « on » impersonnel : <i>se</i> + verbe."],
];
const ES_GRAM = [
  ["Ser ou estar ? La puerta … abierta.", "La puerta está abierta.", "État résultant d'une action : <i>estar</i>."],
  ["Ser ou estar ? Mi hermano … médico.", "Mi hermano es médico.", "Profession, identité : <i>ser</i>."],
  ["Ser ou estar ? Barcelona … en Cataluña.", "Barcelona está en Cataluña.", "Localisation : <i>estar</i>."],
  ["Por ou para ? Estudio … aprobar el examen.", "Estudio para aprobar el examen.", "But : <i>para</i>."],
  ["Por ou para ? Gracias … tu ayuda.", "Gracias por tu ayuda.", "Cause : <i>por</i>."],
  ["Mets au passé (indefinido) : Ayer (comer, yo) paella.", "Ayer comí paella.", "<i>ayer</i> = moment terminé : indefinido."],
  ["Complète avec gustar : A ella le … los animales.", "A ella le gustan los animales.", "Accord avec le sujet grammatical (los animales)."],
  ["Mets à l'impératif (tú) : (Hablar) más despacio.", "Habla más despacio.", "Impératif affirmatif tú = 3e personne du présent."],
  ["Mets à la forme négative : ¡Habla! (tú)", "¡No hables!", "Impératif négatif = subjonctif présent."],
  ["Traduis « il y a deux ans » : … dos años.", "Hace dos años.", "Durée écoulée : <i>hace</i> + durée."],
];
MATIERES.push({
  cle: "lvb", nom: "Espagnol (LVB)", court: "Espagnol",
  sous: "Langue vivante B · contrôle continu · coef. 6",
  intro: "Les 8 axes avec des exemples d'Espagne et d'Amérique latine, la grammaire et la conjugaison (avec un générateur de verbes à l'infini), et du vocabulaire en cartes.",
  epreuve: `<p>L'espagnol en LVB est évalué en <b>contrôle continu</b> (moyennes de Première et de Terminale, coefficient 6), sur les quatre activités : compréhension de l'écrit et de l'oral, expression écrite et orale.</p>
    <p>Le niveau visé en fin de Terminale est <b>B1</b> pour la LVB : comprendre l'essentiel d'un document sur un sujet familier, raconter, décrire, donner son avis et le justifier simplement.</p>`,
  chapitres: [
    axe(0, ["Les migrations du Mexique et d'Amérique centrale vers les États-Unis ; les « latinos » et le <i>spanglish</i>", "L'exil des républicains espagnols en 1939", "L'émigration de jeunes Espagnols après la crise de 2008"], "<i>emigrar, la frontera, el exilio, echar de menos (regretter l'absence de), adaptarse, la identidad, el mestizaje</i>",
      [["« Echar de menos » signifie…", ["regretter l'absence de quelqu'un ou de quelque chose", "jeter moins", "manquer un train", "faire moins"], "Echo de menos a mi familia."], ["Le « spanglish » est…", ["un mélange d'espagnol et d'anglais", "un dialecte andalou", "une danse", "un plat mexicain"], "Parlé par une partie des Hispaniques aux États-Unis."]],
      { id: "lvb1", niv: 2, titre: "Expression écrite", q: "En unas 120 palabras: <b>¿Por qué muchas personas deciden emigrar? ¿Es fácil adaptarse a otro país?</b>", c: "<p>Pistas : razones económicas (trabajo, pobreza), políticas (violencia, dictaduras), estudios. Dificultades : la lengua, echar de menos a la familia, la discriminación. Pero también : nuevas oportunidades, mestizaje cultural. <i>Conectores : en primer lugar, además, sin embargo, por eso, en conclusión.</i></p>" }),
    axe(1, ["La <i>plaza</i> et la vie dans la rue dans les villes espagnoles", "Le mouvement des « indignados » (15-M, Puerta del Sol, 2011)", "La place de la famille", "Les réseaux sociaux et la vie privée"], "<i>la vida privada, el espacio público, la plaza, manifestarse, las redes sociales, compartir, la intimidad</i>",
      [["Le mouvement du 15-M (2011) a occupé…", ["la Puerta del Sol à Madrid", "la Sagrada Familia", "le Zócalo de Mexico", "la plaza de Mayo"], "Mouvement des indignés."], ["« La intimidad » signifie…", ["la vie privée, l'intimité", "l'intimidation", "l'amitié", "la timidité"], "Faux ami partiel."]]),
    axe(2, ["<i>Guernica</i> de Picasso (1937), contre le bombardement de la ville basque", "Le muralisme mexicain (Diego Rivera, Siqueiros)", "Goya, <i>El tres de mayo de 1808</i>", "Frida Kahlo", "La censure sous le franquisme"], "<i>denunciar, un cuadro, un mural, el poder, la dictadura, la censura, reflejar, criticar</i>",
      [["<i>Guernica</i> a été peint par…", ["Picasso", "Dalí", "Goya", "Velázquez"], "En 1937, pendant la guerre civile."], ["Diego Rivera est connu pour…", ["ses fresques murales politiques", "ses romans", "ses films", "ses chansons"], "Muralisme mexicain."]],
      { id: "lvb3", niv: 3, titre: "Expression orale", q: "Presenta en español un cuadro o un mural comprometido que conoces (2 minutos).", c: "<p>Ejemplo : <i>Guernica es un cuadro de Pablo Picasso pintado en 1937. Denuncia el bombardeo de la ciudad vasca de Guernica por la aviación alemana durante la guerra civil. En el cuadro, se ve a personas y animales que sufren : una madre con su hijo muerto, un caballo herido. Los colores son blanco, gris y negro, como en una foto de periódico. Hoy es un símbolo contra la guerra.</i></p>" }),
    axe(3, ["Les <i>bulos</i> (fausses nouvelles)", "La fracture numérique (<i>brecha digital</i>) en Amérique latine", "Les jeunes et les réseaux sociaux"], "<i>las redes sociales, un bulo, la brecha digital, conectarse, el ciudadano, participar, votar</i>",
      [["Un « bulo » est…", ["une fausse nouvelle", "un bulletin de vote", "un réseau", "un ordinateur"], "Fake news en espagnol."], ["« La brecha digital » désigne…", ["la fracture numérique", "un virus", "une application", "un réseau social"], "Inégalités d'accès au numérique."]]),
    axe(4, ["Le réalisme magique : <i>Cien años de soledad</i> de Gabriel García Márquez (1967)", "<i>Don Quijote</i> de Cervantès : le héros qui confond fiction et réalité", "Les telenovelas", "Borges et les labyrinthes"], "<i>la ficción, la realidad, el realismo mágico, soñar, imaginar, una novela, un personaje</i>",
      [["<i>Cien años de soledad</i> est de…", ["Gabriel García Márquez", "Pablo Neruda", "Cervantès", "Isabel Allende"], "Chef-d'œuvre du réalisme magique."], ["Don Quichotte confond…", ["la fiction et la réalité", "l'espagnol et l'anglais", "le jour et la nuit", "ses amis"], "Il se prend pour un chevalier errant."]]),
    axe(5, ["Les énergies renouvelables en Espagne (solaire, éolien)", "Les observatoires du désert d'Atacama (Chili)", "Les serres d'Almería et l'agriculture intensive", "Le « triangle du lithium » (Bolivie, Chili, Argentine)"], "<i>el medio ambiente, la energía solar, contaminar, el progreso, los recursos, la sequía, sostenible</i>",
      [["Le désert d'Atacama est célèbre pour…", ["ses observatoires astronomiques", "ses forêts", "ses stations de ski", "ses plages"], "Ciel très pur et sec."], ["« La sequía » signifie…", ["la sécheresse", "la sécurité", "la soif", "la saison"], "Problème majeur en Espagne."]]),
    axe(6, ["Rigoberta Menchú, militante maya, prix Nobel de la paix (1992)", "Les langues co-officielles en Espagne (catalan, basque, galicien)", "« Ni una menos » (Argentine, 2015) contre les féminicides", "Le mariage pour tous en Espagne (2005)"], "<i>la igualdad, los derechos, discriminar, los pueblos indígenas, la mujer, luchar por, respetar</i>",
      [["Rigoberta Menchú a reçu le prix Nobel de la paix en…", ["1992", "2005", "1975", "2015"], "Pour la défense des peuples autochtones."], ["« Ni una menos » lutte contre…", ["les violences faites aux femmes", "la pollution", "la corruption", "le chômage"], "Né en Argentine en 2015."]],
      { id: "lvb7", niv: 2, titre: "Expression écrite", q: "En unas 120 palabras: <b>¿Qué se puede hacer para luchar contra las discriminaciones?</b>", c: "<p>Ideas : educar desde la escuela, leyes (igualdad, paridad), campañas de sensibilización, dar la palabra a las víctimas. Ejemplos : Ni una menos, los derechos de los pueblos indígenas. <i>Expresiones : hay que + infinitivo, es necesario que + subjuntivo, creo que…</i></p>" }),
    axe(7, ["La guerre civile espagnole (1936-1939) et la dictature de Franco (jusqu'en 1975)", "La loi de mémoire démocratique (2022) et les fosses communes", "Les Mères de la place de Mai (Argentine) et les disparus", "Le coup d'État au Chili (11 septembre 1973) et Pinochet"], "<i>la memoria, la guerra civil, la dictadura, los desaparecidos, recordar, olvidar, una fosa común, la transición</i>",
      [["La guerre civile espagnole a eu lieu de…", ["1936 à 1939", "1914 à 1918", "1975 à 1982", "1939 à 1945"], "Elle aboutit à la dictature de Franco."], ["Les Mères de la place de Mai réclamaient…", ["la vérité sur leurs enfants disparus", "le droit de vote", "l'indépendance", "la fin de la monarchie"], "Sous la dictature argentine (1976-1983)."]]),
    { court: "Grammaire et conjugaison", titre: "Grammaire et conjugaison essentielles",
      fiche: `${T(["Point", "Règle", "Exemple"], [["Ser / estar", "ser : identité, caractéristique, profession ; estar : état, localisation, résultat", "<i>Es alto. Está cansado.</i>"], ["Gustar", "accord avec ce qui plaît", "<i>Me gusta el cine. Me gustan los libros.</i>"], ["Indefinido / imperfecto", "action ponctuelle terminée / description, habitude", "<i>Ayer llovió. Antes vivía aquí.</i>"], ["Obligation", "tener que + inf. (personnelle) ; hay que + inf. (générale)", "<i>Tengo que estudiar. Hay que reciclar.</i>"], ["Subjonctif", "après volonté, souhait, ordre, but (para que), émotion, négation d'opinion", "<i>Quiero que vengas. No creo que sea verdad.</i>"], ["Por / para", "por : cause, lieu de passage, moyen ; para : but, destination", "<i>Por la calle. Para ti.</i>"], ["Impératif", "affirmatif tú = 3e pers. du présent ; négatif = subjonctif", "<i>¡Come! ¡No comas!</i>"], ["Durée", "llevar + durée + gérondif ; hace + durée", "<i>Llevo dos años estudiando español.</i>"]])}
      ${box("Les terminaisons à connaître", "Présent (-ar) : o, as, a, amos, áis, an. Indefinido (-ar) : é, aste, ó, amos, asteis, aron ; (-er/-ir) : í, iste, ió, imos, isteis, ieron. Imparfait (-ar) : aba… ; (-er/-ir) : ía… Futur : infinitif + é, ás, á, emos, éis, án.", "tip")}`,
      quiz: [["« Il est malade » se dit…", ["Está enfermo", "Es enfermo", "Tiene enfermo", "Hay enfermo"], "État passager : estar."], ["« Me … los perros. »", ["gustan", "gusta", "gusto", "gustamos"], "Accord avec los perros."], ["Indefinido de « hablar » (yo) :", ["hablé", "hablaba", "hablo", "hablaré"], "Terminaison -é."], ["« Quiero que tú … (venir) »", ["vengas", "vienes", "vendrás", "venir"], "Volonté + subjonctif."]],
      exos: [] },
  ],
  generes: [
    { titre: "Conjugaison au hasard", niv: 1, ch: 8, gen() {
        const items = [];
        for (let k = 0; k < 5; k++) {
          if (Math.random() < 0.35) { const v = pick(Object.keys(IRR)), tps = pick(Object.keys(IRR[v])), p = R(0, 5); items.push([v, tps, p, IRR[v][tps][p], IRR[v][tps]]); }
          else { const g = pick(["ar", "er", "ir"]), v = pick(REG[g]), tps = pick(Object.keys(END)), p = R(0, 5), f = conj(v, tps); items.push([v, tps, p, f[p], f]); }
        }
        return { q: `<p>Conjugue :</p><ol>${items.map(([v, t, p]) => `<li><b>${v}</b> au ${t}, ${PRON[p]}</li>`).join("")}</ol>`,
          c: `<ol>${items.map(([v, t, p, f, all]) => `<li><b>${f}</b><br><small>${v} (${t}) : ${all.join(", ")}</small></li>`).join("")}</ol>` };
    } },
    { titre: "Traduction (français → espagnol)", niv: 2, ch: null, gen() { const [f, e, t] = pick(ES_TRANS); return { q: `<p>Traduis en espagnol :</p><blockquote>${f}</blockquote>`, c: `<p><b>${e}</b></p><p>${t}</p>` }; } },
    { titre: "Grammaire au hasard", niv: 2, ch: 8, gen() { const s = shuf(ES_GRAM).slice(0, 4); return { q: `<ol>${s.map(g => `<li>${g[0]}</li>`).join("")}</ol>`, c: `<ol>${s.map(g => `<li><b>${g[1]}</b><br><small>${g[2]}</small></li>`).join("")}</ol>` }; } },
  ],
  methode: [
    { titre: "Compréhension (écrit et oral)", html: `<ol><li>Observe le titre, l'image, la source : fais des hypothèses.</li><li>Repère <b>quién, qué, dónde, cuándo, por qué</b>.</li><li>Repère les mots transparents (proches du français) et les connecteurs.</li><li>Rédige un compte rendu organisé avec le maximum d'informations précises.</li></ol>${box("Niveau B1", "On attend l'essentiel : la situation, les personnes, les faits principaux et l'opinion exprimée.", "tip")}` },
    { titre: "Expression écrite et orale", html: `<ul><li>Structure : introducción, desarrollo (2 ideas con ejemplos), conclusión.</li><li><b>Conectores</b> : en primer lugar, además, sin embargo, por eso, por un lado… por otro lado, en conclusión.</li><li><b>Donner son avis</b> : creo que, pienso que, me parece que (+ indicatif) ; no creo que (+ subjonctif).</li><li>Varie les temps (présent, indefinido, imperfecto, futur).</li></ul>` },
  ],
  sujets: [
    { titre: "Expression écrite", type: "Sujet type", q: "<p><b>Eje « Territorio y memoria ».</b> Imagina que eres un joven español en 2026. Escribe un artículo (150 palabras) para el periódico del instituto: ¿por qué es importante recordar la historia de la guerra civil?</p>", c: "<p>Ideas : recordar a las víctimas, entender el presente, evitar repetir los errores, el derecho de las familias a saber (fosas comunes, Ley de Memoria Democrática de 2022). Pero también : algunos prefieren olvidar para reconciliarse. Conclusión personal. <i>Es importante que + subjuntivo ; hay que + infinitivo.</i></p>" },
    { titre: "Expression orale", type: "Sujet type", q: "<p><b>Eje « Arte y poder ».</b> Describe y comenta en 2 minutos una obra de arte comprometida estudiada en clase.</p>", c: "<p>Plan : presentación (autor, fecha, tipo de obra), descripción (en primer plano, al fondo, a la izquierda), interpretación (¿qué denuncia?), opinión personal (me impresiona porque…).</p>" },
  ],
  vocabSens: ["Espagnol → Français", "Français → Espagnol"],
  vocab: [
    { theme: "Identidades e intercambios", mots: [["emigrar", "émigrer"], ["la frontera", "la frontière"], ["echar de menos", "regretter l'absence de"], ["el exilio", "l'exil"], ["adaptarse", "s'adapter"], ["el mestizaje", "le métissage"], ["el idioma", "la langue"], ["el extranjero", "l'étranger"], ["acoger", "accueillir"], ["el sueño", "le rêve"]] },
    { theme: "Arte y poder", mots: [["el cuadro", "le tableau"], ["el pintor", "le peintre"], ["denunciar", "dénoncer"], ["la dictadura", "la dictature"], ["el poder", "le pouvoir"], ["la censura", "la censure"], ["en primer plano", "au premier plan"], ["al fondo", "à l'arrière-plan"], ["reflejar", "refléter"], ["el mural", "la fresque"]] },
    { theme: "Sociedad y ciudadanía", mots: [["las redes sociales", "les réseaux sociaux"], ["un bulo", "une fausse nouvelle"], ["manifestarse", "manifester"], ["la vida privada", "la vie privée"], ["el ciudadano", "le citoyen"], ["votar", "voter"], ["la igualdad", "l'égalité"], ["los derechos", "les droits"], ["luchar por", "lutter pour"], ["la mujer", "la femme"]] },
    { theme: "Memoria y territorio", mots: [["la guerra civil", "la guerre civile"], ["recordar", "se souvenir"], ["olvidar", "oublier"], ["los desaparecidos", "les disparus"], ["la fosa común", "la fosse commune"], ["la transición", "la transition démocratique"], ["el golpe de Estado", "le coup d'État"], ["las víctimas", "les victimes"], ["la paz", "la paix"], ["el homenaje", "l'hommage"]] },
    { theme: "Ciencia y medio ambiente", mots: [["el medio ambiente", "l'environnement"], ["contaminar", "polluer"], ["la sequía", "la sécheresse"], ["los recursos", "les ressources"], ["el invernadero", "la serre"], ["sostenible", "durable"], ["el avance", "le progrès, l'avancée"], ["el peligro", "le danger"], ["la investigación", "la recherche"], ["el calentamiento global", "le réchauffement climatique"]] },
    { theme: "Conectores y opinión", mots: [["sin embargo", "cependant"], ["además", "de plus"], ["por eso", "c'est pourquoi"], ["en cambio", "en revanche"], ["aunque", "bien que, même si"], ["creo que", "je crois que"], ["me parece que", "il me semble que"], ["en conclusión", "en conclusion"], ["por un lado", "d'un côté"], ["a pesar de", "malgré"]] },
  ],
});
}
