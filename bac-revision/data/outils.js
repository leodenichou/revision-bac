/* Petits outils partagés par les fichiers de matières (tirages au hasard, tableaux). */
const OUT = (() => {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[R(0, a.length - 1)];
  const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = R(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const T = (head, rows) => `<div class="scroll"><table><thead><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const fr = (x, d = 1) => Number(x).toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const box = (titre, html, cls = "def") => `<div class="box ${cls}"><b>${titre}</b>${html}</div>`;
  return { R, pick, shuf, T, fr, box };
})();

/* Liste des 9 matières du site. Celles qui n'ont pas encore de fichier apparaissent « Bientôt ». */
const LISTE_MATIERES = [
  { cle: "ses", nom: "SES", sous: "Spécialité · écrit 4 h · coef. 16" },
  { cle: "llce", nom: "LLCER anglais", sous: "Spécialité · écrit 3 h 30 + oral · coef. 16" },
  { cle: "philo", nom: "Philosophie", sous: "Épreuve finale · 4 h · coef. 8" },
  { cle: "maths", nom: "Maths complémentaires", sous: "Option · contrôle continu" },
  { cle: "hg", nom: "Histoire-géographie", sous: "Contrôle continu" },
  { cle: "es", nom: "Enseignement scientifique", sous: "Contrôle continu" },
  { cle: "emc", nom: "EMC", sous: "Contrôle continu" },
  { cle: "lva", nom: "Anglais (LVA)", sous: "Contrôle continu" },
  { cle: "lvb", nom: "Espagnol (LVB)", sous: "Contrôle continu" },
];
