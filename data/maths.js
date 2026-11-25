/* ==========================================================================
   MATHÉMATIQUES COMPLÉMENTAIRES — option de Terminale, contrôle continu
   ========================================================================== */
{
const { R, pick, T, fr, box } = OUT;
const f2 = x => fr(x, 2), f3 = x => fr(x, 3), f4 = x => fr(x, 4);
const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
const sg = (v, first = false) => v < 0 ? (first ? "−" : " − ") + Math.abs(v) : (first ? "" : " + ") + v;   // signe propre
const mono = (c, x, first) => c === 0 ? "" : (c < 0 ? (first ? "−" : " − ") : (first ? "" : " + ")) + (Math.abs(c) === 1 && x ? "" : Math.abs(c)) + x;

MATIERES.push({
  cle: "maths", nom: "Maths complémentaires", court: "Maths",
  sous: "Option · contrôle continu · coef. 2",
  intro: "Suites, fonctions, exponentielle et logarithme, intégrales, équations différentielles, probabilités et statistiques. La plupart des exercices changent de nombres à chaque tirage.",
  epreuve: `<p>Les maths complémentaires sont une <b>option</b> évaluée en <b>contrôle continu</b> : ce sont tes moyennes de Terminale qui comptent pour le bac (coefficient 2). Il n'y a pas d'épreuve finale en juin.</p>
    <p>Les devoirs ressemblent à des exercices de bac : un contexte concret (évolution d'une population, durée de vie d'un appareil, coût de production) et des questions guidées. La calculatrice est en général autorisée. Les maths de Première ont été évaluées en juin 2026 par l'épreuve anticipée.</p>`,
  chapitres: [
{ court: "Suites", titre: "Suites et modèles discrets",
  fiche: `
<h3>Suites arithmétiques et géométriques</h3>
${T(["", "Arithmétique", "Géométrique"], [["Relation", "u<sub>n+1</sub> = u<sub>n</sub> + r", "u<sub>n+1</sub> = q × u<sub>n</sub>"], ["Terme général", "u<sub>n</sub> = u<sub>0</sub> + n r", "u<sub>n</sub> = u<sub>0</sub> × q<sup>n</sup>"], ["Somme", "(nombre de termes) × (premier + dernier) / 2", "premier terme × (1 − q<sup>nombre de termes</sup>) / (1 − q)"], ["Modélise", "une évolution d'une même quantité (croissance linéaire)", "une évolution d'un même pourcentage (croissance exponentielle)"]])}
${box("Évolution en pourcentage", "Augmenter de t % revient à multiplier par 1 + t/100 ; baisser de t % revient à multiplier par 1 − t/100. Une suite qui augmente de 3 % par an est géométrique de raison 1,03.")}
<h3>Limites</h3>
<ul><li>Si q &gt; 1, q<sup>n</sup> tend vers +∞ ; si −1 &lt; q &lt; 1, q<sup>n</sup> tend vers 0.</li><li>Une suite croissante et majorée converge ; croissante et non majorée, elle tend vers +∞.</li></ul>
<h3>Suites arithmético-géométriques</h3>
<p>u<sub>n+1</sub> = a u<sub>n</sub> + b (a ≠ 1). Méthode : on cherche le nombre ℓ tel que ℓ = aℓ + b, soit <b>ℓ = b / (1 − a)</b>. La suite v<sub>n</sub> = u<sub>n</sub> − ℓ est géométrique de raison a, donc <b>u<sub>n</sub> = (u<sub>0</sub> − ℓ) a<sup>n</sup> + ℓ</b>. Si 0 &lt; a &lt; 1, u<sub>n</sub> tend vers ℓ.</p>
${box("Raisonnement par récurrence", "Pour montrer qu'une propriété P(n) est vraie pour tout n : 1. <b>Initialisation</b> : P(0) est vraie. 2. <b>Hérédité</b> : si P(n) est vraie, alors P(n+1) est vraie. 3. <b>Conclusion</b>.", "tip")}
<h3>Algorithme de seuil (Python)</h3>
<pre>u, n = 1000, 0
while u &lt; 2000:
    u = u * 1.05
    n = n + 1
print(n)   # premier rang où u dépasse 2000</pre>`,
  quiz: [["Une quantité augmente de 4 % par an. Elle est modélisée par une suite…", ["géométrique de raison 1,04", "arithmétique de raison 4", "géométrique de raison 0,04", "arithmétique de raison 1,04"], "Multiplier par 1,04 chaque année."], ["Si u<sub>n</sub> = 5 × 0,8<sup>n</sup>, la limite de u<sub>n</sub> est…", ["0", "5", "+∞", "0,8"], "0,8<sup>n</sup> tend vers 0 car 0 < 0,8 < 1."], ["Pour u<sub>n+1</sub> = 0,5 u<sub>n</sub> + 10, le point fixe ℓ vaut…", ["20", "10", "5", "0,5"], "ℓ = 10 / (1 − 0,5) = 20."], ["La somme 1 + 2 + … + 100 vaut…", ["5 050", "10 000", "5 000", "10 100"], "100 × (1 + 100) / 2."], ["Dans une récurrence, l'hérédité consiste à montrer que…", ["si P(n) est vraie, alors P(n+1) est vraie", "P(0) est vraie", "P(n) est vraie pour n = 1 et 2", "la suite est croissante"], "C'est le passage d'un rang au suivant."], ["Une suite croissante non majorée…", ["tend vers +∞", "converge", "est constante", "tend vers 0"], "C'est un théorème du cours."]],
  exos: [
    { id: "mc1a", niv: 2, titre: "Récurrence", q: "Soit u<sub>0</sub> = 2 et u<sub>n+1</sub> = 0,5 u<sub>n</sub> + 3. Montrer par récurrence que u<sub>n</sub> ≤ 6 pour tout n.", c: "<p><b>Initialisation :</b> u<sub>0</sub> = 2 ≤ 6.</p><p><b>Hérédité :</b> supposons u<sub>n</sub> ≤ 6. Alors 0,5 u<sub>n</sub> ≤ 3, donc 0,5 u<sub>n</sub> + 3 ≤ 6, c'est-à-dire u<sub>n+1</sub> ≤ 6.</p><p><b>Conclusion :</b> pour tout n, u<sub>n</sub> ≤ 6.</p>" },
    { id: "mc1b", niv: 3, titre: "Modèle d'évolution", q: "Un lac contient 1 000 kg de poissons. Chaque année, 20 % des poissons sont pêchés et on en réintroduit 300 kg. On note u<sub>n</sub> la masse au bout de n années. 1. Justifier que u<sub>n+1</sub> = 0,8 u<sub>n</sub> + 300. 2. Montrer que v<sub>n</sub> = u<sub>n</sub> − 1 500 est géométrique. 3. En déduire u<sub>n</sub> et sa limite.", c: "<p>1. Il reste 80 % des poissons, puis on ajoute 300 kg.</p><p>2. v<sub>n+1</sub> = u<sub>n+1</sub> − 1 500 = 0,8 u<sub>n</sub> − 1 200 = 0,8 (u<sub>n</sub> − 1 500) = 0,8 v<sub>n</sub>. Suite géométrique de raison 0,8 et v<sub>0</sub> = −500.</p><p>3. u<sub>n</sub> = 1 500 − 500 × 0,8<sup>n</sup>. Comme 0,8<sup>n</sup> tend vers 0, <b>u<sub>n</sub> tend vers 1 500 kg</b>.</p>" },
  ] },
{ court: "Fonctions et dérivation", titre: "Limites, continuité et dérivation",
  fiche: `
<h3>Dérivées à connaître</h3>
${T(["f(x)", "f′(x)"], [["k (constante)", "0"], ["x<sup>n</sup>", "n x<sup>n−1</sup>"], ["1/x", "−1/x²"], ["√x", "1/(2√x)"], ["e<sup>x</sup>", "e<sup>x</sup>"], ["ln x", "1/x"], ["e<sup>u(x)</sup>", "u′(x) e<sup>u(x)</sup>"], ["ln(u(x))", "u′(x)/u(x)"]])}
${T(["Opération", "Dérivée"], [["u + v", "u′ + v′"], ["k u", "k u′"], ["u v", "u′v + u v′"], ["u / v", "(u′v − u v′) / v²"], ["g(ax + b)", "a g′(ax + b)"]])}
<h3>Utiliser la dérivée</h3>
<ul><li>Si f′ &gt; 0 sur un intervalle, f est <b>croissante</b> ; si f′ &lt; 0, elle est <b>décroissante</b>.</li><li>Un extremum local est atteint là où f′ s'annule <b>en changeant de signe</b>.</li><li>Équation de la tangente en a : <b>y = f′(a)(x − a) + f(a)</b>.</li></ul>
<h3>Limites et continuité</h3>
<p>Limites usuelles : e<sup>x</sup> → +∞ en +∞ et → 0 en −∞ ; ln x → +∞ en +∞ et → −∞ en 0. Croissances comparées : e<sup>x</sup>/x → +∞ et ln x / x → 0 en +∞.</p>
${box("Théorème des valeurs intermédiaires", "Si f est continue et strictement monotone sur [a ; b], alors pour tout k entre f(a) et f(b), l'équation f(x) = k a une unique solution dans [a ; b]. On l'encadre ensuite à la calculatrice.", "tip")}`,
  quiz: [["La dérivée de x³ est…", ["3x²", "x²", "3x³", "x⁴/4"], "n x<sup>n−1</sup>."], ["La dérivée de e<sup>2x</sup> est…", ["2e<sup>2x</sup>", "e<sup>2x</sup>", "2x e<sup>2x</sup>", "e<sup>2</sup>"], "u′ e<sup>u</sup> avec u = 2x."], ["Si f′(x) < 0 sur [1 ; 5], f est…", ["décroissante sur [1 ; 5]", "croissante", "positive", "négative"], "Le signe de la dérivée donne le sens de variation."], ["La tangente en a a pour équation…", ["y = f′(a)(x − a) + f(a)", "y = f(a)(x − a) + f′(a)", "y = f′(x)", "y = a x + f(a)"], "À connaître par cœur."], ["Quand x tend vers +∞, e<sup>x</sup>/x tend vers…", ["+∞", "0", "1", "e"], "L'exponentielle l'emporte."], ["La dérivée de u × v est…", ["u′v + uv′", "u′v′", "u′v − uv′", "(u′v − uv′)/v²"], "Formule du produit."]],
  exos: [{ id: "mc2a", niv: 2, titre: "Étude de fonction", q: "f(x) = x³ − 3x + 1 sur ℝ. 1. Calculer f′(x). 2. Étudier son signe et dresser le tableau de variations.", c: "<p>1. f′(x) = 3x² − 3 = 3(x − 1)(x + 1).</p><p>2. f′ est positive sur ]−∞ ; −1] et [1 ; +∞[, négative sur [−1 ; 1]. f est croissante, puis décroissante, puis croissante. Maximum local f(−1) = 3 ; minimum local f(1) = −1.</p>" }] },
{ court: "Convexité", titre: "Fonctions convexes",
  fiche: `
<p>Une fonction est <b>convexe</b> sur un intervalle si sa courbe est <b>au-dessus de ses tangentes</b> (forme en « ∪ ») ; <b>concave</b> si elle est en dessous (forme en « ∩ »).</p>
${box("Critère", "Si f″ ≥ 0 sur I, f est convexe sur I (f′ est croissante). Si f″ ≤ 0, f est concave.")}
<p>Un <b>point d'inflexion</b> est un point où la courbe traverse sa tangente : f″ s'annule en changeant de signe. La convexité change.</p>
<p>Exemples : x² et e<sup>x</sup> sont convexes sur ℝ ; ln x et √x sont concaves sur ]0 ; +∞[ ; x³ change de convexité en 0.</p>
${box("Interprétation", "Une fonction croissante et convexe croît de plus en plus vite (accélération) ; croissante et concave, elle croît de moins en moins vite (ralentissement). Utile pour lire une courbe de contamination ou de ventes.", "tip")}`,
  quiz: [["Si f″(x) > 0 sur I, f est…", ["convexe sur I", "concave", "décroissante", "négative"], "f′ est croissante."], ["La fonction ln est…", ["concave", "convexe", "ni l'un ni l'autre", "affine"], "Sa dérivée seconde −1/x² est négative."], ["Un point d'inflexion est un point où…", ["la courbe traverse sa tangente", "f s'annule", "f′ s'annule", "f est maximale"], "La convexité change."], ["La fonction x ↦ x³ a un point d'inflexion en…", ["0", "1", "−1", "aucun point"], "f″(x) = 6x change de signe en 0."]],
  exos: [{ id: "mc3a", niv: 2, titre: "Convexité", q: "f(x) = x³ − 6x² + 2. Étudier la convexité de f et donner le point d'inflexion.", c: "<p>f′(x) = 3x² − 12x, f″(x) = 6x − 12. f″ &lt; 0 sur ]−∞ ; 2[ : f concave ; f″ &gt; 0 sur ]2 ; +∞[ : f convexe. Point d'inflexion en x = 2 : <b>A(2 ; −14)</b>.</p>" }] },
{ court: "Exponentielle", titre: "La fonction exponentielle",
  fiche: `
<p>La fonction exponentielle est l'unique fonction f dérivable sur ℝ telle que <b>f′ = f et f(0) = 1</b>. Elle est strictement positive et croissante.</p>
${box("Propriétés algébriques", "e<sup>a+b</sup> = e<sup>a</sup> × e<sup>b</sup> ; e<sup>−a</sup> = 1/e<sup>a</sup> ; e<sup>a−b</sup> = e<sup>a</sup>/e<sup>b</sup> ; (e<sup>a</sup>)<sup>n</sup> = e<sup>na</sup> ; e<sup>0</sup> = 1 ; e ≈ 2,718.")}
<ul><li>e<sup>a</sup> = e<sup>b</sup> ⇔ a = b ; e<sup>a</sup> &lt; e<sup>b</sup> ⇔ a &lt; b.</li><li>(e<sup>u</sup>)′ = u′ e<sup>u</sup>. Pour f(x) = e<sup>kx</sup>, f′(x) = k e<sup>kx</sup>.</li><li>Les fonctions x ↦ e<sup>kx</sup> prolongent les suites géométriques : croissance (k &gt; 0) ou décroissance (k &lt; 0) exponentielle.</li></ul>`,
  quiz: [["e<sup>3</sup> × e<sup>2</sup> =", ["e<sup>5</sup>", "e<sup>6</sup>", "e<sup>1</sup>", "2e<sup>5</sup>"], "On additionne les exposants."], ["Pour tout x, e<sup>x</sup> est…", ["strictement positif", "positif ou nul", "négatif", "entier"], "L'exponentielle ne s'annule jamais."], ["La dérivée de e<sup>−0,5x</sup> est…", ["−0,5 e<sup>−0,5x</sup>", "e<sup>−0,5x</sup>", "0,5 e<sup>−0,5x</sup>", "−0,5x e<sup>−0,5x</sup>"], "k e<sup>kx</sup>."], ["e<sup>0</sup> =", ["1", "0", "e", "−1"], "Par définition."]],
  exos: [{ id: "mc4a", niv: 2, titre: "Équation et inéquation", q: "Résoudre : 1. e<sup>2x − 1</sup> = e<sup>x + 3</sup>. 2. e<sup>3x</sup> &gt; e<sup>6</sup>.", c: "<p>1. 2x − 1 = x + 3, donc <b>x = 4</b>.</p><p>2. 3x &gt; 6, donc <b>x &gt; 2</b>.</p>" }] },
{ court: "Logarithme", titre: "La fonction logarithme népérien",
  fiche: `
<p>Pour x &gt; 0, <b>ln x</b> est l'unique réel y tel que e<sup>y</sup> = x. Le logarithme est la fonction réciproque de l'exponentielle : <b>e<sup>ln x</sup> = x</b> (x &gt; 0) et <b>ln(e<sup>x</sup>) = x</b>.</p>
${box("Propriétés", "ln(ab) = ln a + ln b ; ln(a/b) = ln a − ln b ; ln(a<sup>n</sup>) = n ln a ; ln 1 = 0 ; ln e = 1.")}
<ul><li>(ln x)′ = 1/x : ln est croissante et concave sur ]0 ; +∞[.</li><li>ln x &lt; 0 si 0 &lt; x &lt; 1 ; ln x &gt; 0 si x &gt; 1.</li><li>Le logarithme transforme les produits en sommes : c'est son intérêt historique (tables de Napier, 1614).</li></ul>
${box("Résoudre q<sup>n</sup> ≥ k", "On applique ln : n ln q ≥ ln k. <b>Attention</b> : si 0 &lt; q &lt; 1, ln q &lt; 0 et on change le sens de l'inégalité en divisant.", "warn")}`,
  quiz: [["ln(e<sup>5</sup>) =", ["5", "e<sup>5</sup>", "ln 5", "1"], "ln et exp sont réciproques."], ["ln(8) =", ["3 ln 2", "8 ln 1", "ln 2 + 3", "2 ln 3"], "8 = 2³."], ["ln x < 0 lorsque…", ["0 < x < 1", "x > 1", "x < 0", "x > e"], "ln 1 = 0 et ln est croissante."], ["La dérivée de ln x est…", ["1/x", "ln x", "e<sup>x</sup>", "x"], "Pour x > 0."]],
  exos: [{ id: "mc5a", niv: 3, titre: "Seuil avec le logarithme", q: "Un capital de 2 000 € est placé à 3 % par an. À partir de combien d'années dépasse-t-il 3 000 € ?", c: "<p>2 000 × 1,03<sup>n</sup> &gt; 3 000 ⇔ 1,03<sup>n</sup> &gt; 1,5 ⇔ n ln 1,03 &gt; ln 1,5 ⇔ n &gt; ln 1,5 / ln 1,03 ≈ 13,7. Donc <b>au bout de 14 ans</b>.</p>" }] },
{ court: "Primitives et équations diff.", titre: "Primitives et équations différentielles",
  fiche: `
<p>F est une <b>primitive</b> de f sur I si F′ = f. Toutes les primitives de f s'écrivent F + C (C constante).</p>
${T(["f(x)", "Primitive F(x)"], [["a", "a x"], ["x<sup>n</sup>", "x<sup>n+1</sup>/(n+1)"], ["1/x (x > 0)", "ln x"], ["e<sup>x</sup>", "e<sup>x</sup>"], ["e<sup>kx</sup>", "e<sup>kx</sup>/k"], ["u′ e<sup>u</sup>", "e<sup>u</sup>"], ["u′/u (u > 0)", "ln u"]])}
<h3>Équations différentielles</h3>
${box("y′ = a y", "Les solutions sont les fonctions <b>y(t) = C e<sup>at</sup></b>. Avec une condition initiale y(0) = y<sub>0</sub>, on a C = y<sub>0</sub>.")}
${box("y′ = a y + b (a ≠ 0)", "Solution particulière constante : −b/a. Les solutions sont <b>y(t) = C e<sup>at</sup> − b/a</b>. Exemple : refroidissement d'un café (loi de Newton), charge d'un condensateur, évolution d'une population avec apport constant.", "tip")}`,
  quiz: [["Une primitive de 3x² est…", ["x³", "6x", "3x³", "x²"], "Dérivée de x³ = 3x²."], ["Une primitive de 1/x sur ]0 ; +∞[ est…", ["ln x", "−1/x²", "e<sup>x</sup>", "x"], "(ln x)′ = 1/x."], ["Les solutions de y′ = 2y sont…", ["C e<sup>2t</sup>", "2 e<sup>t</sup>", "C e<sup>t/2</sup>", "2t + C"], "y = C e<sup>at</sup>."], ["La solution constante de y′ = −0,5 y + 10 est…", ["20", "10", "−20", "5"], "−b/a = −10/(−0,5) = 20."]],
  exos: [{ id: "mc6a", niv: 3, titre: "Refroidissement", q: "La température θ(t) d'un café (en °C, t en minutes) vérifie θ′ = −0,1 θ + 2, avec θ(0) = 80. 1. Résoudre. 2. Vers quelle température tend le café ?", c: "<p>1. Solution constante : −2/(−0,1) = 20. θ(t) = C e<sup>−0,1t</sup> + 20, et θ(0) = C + 20 = 80 donne C = 60 : <b>θ(t) = 60 e<sup>−0,1t</sup> + 20</b>.</p><p>2. e<sup>−0,1t</sup> → 0 : le café tend vers <b>20 °C</b>, la température de la pièce.</p>" }] },
{ court: "Intégration", titre: "Intégration et calculs d'aires",
  fiche: `
<p>Si f est continue et positive sur [a ; b], <b>∫<sub>a</sub><sup>b</sup> f(x) dx</b> est l'<b>aire</b> (en unités d'aire) du domaine entre la courbe, l'axe des abscisses et les droites x = a et x = b.</p>
${box("Calcul", "Si F est une primitive de f : ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a).")}
<ul><li>Linéarité : ∫(f + g) = ∫f + ∫g et ∫k f = k ∫f.</li><li>Relation de Chasles : ∫<sub>a</sub><sup>b</sup> + ∫<sub>b</sub><sup>c</sup> = ∫<sub>a</sub><sup>c</sup>.</li><li>Si f ≥ g sur [a ; b], l'aire entre les deux courbes vaut ∫<sub>a</sub><sup>b</sup> (f − g).</li><li><b>Valeur moyenne</b> de f sur [a ; b] : (1/(b − a)) ∫<sub>a</sub><sup>b</sup> f(x) dx.</li></ul>
${box("Application : inégalités de revenus", "La courbe de Lorenz L représente la part des revenus détenue par une part de la population. Le <b>coefficient de Gini</b> vaut 2 × ∫<sub>0</sub><sup>1</sup> (x − L(x)) dx : 0 pour l'égalité parfaite, proche de 1 pour une inégalité extrême.", "tip")}`,
  quiz: [["∫<sub>0</sub><sup>2</sup> 3 dx =", ["6", "3", "2", "0"], "Aire d'un rectangle 2 × 3."], ["∫<sub>0</sub><sup>1</sup> x dx =", ["1/2", "1", "2", "0"], "[x²/2] de 0 à 1."], ["La valeur moyenne de f sur [a ; b] est…", ["(1/(b − a)) ∫<sub>a</sub><sup>b</sup> f", "∫<sub>a</sub><sup>b</sup> f", "f(a) + f(b)", "(f(a) + f(b))/2"], "On divise l'intégrale par la longueur."], ["Un coefficient de Gini de 0 correspond à…", ["une égalité parfaite", "une inégalité maximale", "aucune donnée", "une société de deux personnes"], "La courbe de Lorenz est alors la diagonale."]],
  exos: [{ id: "mc7a", niv: 2, titre: "Aire sous une courbe", q: "Calculer l'aire du domaine compris entre la courbe de f(x) = e<sup>x</sup>, l'axe des abscisses et les droites x = 0 et x = 1.", c: "<p>∫<sub>0</sub><sup>1</sup> e<sup>x</sup> dx = e<sup>1</sup> − e<sup>0</sup> = <b>e − 1 ≈ 1,72 unité d'aire</b>.</p>" }] },
{ court: "Lois discrètes", titre: "Lois discrètes : binomiale et géométrique",
  fiche: `
<h3>Variable aléatoire</h3>
<p>Espérance E(X) = Σ x<sub>i</sub> P(X = x<sub>i</sub>) (valeur moyenne sur un grand nombre d'expériences) ; variance V(X) = Σ (x<sub>i</sub> − E(X))² P(X = x<sub>i</sub>) ; écart type σ = √V.</p>
<h3>Loi binomiale B(n ; p)</h3>
<p>On répète n fois, de façon <b>indépendante</b>, une épreuve de Bernoulli (succès de probabilité p). X = nombre de succès.</p>
${box("Formules", "P(X = k) = C(n, k) p<sup>k</sup> (1 − p)<sup>n−k</sup> ; E(X) = np ; V(X) = np(1 − p). C(n, k) se calcule à la calculatrice.")}
<h3>Loi géométrique G(p)</h3>
<p>On répète une épreuve de Bernoulli jusqu'au <b>premier succès</b>. X = rang du premier succès (temps d'attente).</p>
${box("Formules", "P(X = k) = (1 − p)<sup>k−1</sup> p ; P(X &gt; k) = (1 − p)<sup>k</sup> ; E(X) = 1/p. Loi <b>sans mémoire</b> : avoir déjà attendu ne change pas la probabilité d'attendre encore.", "tip")}`,
  quiz: [["X suit B(10 ; 0,3). E(X) =", ["3", "0,3", "10", "7"], "np = 10 × 0,3."], ["Dans une loi géométrique, X représente…", ["le rang du premier succès", "le nombre de succès", "le nombre d'échecs total", "une durée continue"], "C'est un temps d'attente discret."], ["X suit G(0,25). E(X) =", ["4", "0,25", "25", "0,75"], "1/p."], ["Pour appliquer une loi binomiale, les répétitions doivent être…", ["identiques et indépendantes", "dépendantes", "en nombre infini", "de probabilité variable"], "Schéma de Bernoulli."]],
  exos: [] },
{ court: "Lois à densité", titre: "Lois à densité : uniforme et exponentielle",
  fiche: `
<p>Une variable aléatoire <b>continue</b> prend toutes les valeurs d'un intervalle. Sa loi est donnée par une <b>densité</b> f (positive, d'intégrale totale 1) : P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> f(t) dt. P(X = a) = 0.</p>
${box("Loi uniforme sur [a ; b]", "Densité constante 1/(b − a). P(c ≤ X ≤ d) = (d − c)/(b − a) ; E(X) = (a + b)/2. Exemple : heure d'arrivée au hasard entre 8 h et 9 h.")}
${box("Loi exponentielle de paramètre λ > 0", "Densité λ e<sup>−λt</sup> sur [0 ; +∞[. P(X ≤ t) = 1 − e<sup>−λt</sup> ; P(X &gt; t) = e<sup>−λt</sup> ; E(X) = 1/λ. Loi sans mémoire : modélise la durée de vie d'un composant sans usure, ou le temps d'attente entre deux appels.", "tip")}`,
  quiz: [["X suit la loi uniforme sur [0 ; 10]. P(2 ≤ X ≤ 5) =", ["0,3", "0,5", "0,2", "3"], "(5 − 2)/10."], ["X suit la loi exponentielle de paramètre 0,1. E(X) =", ["10", "0,1", "1", "e"], "1/λ."], ["Pour une loi continue, P(X = 3) =", ["0", "1", "dépend de la loi", "0,5"], "Une valeur isolée a une probabilité nulle."], ["P(X > t) pour une loi exponentielle vaut…", ["e<sup>−λt</sup>", "1 − e<sup>−λt</sup>", "λ e<sup>−λt</sup>", "1/λ"], "C'est la probabilité de « survie »."]],
  exos: [] },
{ court: "Statistiques à 2 variables", titre: "Statistiques à deux variables",
  fiche: `
<p>On étudie deux caractères x et y sur une population : <b>nuage de points</b> (x<sub>i</sub> ; y<sub>i</sub>), <b>point moyen</b> G(x̄ ; ȳ).</p>
<h3>Ajustement affine par les moindres carrés</h3>
<p>La droite de régression de y en x, y = ax + b, minimise la somme des carrés des écarts verticaux. Elle passe par G. On obtient a et b à la calculatrice (ou a = cov(x, y)/V(x), b = ȳ − a x̄).</p>
<p>Le <b>coefficient de corrélation</b> r est compris entre −1 et 1 : plus |r| est proche de 1, plus l'ajustement affine est pertinent.</p>
${box("Changement de variable", "Si le nuage a une allure exponentielle, on pose z = ln y : si z est proche d'une fonction affine de x, alors y ≈ e<sup>ax+b</sup>.")}
${box("Corrélation n'est pas causalité", "Deux variables peuvent être corrélées sans lien de cause à effet : une troisième variable peut les expliquer (les ventes de glaces et les noyades augmentent toutes deux l'été).", "warn")}`,
  quiz: [["La droite des moindres carrés passe toujours par…", ["le point moyen G", "l'origine", "le premier point", "le point le plus haut"], "G(x̄ ; ȳ)."], ["Un coefficient de corrélation r = −0,98 indique…", ["une forte corrélation négative", "aucune corrélation", "une faible corrélation", "une erreur"], "|r| proche de 1, pente négative."], ["Pour un nuage d'allure exponentielle, on pose…", ["z = ln y", "z = e<sup>y</sup>", "z = y²", "z = 1/y"], "On se ramène à un ajustement affine."], ["Une forte corrélation prouve-t-elle une causalité ?", ["Non", "Oui", "Seulement si r = 1", "Seulement en économie"], "Il peut exister un facteur caché."]],
  exos: [] },
  ],
  generes: [],
  methode: [
    { titre: "Réussir un devoir de maths complémentaires", html: `<ol><li><b>Lis tout le sujet</b> avant de commencer : les questions s'enchaînent, et un résultat donné (« montrer que… ») peut être utilisé même si tu n'as pas su le démontrer.</li><li><b>Traduis le contexte</b> : « augmente de 5 % » → × 1,05 ; « durée de vie moyenne » → espérance ; « probabilité qu'il fonctionne encore après t ans » → P(X &gt; t).</li><li><b>Justifie</b> : cite la formule ou le théorème utilisé (loi binomiale, car répétitions identiques et indépendantes…).</li><li><b>Vérifie à la calculatrice</b> (tableau de valeurs, courbe, menu probabilités) et arrondis comme demandé.</li><li><b>Conclus</b> chaque question par une phrase qui répond dans le contexte.</li></ol>` },
    { titre: "Calculatrice : les menus utiles", html: `<ul><li><b>Suites</b> : définir u(n+1) en fonction de u(n), afficher le tableau pour trouver un seuil.</li><li><b>Loi binomiale</b> : BinomFdp (P(X = k)) et BinomFRép (P(X ≤ k)).</li><li><b>Intégrale</b> : fonction ∫ ou fnInt pour vérifier un calcul.</li><li><b>Statistiques</b> : listes, puis régression linéaire (RegLin) pour a, b et r.</li></ul>` },
    { titre: "Rédiger une démonstration par récurrence", html: `<p>On note P(n) la propriété. <b>Initialisation</b> : on vérifie P(0) (ou P(1)). <b>Hérédité</b> : « Supposons P(n) vraie pour un certain entier n et montrons que P(n+1) est vraie. » <b>Conclusion</b> : « Par récurrence, P(n) est vraie pour tout entier naturel n. »</p>` },
  ],
  sujets: [
    { titre: "Évolution d'un abonnement", type: "Sujet type", q: "<p>Une plateforme compte 50 000 abonnés en janvier 2027. Chaque mois, 10 % des abonnés se désabonnent et 8 000 nouveaux s'inscrivent. On note u<sub>n</sub> le nombre d'abonnés n mois après janvier 2027 (u<sub>0</sub> = 50 000).</p><ol><li>Justifier que u<sub>n+1</sub> = 0,9 u<sub>n</sub> + 8 000.</li><li>On pose v<sub>n</sub> = u<sub>n</sub> − 80 000. Montrer que (v<sub>n</sub>) est géométrique.</li><li>En déduire u<sub>n</sub> en fonction de n et la limite de u<sub>n</sub>.</li><li>À partir de quel mois la plateforme dépassera-t-elle 75 000 abonnés ?</li><li>Le nombre de visionnages mensuels d'un abonné suit la loi binomiale B(20 ; 0,6) (20 soirées, probabilité 0,6 de regarder chaque soir). Calculer P(X = 12) et E(X).</li></ol>",
      c: "<ol><li>Il reste 90 % des abonnés, auxquels s'ajoutent 8 000 inscriptions.</li><li>v<sub>n+1</sub> = 0,9 u<sub>n</sub> + 8 000 − 80 000 = 0,9 (u<sub>n</sub> − 80 000) = 0,9 v<sub>n</sub> : géométrique de raison 0,9, v<sub>0</sub> = −30 000.</li><li>u<sub>n</sub> = 80 000 − 30 000 × 0,9<sup>n</sup>. Comme 0,9<sup>n</sup> → 0, <b>u<sub>n</sub> → 80 000</b>.</li><li>80 000 − 30 000 × 0,9<sup>n</sup> &gt; 75 000 ⇔ 0,9<sup>n</sup> &lt; 1/6 ⇔ n &gt; ln(1/6)/ln 0,9 ≈ 17,0. Donc à partir de <b>n = 18</b>, soit juillet 2028.</li><li>P(X = 12) = C(20, 12) × 0,6<sup>12</sup> × 0,4<sup>8</sup> ≈ <b>0,180</b> ; E(X) = 20 × 0,6 = <b>12 visionnages</b>.</li></ol>" },
    { titre: "Durée de vie d'une batterie", type: "Sujet type", q: "<p>La durée de vie T (en années) d'une batterie suit une loi exponentielle de paramètre λ = 0,2.</p><ol><li>Calculer la durée de vie moyenne.</li><li>Calculer la probabilité qu'une batterie dure plus de 5 ans.</li><li>Sachant qu'une batterie a déjà fonctionné 3 ans, quelle est la probabilité qu'elle fonctionne encore au moins 5 ans de plus ?</li><li>Le coût de production C(x) = 0,5 x² + 2x + 100 (x en centaines de batteries). Calculer la valeur moyenne de C sur [0 ; 10].</li></ol>",
      c: "<ol><li>E(T) = 1/0,2 = <b>5 ans</b>.</li><li>P(T &gt; 5) = e<sup>−0,2×5</sup> = e<sup>−1</sup> ≈ <b>0,368</b>.</li><li>Loi sans mémoire : P<sub>T&gt;3</sub>(T &gt; 8) = P(T &gt; 5) ≈ <b>0,368</b>.</li><li>(1/10) ∫<sub>0</sub><sup>10</sup> (0,5x² + 2x + 100) dx = (1/10) [x³/6 + x² + 100x]<sub>0</sub><sup>10</sup> = (1/10)(1000/6 + 100 + 1000) ≈ <b>126,7</b>.</li></ol>" },
  ],
});

/* ------------------------------------------------------------ générateurs */
const MA = MATIERES[MATIERES.length - 1];
MA.generes = [
  { titre: "Suite géométrique : terme et somme", niv: 1, ch: 0, gen() {
      const u0 = R(2, 20) * 100, t = pick([2, 3, 4, 5, 6, 8, -5, -10]), q = 1 + t / 100, n = R(5, 15), un = u0 * q ** n, S = u0 * (1 - q ** (n + 1)) / (1 - q);
      return { q: `Une quantité vaut ${u0} au départ et ${t > 0 ? "augmente" : "baisse"} de ${Math.abs(t)} % par an. On note u<sub>n</sub> sa valeur après n années. 1. Donner u<sub>n</sub> en fonction de n. 2. Calculer u<sub>${n}</sub>. 3. Calculer u<sub>0</sub> + u<sub>1</sub> + … + u<sub>${n}</sub>.`,
        c: `<p>1. Suite géométrique de raison q = ${fr(q, 2)} : <b>u<sub>n</sub> = ${u0} × ${fr(q, 2)}<sup>n</sup></b>.</p><p>2. u<sub>${n}</sub> = ${u0} × ${fr(q, 2)}<sup>${n}</sup> ≈ <b>${f2(un)}</b>.</p><p>3. Il y a ${n + 1} termes : S = ${u0} × (1 − ${fr(q, 2)}<sup>${n + 1}</sup>) / (1 − ${fr(q, 2)}) ≈ <b>${f2(S)}</b>.</p>` };
  } },
  { titre: "Suite arithmético-géométrique", niv: 2, ch: 0, gen() {
      const a = pick([0.5, 0.6, 0.7, 0.8, 0.9]), b = R(2, 20) * 10, u0 = R(0, 30) * 10, l = b / (1 - a);
      return { q: `u<sub>0</sub> = ${u0} et u<sub>n+1</sub> = ${fr(a, 1)} u<sub>n</sub> + ${b}. 1. Déterminer le réel ℓ tel que ℓ = ${fr(a, 1)} ℓ + ${b}. 2. Exprimer u<sub>n</sub> en fonction de n. 3. Donner la limite de (u<sub>n</sub>).`,
        c: `<p>1. ℓ (1 − ${fr(a, 1)}) = ${b}, donc <b>ℓ = ${fr(l, 2)}</b>.</p><p>2. v<sub>n</sub> = u<sub>n</sub> − ℓ est géométrique de raison ${fr(a, 1)}, v<sub>0</sub> = ${fr(u0 - l, 2)}. Donc <b>u<sub>n</sub> = ${fr(u0 - l, 2)} × ${fr(a, 1)}<sup>n</sup> + ${fr(l, 2)}</b>.</p><p>3. Comme 0 &lt; ${fr(a, 1)} &lt; 1, ${fr(a, 1)}<sup>n</sup> → 0 : <b>u<sub>n</sub> → ${fr(l, 2)}</b>.</p>` };
  } },
  { titre: "Seuil avec le logarithme", niv: 2, ch: 4, gen() {
      const u0 = R(1, 9) * 1000, t = R(2, 8), k = pick([1.5, 2, 2.5, 3]), q = 1 + t / 100, n = Math.log(k) / Math.log(q);
      return { q: `Un capital de ${u0} € est placé à ${t} % par an (intérêts composés). Au bout de combien d'années aura-t-il été multiplié par ${fr(k, 1)} ?`,
        c: `<p>${u0} × ${fr(q, 2)}<sup>n</sup> ≥ ${fr(k * u0, 0)} ⇔ ${fr(q, 2)}<sup>n</sup> ≥ ${fr(k, 1)} ⇔ n ln ${fr(q, 2)} ≥ ln ${fr(k, 1)} ⇔ n ≥ ln ${fr(k, 1)} / ln ${fr(q, 2)} ≈ ${f2(n)} (ln ${fr(q, 2)} &gt; 0, le sens ne change pas).</p><p>Il faut <b>${Math.ceil(n)} ans</b>.</p>` };
  } },
  { titre: "Dérivée et variations avec l'exponentielle", niv: 2, ch: 3, gen() {
      const a = pick([1, 2, -1, -2, 3]), b = R(-5, 5), s = a + b;
      return { q: `f(x) = (${mono(a, "x", true)}${b ? sg(b) : ""}) e<sup>x</sup>. Calculer f′(x) et étudier le sens de variation de f.`,
        c: `<p>Produit u v avec u = ${mono(a, "x", true)}${b ? sg(b) : ""} (u′ = ${a}) et v = e<sup>x</sup> (v′ = e<sup>x</sup>) : f′(x) = ${a} e<sup>x</sup> + (${mono(a, "x", true)}${b ? sg(b) : ""}) e<sup>x</sup> = <b>(${mono(a, "x", true)}${s ? sg(s) : ""}) e<sup>x</sup></b>.</p><p>e<sup>x</sup> &gt; 0, donc f′ a le signe de ${mono(a, "x", true)}${s ? sg(s) : ""}, qui s'annule en x = ${fr(-s / a, 2)}. ${a > 0 ? "f est décroissante puis croissante : minimum" : "f est croissante puis décroissante : maximum"} en x = ${fr(-s / a, 2)}.</p>` };
  } },
  { titre: "Équation avec exponentielle et logarithme", niv: 1, ch: 4, gen() {
      const a = R(2, 9), k = pick([0.5, 1, 2, 3, -0.5, -1]), c = R(10, 90), x = Math.log(c / a) / k;
      return { q: `Résoudre ${a} e<sup>${fr(k, 1)}x</sup> = ${c}.`, c: `<p>e<sup>${fr(k, 1)}x</sup> = ${c}/${a}, donc ${fr(k, 1)}x = ln(${c}/${a}), d'où <b>x = ln(${c}/${a}) / ${fr(k, 1)} ≈ ${f3(x)}</b>.</p>` };
  } },
  { titre: "Équation différentielle y′ = ay + b", niv: 3, ch: 5, gen() {
      const a = pick([-0.1, -0.2, -0.5, -0.05, 0.1]), b = R(1, 10), y0 = R(0, 100), p = -b / a, C = y0 - p;
      return { q: `Résoudre y′ = ${fr(a, 2)} y + ${b} avec y(0) = ${y0}, puis donner la limite de y(t) en +∞.`,
        c: `<p>Solution constante : −b/a = −${b}/(${fr(a, 2)}) = ${f2(p)}. Solutions : y(t) = C e<sup>${fr(a, 2)}t</sup> + ${f2(p)}.</p><p>y(0) = C + ${f2(p)} = ${y0} donne C = ${f2(C)} : <b>y(t) = ${f2(C)} e<sup>${fr(a, 2)}t</sup> + ${f2(p)}</b>.</p><p>${a < 0 ? `Comme ${fr(a, 2)} &lt; 0, e<sup>${fr(a, 2)}t</sup> → 0 : <b>y(t) → ${f2(p)}</b>.` : `Comme ${fr(a, 2)} &gt; 0, e<sup>${fr(a, 2)}t</sup> → +∞ : y(t) tend vers ${C > 0 ? "+∞" : C < 0 ? "−∞" : f2(p)}.`}</p>` };
  } },
  { titre: "Intégrale d'un polynôme", niv: 2, ch: 6, gen() {
      const al = pick([1, 2, 3, -1, 6]), be = R(-4, 4), ga = R(0, 10), a = R(0, 2), b = a + R(1, 3);
      const F = x => al * x ** 3 / 3 + be * x ** 2 / 2 + ga * x, I = F(b) - F(a);
      return { q: `Calculer ∫<sub>${a}</sub><sup>${b}</sup> (${mono(al, "x²", true)}${mono(be, "x", false)}${ga ? sg(ga) : ""}) dx.`,
        c: `<p>Une primitive : F(x) = ${fr(al / 3, 3)} x³${be ? " " + (be < 0 ? "−" : "+") + " " + fr(Math.abs(be) / 2, 1) + " x²" : ""}${ga ? " + " + ga + "x" : ""}.</p><p>∫ = F(${b}) − F(${a}) = ${f3(F(b))} − ${f3(F(a))} ≈ <b>${f3(I)}</b>.</p>` };
  } },
  { titre: "Loi binomiale", niv: 2, ch: 7, gen() {
      const n = R(8, 20), p = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7]), k = R(1, Math.min(n - 1, Math.round(n * p) + 3)), P = C(n, k) * p ** k * (1 - p) ** (n - k);
      return { q: `Dans un lot, chaque article est défectueux avec la probabilité ${fr(p, 2)}, indépendamment des autres. On prélève ${n} articles et X compte les articles défectueux. 1. Quelle loi suit X ? 2. Calculer P(X = ${k}). 3. Calculer E(X) et V(X).`,
        c: `<p>1. ${n} répétitions identiques et indépendantes d'une épreuve de Bernoulli de succès « défectueux » (p = ${fr(p, 2)}) : <b>X suit B(${n} ; ${fr(p, 2)})</b>.</p><p>2. P(X = ${k}) = C(${n}, ${k}) × ${fr(p, 2)}<sup>${k}</sup> × ${fr(1 - p, 2)}<sup>${n - k}</sup> = ${C(n, k)} × … ≈ <b>${f4(P)}</b>.</p><p>3. E(X) = ${n} × ${fr(p, 2)} = <b>${f2(n * p)}</b> ; V(X) = ${n} × ${fr(p, 2)} × ${fr(1 - p, 2)} = <b>${f2(n * p * (1 - p))}</b>.</p>` };
  } },
  { titre: "Loi géométrique", niv: 2, ch: 7, gen() {
      const p = pick([0.1, 0.15, 0.2, 0.25, 0.3]), k = R(2, 8), m = R(3, 10);
      return { q: `À chaque tentative, un joueur réussit un tir avec la probabilité ${fr(p, 2)}, indépendamment. X est le rang du premier tir réussi. 1. Calculer P(X = ${k}). 2. Calculer P(X &gt; ${m}). 3. Combien de tirs faut-il en moyenne ?`,
        c: `<p>X suit la loi géométrique G(${fr(p, 2)}).</p><p>1. P(X = ${k}) = ${fr(1 - p, 2)}<sup>${k - 1}</sup> × ${fr(p, 2)} ≈ <b>${f4((1 - p) ** (k - 1) * p)}</b>.</p><p>2. P(X &gt; ${m}) = ${fr(1 - p, 2)}<sup>${m}</sup> ≈ <b>${f4((1 - p) ** m)}</b> (les ${m} premiers tirs sont ratés).</p><p>3. E(X) = 1/${fr(p, 2)} ≈ <b>${f2(1 / p)} tirs</b>.</p>` };
  } },
  { titre: "Loi exponentielle", niv: 2, ch: 8, gen() {
      const lam = pick([0.05, 0.1, 0.125, 0.2, 0.25, 0.5]), t1 = R(1, 10), t2 = t1 + R(2, 10);
      return { q: `La durée de vie T (en années) d'un appareil suit la loi exponentielle de paramètre λ = ${fr(lam, 3)}. 1. Calculer la durée de vie moyenne. 2. Calculer P(T ≤ ${t1}). 3. Calculer P(${t1} ≤ T ≤ ${t2}).`,
        c: `<p>1. E(T) = 1/λ = <b>${f2(1 / lam)} ans</b>.</p><p>2. P(T ≤ ${t1}) = 1 − e<sup>−${fr(lam, 3)}×${t1}</sup> ≈ <b>${f4(1 - Math.exp(-lam * t1))}</b>.</p><p>3. P(${t1} ≤ T ≤ ${t2}) = e<sup>−${fr(lam, 3)}×${t1}</sup> − e<sup>−${fr(lam, 3)}×${t2}</sup> ≈ <b>${f4(Math.exp(-lam * t1) - Math.exp(-lam * t2))}</b>.</p>` };
  } },
  { titre: "Loi uniforme", niv: 1, ch: 8, gen() {
      const a = R(0, 20), b = a + R(10, 60), c = a + R(1, Math.floor((b - a) / 2)), d = c + R(1, b - c);
      return { q: `Un bus passe toutes les ${b - a} minutes. Ton temps d'attente X (en minutes, compté à partir de ${a}) suit la loi uniforme sur [${a} ; ${b}]. 1. Calculer P(${c} ≤ X ≤ ${d}). 2. Calculer E(X).`,
        c: `<p>1. P = (${d} − ${c}) / (${b} − ${a}) = ${d - c}/${b - a} ≈ <b>${f3((d - c) / (b - a))}</b>.</p><p>2. E(X) = (${a} + ${b}) / 2 = <b>${fr((a + b) / 2, 1)}</b>.</p>` };
  } },
  { titre: "Ajustement affine (moindres carrés)", niv: 3, ch: 9, gen() {
      const a0 = R(2, 9), b0 = R(5, 40), xs = [1, 2, 3, 4, 5], ys = xs.map(x => a0 * x + b0 + R(-3, 3));
      const mx = 3, my = ys.reduce((s, v) => s + v, 0) / 5, cov = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) / 5, vx = 2;
      const a = cov / vx, b = my - a * mx;
      return { q: `Les ventes y (en milliers) d'un produit sur 5 années (rang x) sont :${T(["x", "1", "2", "3", "4", "5"], [["y", ...ys]])}1. Calculer les coordonnées du point moyen G. 2. Déterminer la droite de régression de y en x (coefficients arrondis à 0,01). 3. Estimer les ventes pour x = 7.`,
        c: `<p>1. x̄ = 3 et ȳ = ${f2(my)} : <b>G(3 ; ${f2(my)})</b>.</p><p>2. À la calculatrice (ou a = cov(x, y)/V(x) = ${f3(cov)}/2) : <b>y = ${f2(a)} x + ${f2(b)}</b>.</p><p>3. y ≈ ${f2(a)} × 7 + ${f2(b)} ≈ <b>${f2(7 * a + b)} milliers</b>, si la tendance se poursuit.</p>` };
  } },
];
/* exercices écrits supplémentaires (lois et statistiques) */
MA.chapitres[7].exos.push({ id: "mc8a", niv: 3, titre: "Contrôle qualité", q: "Une machine produit 2 % de pièces défectueuses. On prélève 50 pièces (tirage assimilé à un tirage avec remise). 1. Quelle est la loi du nombre X de pièces défectueuses ? 2. Calculer P(X = 0) et P(X ≥ 1). 3. Combien de pièces défectueuses en moyenne ?", c: "<p>1. X suit B(50 ; 0,02).</p><p>2. P(X = 0) = 0,98<sup>50</sup> ≈ <b>0,364</b> ; P(X ≥ 1) = 1 − 0,364 ≈ <b>0,636</b>.</p><p>3. E(X) = 50 × 0,02 = <b>1 pièce</b>.</p>" });
MA.chapitres[8].exos.push({ id: "mc9a", niv: 2, titre: "Propriété sans mémoire", q: "T suit une loi exponentielle de paramètre λ. Montrer que P<sub>T&gt;s</sub>(T &gt; s + t) = P(T &gt; t).", c: "<p>P<sub>T&gt;s</sub>(T &gt; s + t) = P(T &gt; s + t)/P(T &gt; s) = e<sup>−λ(s+t)</sup>/e<sup>−λs</sup> = e<sup>−λt</sup> = P(T &gt; t). La durée déjà écoulée n'influence pas la suite : <b>absence de mémoire</b>.</p>" });
MA.chapitres[9].exos.push({ id: "mc10a", niv: 2, titre: "Corrélation et causalité", q: "Dans plusieurs pays, on observe une forte corrélation (r = 0,9) entre le nombre de téléviseurs par habitant et l'espérance de vie. Peut-on conclure que posséder un téléviseur allonge la vie ?", c: "<p>Non. Une corrélation n'est pas une causalité. Les deux variables dépendent d'un <b>facteur commun</b> : le niveau de richesse du pays, qui augmente à la fois l'équipement des ménages et l'accès aux soins.</p>" });
}
