/* ==========================================================================
   Révisions Bac 2027 — moteur du site
   Chaque matière est décrite dans data/<matiere>.js et ajoutée à MATIERES.
   ========================================================================== */
{
const app = document.getElementById("app");
const store = {
  get(k, d) { try { const v = localStorage.getItem("bac-" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("bac-" + k, JSON.stringify(v)); } catch (e) {} }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const { R, shuf } = OUT;
const NIV = { 1: "Facile", 2: "Moyen", 3: "Type bac" };
const TABS = [["fiches", "Fiches"], ["exos", "Exercices"], ["quiz", "Quiz"], ["methode", "Méthode"], ["sujets", "Sujets type bac"], ["vocab", "Vocabulaire"]];
const getM = cle => MATIERES.find(m => m.cle === cle);
const etat = {};   // état en mémoire par matière (chapitre ouvert, filtres…)
const st = m => etat[m.cle] || (etat[m.cle] = { fiche: store.get("fiche-" + m.cle, 0), exCh: "all", exLvl: "all", quiz: null, vTheme: 0, vSens: "ab" });

/* ------------------------------------------------------------ navigation */
const ORDRE = LISTE_MATIERES.map(x => x.cle).filter(getM);
document.getElementById("navlinks").innerHTML = `<a href="#accueil">Accueil</a>` + ORDRE.map(c => `<a href="#${c}">${getM(c).court || getM(c).nom}</a>`).join("");
function route() {
  const h = location.hash.slice(1) || "accueil", [cle, tab] = h.split("-");
  const m = getM(cle);
  document.querySelectorAll("#navlinks a").forEach(a => a.getAttribute("href") === "#" + (m ? cle : "accueil") ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  if (m) renderMatiere(m, TABS.some(t => t[0] === tab) ? tab : "fiches"); else renderHome();
}
window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });

/* ------------------------------------------------------------ accueil */
function joursAvant(iso) { return Math.ceil((new Date(iso) - new Date()) / 864e5); }
function progression(m) {
  const lus = store.get("lu", {})[m.cle] || [], best = store.get("best", {});
  const n = m.chapitres.length, q = m.chapitres.map((_, i) => best[m.cle + "-" + i]).filter(v => v != null);
  return { lus: lus.length, n, quiz: q.length ? Math.round(q.reduce((s, v) => s + v, 0) / q.length) : null };
}
function renderHome() {
  const jPhilo = joursAvant("2027-06-14T08:00:00+02:00"), jSpe = joursAvant("2027-06-16T08:00:00+02:00");
  app.innerHTML = `
  <section class="view on">
    <div class="hero">
      <p class="eyebrow">Terminale générale · Bac 2027</p>
      <h1>Réviser le bac,<br>une matière à la fois.</h1>
      <p class="lead">Des fiches, des exercices tirés au hasard, des quiz, la méthode de chaque épreuve et des sujets type bac avec leur corrigé.</p>
      <div class="countdown">
        <div class="card cd"><span class="stat">${jPhilo > 0 ? jPhilo : 0}</span><span>jours avant la philo<br><small>lundi 14 juin 2027</small></span></div>
        <div class="card cd"><span class="stat">${jSpe > 0 ? jSpe : 0}</span><span>jours avant les spécialités<br><small>à partir du mercredi 16 juin 2027</small></span></div>
        <div class="card cd"><span class="stat">21/06</span><span>début du Grand oral<br><small>jusqu'au 2 juillet 2027</small></span></div>
      </div>
    </div>
    <h2>Les matières</h2>
    <div class="grid mat-grid">${LISTE_MATIERES.map(x => {
      const m = getM(x.cle);
      if (!m) return `<div class="card mat off"><h3>${x.nom}</h3><p>${x.sous}</p><span class="lvl alea">Bientôt</span></div>`;
      const p = progression(m);
      return `<a class="card mat" href="#${m.cle}"><h3>${m.nom}</h3><p>${m.sous}</p>
        <div class="prog"><i style="width:${100 * p.lus / p.n}%"></i></div>
        <p class="count">${p.lus}/${p.n} fiches lues${p.quiz != null ? ` · quiz ${p.quiz} %` : ""}</p></a>`;
    }).join("")}</div>
  </section>`;
}

/* ------------------------------------------------------------ page matière */
function renderMatiere(m, tab) {
  if (tab === "vocab" && !m.vocab) tab = "fiches";
  const tabs = TABS.filter(([k]) => k !== "vocab" || m.vocab);
  app.innerHTML = `
  <section class="view on matiere">
    <header class="mhead">
      <p class="eyebrow">${m.sous}</p>
      <h1>${m.nom}</h1>
      <p class="lead">${m.intro}</p>
      <details class="epreuve"><summary>L'épreuve en bref</summary><div>${m.epreuve}</div></details>
    </header>
    <div class="seg" role="tablist">${tabs.map(([k, l]) => `<a href="#${m.cle}-${k}" role="tab" ${k === tab ? 'aria-selected="true"' : ""}>${l}</a>`).join("")}</div>
    <div id="pane"></div>
  </section>`;
  ({ fiches, exos, quiz, methode, sujets, vocab })[tab](m, document.getElementById("pane"));
}
const lbl = m => m.labelChap || "Chapitre";

/* ---- fiches */
function fiches(m, el) {
  const s = st(m), i = Math.min(s.fiche, m.chapitres.length - 1), c = m.chapitres[i];
  const lus = store.get("lu", {}), mesLus = lus[m.cle] || [];
  el.innerHTML = `<div class="layout">
    <div class="side">${m.chapitres.map((c, k) => `<button class="chip" type="button" data-i="${k}" aria-pressed="${k === i}">${mesLus.includes(k) ? "✓ " : ""}${k + 1}. ${c.court || c.titre}</button>`).join("")}</div>
    <article class="card fiche on"><p class="eyebrow">${lbl(m)} ${i + 1}</p><h2>${c.titre}</h2>${c.fiche}
      <label class="lu"><input type="checkbox" id="lu" ${mesLus.includes(i) ? "checked" : ""}> J'ai lu et compris cette fiche</label>
      <div class="row" style="margin-top:14px"><button class="btn" type="button" id="goEx">S'entraîner sur ce ${lbl(m).toLowerCase()}</button><button class="btn ghost" type="button" id="goQz">Faire le quiz</button></div>
    </article></div>`;
  el.querySelector(".side").onclick = e => { const b = e.target.closest(".chip"); if (b) { s.fiche = +b.dataset.i; store.set("fiche-" + m.cle, s.fiche); fiches(m, el); window.scrollTo({ top: 0 }); } };
  el.querySelector("#lu").onchange = e => { const L = new Set(mesLus); e.target.checked ? L.add(i) : L.delete(i); lus[m.cle] = [...L]; store.set("lu", lus); fiches(m, el); };
  el.querySelector("#goEx").onclick = () => { s.exCh = i; location.hash = m.cle + "-exos"; };
  el.querySelector("#goQz").onclick = () => { s.quiz = { ch: i }; location.hash = m.cle + "-quiz"; };
}

/* ---- exercices tirés au hasard */
function exos(m, el) {
  const s = st(m);
  el.innerHTML = `
    <div class="chips" id="exCh"><button class="chip" type="button" data-c="all">Tout le programme</button>${m.chapitres.map((c, k) => `<button class="chip" type="button" data-c="${k}">${c.court || c.titre}</button>`).join("")}</div>
    <div class="row center exctl">
      <div class="chips" id="exLvl">${[["all", "Tous niveaux"], ["1", "Facile"], ["2", "Moyen"], ["3", "Type bac"]].map(([v, l]) => `<button class="chip small" type="button" data-l="${v}">${l}</button>`).join("")}</div>
      <label class="cnt">Nombre <select id="exN"><option>3</option><option selected>5</option><option>8</option></select></label>
      <button class="btn" type="button" id="exGo">Nouvelle série</button>
    </div>
    <p class="exinfo" id="exInfo"></p><div id="exList"></div>`;
  const draw = () => {
    el.querySelectorAll("#exCh .chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.c === String(s.exCh)));
    el.querySelectorAll("#exLvl .chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === String(s.exLvl)));
    const n = +el.querySelector("#exN").value, okL = e => s.exLvl === "all" || e.niv === +s.exLvl, okC = k => s.exCh === "all" || k === +s.exCh;
    const ecrits = m.chapitres.flatMap((c, k) => okC(k) ? c.exos.map(e => ({ ...e, ch: k })) : []).filter(okL);
    const generes = (m.generes || []).filter(g => (g.ch == null || okC(g.ch)) && okL(g));
    const seenAll = store.get("seen", {}); let seen = seenAll[m.cle] || [], reset = false;
    const wantE = generes.length ? Math.min(Math.ceil(n * 0.6), ecrits.length) : Math.min(n, ecrits.length);
    let unseen = ecrits.filter(e => !seen.includes(e.id));
    if (unseen.length < wantE) { seen = seen.filter(id => !ecrits.some(e => e.id === id)); unseen = ecrits; reset = true; }
    const chosen = shuf(unseen).slice(0, wantE), serie = chosen.map(e => ({ ...e, alea: false }));
    const gens = shuf(generes); let k = 0;
    while (serie.length < n && gens.length && k < Math.min(n, gens.length * 2)) { const g = gens[k++ % gens.length], x = g.gen(); serie.push({ titre: g.titre, niv: g.niv, ch: g.ch, q: x.q, c: x.c, alea: true }); }
    const rest = shuf(ecrits.filter(e => !chosen.includes(e)));
    while (serie.length < n && rest.length) serie.push({ ...rest.pop(), alea: false });
    if (serie.length < n && (s.exLvl === "all" || s.exLvl === "1")) {   // complément : questions de cours tirées des quiz
      const qc = shuf(m.chapitres.flatMap((c, k) => okC(k) ? c.quiz.map(z => ({ z, k })) : []));
      while (serie.length < n && qc.length) { const { z, k } = qc.pop(); serie.push({ titre: "Question de cours", niv: 1, ch: k, q: z[0], c: `<p><b>${z[1][0]}</b></p><p>${z[2]}</p>`, alea: true }); }
    }
    serie.sort((a, b) => a.niv - b.niv);
    seenAll[m.cle] = [...new Set([...seen, ...chosen.map(e => e.id)])]; store.set("seen", seenAll);
    const tot = m.chapitres.reduce((a, c) => a + c.exos.length, 0);
    el.querySelector("#exInfo").innerHTML = `${tot} exercices rédigés et ${(m.generes || []).length} modèles à valeurs aléatoires dans cette matière. Tu as déjà vu ${seenAll[m.cle].length} exercices rédigés.` + (reset ? " <b>Tu as fait le tour de cette sélection : le tirage recommence.</b>" : "");
    el.querySelector("#exList").innerHTML = serie.length ? serie.map((x, i) => `
      <article class="card exo"><div class="exo-head"><h3>Exercice ${i + 1} · ${x.titre}</h3><div class="badges"><span class="lvl l${x.niv}">${NIV[x.niv]}</span>${x.alea ? `<span class="lvl alea">Valeurs aléatoires</span>` : ""}</div></div>
      ${x.ch != null ? `<p class="exch">${m.chapitres[x.ch].court || m.chapitres[x.ch].titre}</p>` : ""}
      <div class="q">${x.q}</div><details class="corr"><summary>Voir la correction</summary><div class="sol">${x.c}</div></details></article>`).join("")
      + `<div class="row center" style="margin-top:22px"><button class="btn" type="button" id="exAgain">Nouvelle série</button></div>`
      : `<div class="card"><p>Pas encore d'exercice de ce niveau ici. Choisis un autre niveau.</p></div>`;
    const a = el.querySelector("#exAgain"); if (a) a.onclick = () => { draw(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  };
  el.querySelector("#exCh").onclick = e => { const b = e.target.closest(".chip"); if (b) { s.exCh = b.dataset.c === "all" ? "all" : +b.dataset.c; draw(); } };
  el.querySelector("#exLvl").onclick = e => { const b = e.target.closest(".chip"); if (b) { s.exLvl = b.dataset.l; draw(); } };
  el.querySelector("#exGo").onclick = draw; el.querySelector("#exN").onchange = draw;
  draw();
}

/* ---- quiz */
function quiz(m, el) {
  const s = st(m), best = store.get("best", {});
  el.innerHTML = `<div class="chips" id="qzCh">${m.chapitres.map((c, k) => `<button class="chip" type="button" data-c="${k}">${c.court || c.titre}${best[m.cle + "-" + k] != null ? ` · ${best[m.cle + "-" + k]} %` : ""}</button>`).join("")}<button class="chip" type="button" data-c="mix">Mélange de 10 questions</button></div>
    <div class="card" id="qzBox"><p>Choisis un ${lbl(m).toLowerCase()} pour commencer, ou fais le mélange.</p></div>`;
  const box = el.querySelector("#qzBox");
  let qs = [], qi = 0, ok = 0, ch = null;
  const start = c => {
    ch = c; qi = 0; ok = 0;
    qs = c === "mix" ? shuf(m.chapitres.flatMap(x => x.quiz)).slice(0, 10) : shuf(m.chapitres[c].quiz);
    el.querySelectorAll("#qzCh .chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.c === String(c)));
    show();
  };
  const show = () => {
    if (qi >= qs.length) return end();
    const [q, opts, ex] = qs[qi], o = shuf(opts.map((t, k) => ({ t, good: k === 0 })));
    box.innerHTML = `<div class="qhead"><span>${ch === "mix" ? "Mélange" : esc(m.chapitres[ch].court || m.chapitres[ch].titre)}</span><span>Question ${qi + 1} / ${qs.length} · ${ok} bonne(s)</span></div><div class="prog"><i style="width:${100 * qi / qs.length}%"></i></div><h3>${q}</h3><div class="opts">${o.map((x, k) => `<button class="opt" type="button" data-k="${k}">${x.t}</button>`).join("")}</div><div class="fb" id="qFb"></div>`;
    box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const k = +b.dataset.k, good = o[k].good; if (good) ok++;
      box.querySelectorAll(".opt").forEach((bb, j) => { bb.disabled = true; if (o[j].good) bb.classList.add("good"); else if (j === k) bb.classList.add("bad"); });
      const fb = box.querySelector("#qFb"); fb.className = "fb " + (good ? "ok" : "ko");
      fb.innerHTML = `<b>${good ? "Bonne réponse !" : "Raté."}</b><span>${ex}</span><button class="btn" type="button" id="qNx" style="margin-top:10px">${qi + 1 < qs.length ? "Question suivante" : "Voir mon score"}</button>`;
      const nx = box.querySelector("#qNx"); nx.onclick = () => { qi++; show(); }; nx.focus();
    });
  };
  const end = () => {
    const pct = Math.round(100 * ok / qs.length);
    if (ch !== "mix") { const b = store.get("best", {}); b[m.cle + "-" + ch] = Math.max(b[m.cle + "-" + ch] || 0, pct); store.set("best", b); }
    box.innerHTML = `<div class="stat">${ok} / ${qs.length}</div><p>${pct >= 80 ? "Excellent, c'est maîtrisé." : pct >= 50 ? "Pas mal ! Relis la fiche pour combler les trous." : "Relis la fiche, puis recommence."}</p><div class="row"><button class="btn" type="button" id="qAg">Recommencer</button>${ch !== "mix" ? `<button class="btn ghost" type="button" id="qFi">Revoir la fiche</button>` : ""}</div>`;
    box.querySelector("#qAg").onclick = () => start(ch);
    const f = box.querySelector("#qFi"); if (f) f.onclick = () => { s.fiche = ch; location.hash = m.cle + "-fiches"; };
  };
  el.querySelector("#qzCh").onclick = e => { const b = e.target.closest(".chip"); if (b) start(b.dataset.c === "mix" ? "mix" : +b.dataset.c); };
  if (s.quiz) { start(s.quiz.ch); s.quiz = null; }
}

/* ---- méthode */
function methode(m, el) {
  el.innerHTML = `<div class="stack">${m.methode.map((x, k) => `<details class="card meth" ${k === 0 ? "open" : ""}><summary><h3>${x.titre}</h3></summary><div>${x.html}</div></details>`).join("")}</div>`;
}

/* ---- sujets type bac */
function sujets(m, el) {
  el.innerHTML = `<p class="exinfo">Ces sujets ont été écrits pour l'entraînement, au format de l'épreuve. Fais-les en temps limité, puis compare avec le corrigé.</p>
    <div class="stack">${m.sujets.map((x, k) => `<article class="card exo"><div class="exo-head"><h3>Sujet ${k + 1} · ${x.titre}</h3><div class="badges"><span class="lvl l3">${x.type}</span></div></div><div class="q">${x.q}</div><details class="corr"><summary>Voir le corrigé</summary><div class="sol">${x.c}</div></details></article>`).join("")}</div>`;
}

/* ---- vocabulaire (cartes) */
function vocab(m, el) {
  const s = st(m), V = m.vocab;
  el.innerHTML = `<div class="chips" id="vTh">${V.map((t, k) => `<button class="chip" type="button" data-t="${k}">${t.theme}</button>`).join("")}</div>
    <div class="row center exctl"><div class="chips" id="vSens"><button class="chip small" type="button" data-s="ab">${m.vocabSens[0]}</button><button class="chip small" type="button" data-s="ba">${m.vocabSens[1]}</button></div><button class="btn ghost" type="button" id="vList">Voir toute la liste</button></div>
    <div id="vBox"></div>`;
  const box = el.querySelector("#vBox");
  let deck = [], i = 0, su = 0, rv = [];
  const start = () => {
    el.querySelectorAll("#vTh .chip").forEach(b => b.setAttribute("aria-pressed", +b.dataset.t === s.vTheme));
    el.querySelectorAll("#vSens .chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.s === s.vSens));
    deck = shuf(V[s.vTheme].mots).slice(0, 12); i = 0; su = 0; rv = []; card();
  };
  const card = () => {
    if (i >= deck.length) {
      box.innerHTML = `<div class="card flash"><div class="stat">${su} / ${deck.length}</div><p>mots connus.</p>${rv.length ? `<p>À revoir :</p>${OUT.T(m.vocabSens[0].split(" → "), rv.map(w => [w[0], w[1]]))}` : "<p>Parfait, aucun mot à revoir.</p>"}<button class="btn" type="button" id="vAg">Nouvelle série de cartes</button></div>`;
      box.querySelector("#vAg").onclick = start; return;
    }
    const w = deck[i], [a, b] = s.vSens === "ab" ? w : [w[1], w[0]];
    box.innerHTML = `<div class="card flash"><p class="qhead"><span>${V[s.vTheme].theme}</span><span>Carte ${i + 1} / ${deck.length}</span></p><div class="front">${a}</div><div class="back" hidden>${b}</div>
      <div class="row center"><button class="btn" type="button" id="vFlip">Retourner la carte</button></div>
      <div class="row center" id="vRate" hidden><button class="btn ghost" type="button" data-r="0">À revoir</button><button class="btn" type="button" data-r="1">Je savais</button></div></div>`;
    box.querySelector("#vFlip").onclick = () => { box.querySelector(".back").hidden = false; box.querySelector("#vFlip").parentElement.hidden = true; box.querySelector("#vRate").hidden = false; };
    box.querySelector("#vRate").onclick = e => { const r = e.target.dataset.r; if (r == null) return; if (r === "1") su++; else rv.push(w); i++; card(); };
  };
  el.querySelector("#vTh").onclick = e => { const b = e.target.closest(".chip"); if (b) { s.vTheme = +b.dataset.t; start(); } };
  el.querySelector("#vSens").onclick = e => { const b = e.target.closest(".chip"); if (b) { s.vSens = b.dataset.s; start(); } };
  el.querySelector("#vList").onclick = () => { box.innerHTML = `<div class="card">${OUT.T(m.vocabSens[0].split(" → "), V[s.vTheme].mots)}</div>`; };
  start();
}

route();
}
