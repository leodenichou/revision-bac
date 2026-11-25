/* ==========================================================================
   SUJETS TYPE BAC SUPPLÉMENTAIRES — épreuves finales (SES, philo, LLCER)
   Tous les documents et données sont rédigés ou inventés pour l'entraînement.
   ========================================================================== */
{
const { T } = OUT;
const M = cle => MATIERES.find(m => m.cle === cle);
const plan = (...p) => "<ol>" + p.map(x => `<li>${x}</li>`).join("") + "</ol>";

/* ================================================================ SES */
M("ses").sujets.push(
  { titre: "Dissertation", type: "Dissertation", q: "<p><b>Sujet :</b> Le commerce international est-il toujours favorable aux pays qui y participent ?</p>",
    c: `<p><b>Définitions :</b> commerce international (échanges de biens et services entre pays), gains à l'échange. <b>Problématique :</b> si l'échange profite globalement aux pays, ses gains sont-ils répartis entre et au sein des pays ?</p>
    <p><b>I. Le commerce international est source de gains</b></p><ul><li>A. Spécialisation selon les avantages comparatifs (Ricardo) et les dotations factorielles (HOS) : chaque pays produit plus efficacement.</li><li>B. Économies d'échelle, baisse des prix, hausse du pouvoir d'achat, plus grande variété (commerce intra-branche).</li><li>C. Diffusion des technologies et stimulation de l'innovation par la concurrence.</li></ul>
    <p><b>II. Mais ses effets ne sont pas toujours favorables</b></p><ul><li>A. Des inégalités au sein des pays : travailleurs peu qualifiés des pays riches mis en concurrence, territoires touchés par les délocalisations.</li><li>B. Des dépendances : chaînes de valeur fragiles (pénuries de composants), spécialisation dans des produits à faible valeur ajoutée pour certains pays.</li><li>C. Un coût environnemental (transport, délocalisation de la pollution).</li></ul>
    <p><b>Conclusion :</b> le commerce est globalement favorable, mais ses gains sont inégalement répartis ; d'où le débat entre libre-échange et protectionnisme ciblé.</p>` },
  { titre: "Dissertation", type: "Dissertation", q: "<p><b>Sujet :</b> La mobilité sociale en France s'explique-t-elle seulement par l'évolution de la structure socioprofessionnelle ?</p>",
    c: `<p><b>Problématique :</b> la mobilité observée vient-elle surtout du changement de la structure des emplois, ou aussi de facteurs individuels et familiaux ?</p>
    <p><b>I. Une mobilité en grande partie structurelle</b></p><ul><li>A. Baisse des agriculteurs et des ouvriers, hausse des cadres et professions intermédiaires : beaucoup d'enfants changent mécaniquement de position.</li><li>B. Cette mobilité structurelle est surtout ascendante (tertiarisation, hausse des qualifications).</li></ul>
    <p><b>II. Mais d'autres facteurs jouent</b></p><ul><li>A. Le niveau de formation : le diplôme favorise l'ascension, mais le paradoxe d'Anderson montre ses limites.</li><li>B. Les ressources familiales : capitaux économique, culturel et social ; configurations familiales.</li><li>C. Une fluidité sociale qui reste limitée : à structure égale, les chances d'accès restent inégales.</li></ul>
    <p><b>Conclusion :</b> la structure explique l'essentiel du volume de mobilité, mais pas qui en profite.</p>` },
  { titre: "Dissertation", type: "Dissertation", q: "<p><b>Sujet :</b> Les instruments de la politique climatique permettent-ils de réduire efficacement les émissions de gaz à effet de serre ?</p>",
    c: `<p><b>I. Des instruments qui corrigent l'externalité négative</b></p><ul><li>A. La réglementation impose des normes simples à contrôler.</li><li>B. La taxe carbone fait payer la pollution (internalisation, principe pollueur-payeur).</li><li>C. Le marché de quotas garantit un plafond d'émissions et réduit là où c'est le moins coûteux ; les subventions accélèrent l'innovation verte.</li></ul>
    <p><b>II. Une efficacité limitée</b></p><ul><li>A. Limites de chaque instrument : rigidité des normes, acceptabilité sociale des taxes (Gilets jaunes), prix instable des quotas, coût des subventions.</li><li>B. Les problèmes de coopération internationale : passager clandestin, fuites de carbone, inégalités entre pays.</li><li>C. Des conflits d'acteurs qui ralentissent la mise à l'agenda et l'application.</li></ul>
    <p><b>Conclusion :</b> c'est la combinaison des instruments, avec des compensations sociales et une coopération internationale, qui peut rendre la politique climatique efficace.</p>` },
  { titre: "Épreuve composée", type: "Épreuve composée", q: `<p><b>Partie 1 (3,5 pts) :</b> Montrez que l'engagement politique peut prendre des formes variées.</p>
    <p><b>Partie 2 (5,5 pts) :</b> Document (données fictives) — Taux de chômage selon le diplôme, trois ans après la fin des études (en %)</p>
    ${T(["Diplôme", "2010", "2020"], [["Aucun diplôme ou brevet", "40", "45"], ["CAP, BEP, bac", "19", "18"], ["Bac + 2", "10", "8"], ["Bac + 5 et plus", "8", "6"]])}
    <p>1. Comparez le taux de chômage des non-diplômés et des bac + 5 en 2020 (1,5 pt). 2. À l'aide des données, montrez que le diplôme protège du chômage (4 pts).</p>
    <p><b>Partie 3 (9 pts) :</b> À l'aide d'un dossier et de vos connaissances, vous montrerez que la politique monétaire de la BCE peut soutenir l'activité économique.</p>`,
    c: `<p><b>Partie 1 :</b> le vote ; le militantisme dans un parti ou un syndicat ; l'engagement associatif ; la manifestation et la pétition ; la consommation engagée (boycott) ; l'engagement en ligne. Illustrer chaque forme par un exemple.</p>
    <p><b>Partie 2. Q1 :</b> selon ces données fictives, en 2020, le taux de chômage des non-diplômés (45 %) est 7,5 fois plus élevé que celui des bac + 5 (6 %), soit un écart de 39 points.</p>
    <p><b>Q2 :</b> plus le diplôme est élevé, plus le taux de chômage est faible (de 45 % à 6 % en 2020). L'écart s'est même creusé entre 2010 et 2020 : +5 points pour les non-diplômés, −2 points pour les bac + 5. Le diplôme est un signal de compétences pour les employeurs (asymétries d'information) et donne accès à des emplois plus stables.</p>
    <p><b>Partie 3 :</b> I. La BCE fixe ses taux directeurs : en les baissant, elle rend le crédit moins cher, ce qui stimule la consommation et l'investissement. II. Cela soutient la demande globale, donc la production et l'emploi. III. Elle peut aussi utiliser des instruments non conventionnels (rachats de titres) en période de crise. Nuance possible en conclusion : un seul taux pour 21 pays, et un risque d'inflation.</p>` },
  { titre: "Épreuve composée", type: "Épreuve composée", q: `<p><b>Partie 1 (3,5 pts) :</b> Distinguez l'analyse des classes sociales de Marx et celle de Weber.</p>
    <p><b>Partie 2 (5,5 pts) :</b> Document (données fictives) — Indice des émissions de CO₂ d'un pays, base 100 en 2000</p>
    ${T(["Année", "2000", "2010", "2020", "2025"], [["Indice", "100", "92", "78", "70"]])}
    <p>1. Calculez et interprétez l'évolution des émissions entre 2000 et 2025 puis entre 2010 et 2020 (2 pts). 2. Montrez, à l'aide des données, que l'action publique peut contribuer à réduire les émissions (3,5 pts).</p>
    <p><b>Partie 3 (9 pts) :</b> À l'aide d'un dossier et de vos connaissances, vous montrerez que le travail est une source d'intégration sociale mais que cette fonction est fragilisée.</p>`,
    c: `<p><b>Partie 1 :</b> Marx : approche réaliste, deux classes définies par la place dans les rapports de production, en conflit ; classe en soi et pour soi. Weber : approche nominaliste et multidimensionnelle (classes, groupes de statut, partis) ; pas forcément de conscience ni de conflit.</p>
    <p><b>Partie 2. Q1 :</b> entre 2000 et 2025, les émissions ont baissé de 30 % (indice 70). Entre 2010 et 2020, on ne soustrait pas les indices : (78 − 92)/92 × 100 ≈ −15,2 %.</p>
    <p><b>Q2 :</b> la baisse régulière peut s'expliquer par les instruments de l'action publique : normes (moteurs, bâtiments), taxe carbone, marché européen de quotas, subventions aux énergies renouvelables. Nuance : une partie de la baisse peut venir de la désindustrialisation (émissions importées).</p>
    <p><b>Partie 3 :</b> I. Le travail intègre : revenu, statut, droits sociaux, relations, identité. II. Cette fonction est fragilisée : précarité (CDD, intérim), chômage, travail de plateforme sans collectif, intensification et perte de sens. Conclusion : le travail reste central mais son pouvoir intégrateur est inégal.</p>` },
);

/* ================================================================ PHILO */
const serie = (titre, s1, p1, plan1, s2, p2, plan2) => ({ titre, type: "Dissertation",
  q: `<p>Choisis l'un des deux sujets :</p><ol><li>${s1}</li><li>${s2}</li></ol>`,
  c: `<p><b>Sujet 1. Problématique :</b> ${p1}</p>${plan1}<p><b>Sujet 2. Problématique :</b> ${p2}</p>${plan2}` });
M("philo").sujets.push(
  serie("Série 4",
    "Peut-on tout dire ?", "La liberté d'expression est-elle absolue, ou certaines paroles doivent-elles être limitées ?",
    plan("La parole libre est une condition de la vérité et de la démocratie : interdire, c'est censurer (Mill : même une opinion fausse fait progresser la vérité).", "Mais certaines paroles blessent, mentent ou incitent à la violence : la loi limite la diffamation et l'appel à la haine ; Kant interdit le mensonge.", "Tout peut être pensé et discuté, mais pas dit n'importe comment : l'enjeu est la responsabilité de celui qui parle et le respect d'autrui."),
    "La science nous délivre-t-elle de toutes les croyances ?", "La science remplace-t-elle les croyances par des savoirs, ou repose-t-elle elle-même sur des croyances ?",
    plan("La science combat les opinions et les superstitions (Bachelard : l'opinion pense mal).", "Mais elle repose sur des présupposés non démontrés (l'ordre de la nature, la valeur de la vérité), et ses théories restent révisables (Popper).", "La science transforme la croyance en confiance rationnelle, et laisse ouvertes les questions de sens et de valeur.")),
  serie("Série 5",
    "Est-il juste de désobéir aux lois ?", "L'obéissance aux lois est-elle toujours juste, ou la justice peut-elle exiger la désobéissance ?",
    plan("Obéir aux lois est un devoir : elles expriment la volonté générale (Rousseau) et garantissent la paix (Socrate refuse de s'évader).", "Mais une loi peut être injuste : la conscience peut imposer de désobéir (Antigone, Thoreau, la Résistance, Rosa Parks).", "La désobéissance est juste si elle est publique, non violente et vise à améliorer la loi : la désobéissance civile."),
    "L'art est-il inutile ?", "L'art, qui ne répond à aucun besoin vital, est-il une activité superflue ou répond-il à des besoins proprement humains ?",
    plan("L'art n'a pas d'utilité pratique : l'œuvre n'est pas un outil (Kant : le beau plaît sans intérêt).", "Mais il est utile autrement : il fait voir le réel (Bergson), purifie les passions (Aristote), exprime l'esprit (Hegel).", "Son « inutilité » est sa valeur : il nous libère de la logique de l'utile.")),
  serie("Série 6",
    "Sommes-nous responsables de ce que nous sommes ?", "Si notre caractère vient de notre naissance, de notre éducation ou de notre inconscient, pouvons-nous en répondre ?",
    plan("Nous ne choisissons ni notre corps, ni notre famille, ni notre milieu, ni notre inconscient (Spinoza, Freud).", "Pourtant, l'homme se définit par ses choix : « l'existence précède l'essence » (Sartre), il est responsable de ce qu'il fait de ce qu'on a fait de lui.", "La responsabilité est une tâche : connaître ses déterminations pour s'en libérer en partie."),
    "Faut-il craindre la technique ?", "La technique est-elle un instrument de libération ou une menace pour l'homme ?",
    plan("La technique libère de la nature et améliore la vie (Descartes, Prométhée).", "Mais elle peut asservir et détruire : armes, crise écologique, arraisonnement de la nature (Heidegger), dépendance numérique.", "Il ne faut pas craindre la technique mais l'usage qu'on en fait : une éthique de la responsabilité (Jonas).")),
  serie("Série 7",
    "Le passé a-t-il encore de l'importance ?", "Le passé, qui n'existe plus, pèse-t-il encore sur notre présent, ou devons-nous nous en libérer pour agir ?",
    plan("Le passé n'est plus : seul le présent compte pour agir (carpe diem).", "Mais il nous constitue : mémoire, histoire, héritage (Augustin : le passé est présent dans la mémoire ; Bergson : la durée conserve le passé).", "Connaître le passé permet de ne pas le répéter et de choisir ce qu'on en garde."),
    "Peut-on vivre sans croire ?", "Peut-on fonder toute sa vie sur des savoirs, ou la croyance est-elle inévitable ?",
    plan("La raison invite à ne croire que ce qui est prouvé (Descartes : doute méthodique).", "Mais on ne peut tout vérifier : nous croyons nos proches, les experts, et nous agissons sans certitude ; les premiers principes ne se démontrent pas (Pascal).", "Il faut distinguer croyance aveugle et croyance raisonnable, fondée sur la confiance et révisable.")),
  serie("Série 8",
    "Connaître son inconscient, est-ce se libérer ?", "Si une part de nous échappe à la conscience, la connaître nous rend-il plus libres ?",
    plan("L'inconscient nous détermine sans que nous le sachions (Freud : le moi n'est pas maître dans sa maison).", "Le connaître permet de comprendre ses symptômes et de s'en libérer (la cure analytique).", "Mais la connaissance de soi reste partielle ; la liberté est un travail continu (Spinoza : comprendre ses déterminations)."),
    "La nature peut-elle être un modèle ?", "La nature doit-elle guider la conduite humaine, ou l'homme doit-il s'en affranchir ?",
    plan("Les stoïciens invitent à « vivre en accord avec la nature » ; la nature est un ordre harmonieux.", "Mais la nature est aussi violence et loi du plus fort : la morale et le droit s'en écartent ; l'homme n'a pas de nature fixe (Sartre, Rousseau : perfectibilité).", "La nature peut inspirer (biomimétisme, écologie) sans dicter nos valeurs.")),
);

/* ================================================================ LLCER */
M("llce").sujets.push(
  { titre: "Expression et construction de soi", type: "Synthèse + traduction", q: `
<p><b>Thématique :</b> « Expression et construction de soi ». Documents écrits pour l'entraînement.</p>
<p><b>Document A — Extrait de roman</b></p>
<blockquote>On the morning of her sixteenth birthday, Maya looked at herself in the bathroom mirror for a long time. The girl who looked back seemed to belong to someone else: taller, sharper, more silent. Downstairs, her mother was singing the song she sang every year. Maya wanted to go down and laugh with her, the way she used to. Instead, she took her phone, practised a smile, and took twelve pictures before she found one that looked like the person she wanted to be.</blockquote>
<p><b>Document B — Article de presse</b></p>
<blockquote>A recent survey suggests that teenagers spend an average of three hours a day on social media. Psychologists warn that constant comparison can damage self-esteem. Yet many young people describe their online profiles as a creative space. « It's where I try out different versions of me, » says Sam, 17. « Some of them become real. »</blockquote>
<p><b>Document C — Description d'un tableau</b></p>
<blockquote>A self-portrait shows a young woman painted twice on the same canvas: on the left, in a school uniform, eyes lowered; on the right, in bright colours, looking straight at the viewer. A thin red line connects their hands.</blockquote>
<p><b>Partie 1. Synthèse (16 points) :</b> 1. How do the documents show that growing up involves a change in self-image? 2. To what extent can staging oneself help to build one's identity?</p>
<p><b>Partie 2. Traduction (4 points) :</b> Traduisez le document A, de « Maya wanted to go down » jusqu'à la fin.</p>`,
    c: `<p><b>Q1 :</b> A : Maya ne se reconnaît plus dans le miroir ; elle s'éloigne de l'enfance (la chanson de sa mère, les rires d'avant). C : deux versions de la même personne, l'élève effacée et la jeune femme affirmée. B : les adolescents testent plusieurs « versions » d'eux-mêmes.</p>
    <p><b>Q2 :</b> Se mettre en scène peut aider à se construire (B : « some of them become real » ; C : le regard droit, les couleurs vives). Mais cela peut aussi enfermer dans une image : comparaison, pression (B), et perte de spontanéité (A : le sourire répété, douze photos). Le lien rouge de C suggère que les deux identités restent liées : on ne se construit pas en effaçant qui on a été.</p>
    <p><b>Traduction proposée :</b> Maya avait envie de descendre et de rire avec elle, comme elle le faisait avant. Au lieu de cela, elle prit son téléphone, s'exerça à sourire et prit douze photos avant d'en trouver une qui ressemblait à la personne qu'elle voulait être.</p>` },
  { titre: "Voyages, territoires, frontières — Exploration", type: "Synthèse + traduction", q: `
<p><b>Thématique :</b> « Voyages, territoires, frontières », axe « Exploration et aventure ». Documents écrits pour l'entraînement.</p>
<p><b>Document A — Extrait de roman</b></p>
<blockquote>We left Chicago with forty dollars, a map we did not need, and the stubborn belief that the West would explain everything. For three days the plains rolled past like a slow film. My brother slept with his feet on the dashboard. I drove, and I talked to the empty road about all the things I had never dared to say at home.</blockquote>
<p><b>Document B — Article de presse</b></p>
<blockquote>Solo travel is booming among young adults. Travel agencies report that more and more 20-year-olds take a « gap year » before university. For many, the journey is less about seeing famous places than about « finding out what I'm capable of ». Critics point out that this kind of adventure is a privilege that few can afford.</blockquote>
<p><b>Document C — Description d'une photographie</b></p>
<blockquote>A car is parked on an empty desert highway at dawn. A young man sits on the roof, looking at the horizon. The road runs straight ahead until it disappears.</blockquote>
<p><b>Partie 1. Synthèse (16 points) :</b> 1. What do the characters expect from their journeys? 2. Is travelling a way of discovering oneself rather than the world?</p>
<p><b>Partie 2. Traduction (4 points) :</b> Traduisez le document A, de « For three days » jusqu'à la fin.</p>`,
    c: `<p><b>Q1 :</b> A : les deux frères partent vers l'Ouest avec l'idée que le voyage « expliquerait tout » ; mythe de la Frontier et du road trip. B : les jeunes voyageurs cherchent à découvrir leurs capacités. C : la route infinie symbolise la liberté et l'avenir ouvert.</p>
    <p><b>Q2 :</b> Le voyage est surtout intérieur : dans A, le narrateur dit enfin ce qu'il n'osait pas dire ; dans B, on voyage pour « finding out what I'm capable of ». C : le regard vers l'horizon évoque la réflexion sur soi. Mais B nuance : ce voyage est un privilège social. Lien possible avec <i>Moon Palace</i> (Auster).</p>
    <p><b>Traduction proposée :</b> Pendant trois jours, les plaines défilèrent comme un film au ralenti. Mon frère dormait, les pieds sur le tableau de bord. Moi, je conduisais, et je parlais à la route déserte de tout ce que je n'avais jamais osé dire à la maison.</p>` },
);
}
