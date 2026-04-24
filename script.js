// ============================================
//  POLICE NATIONALE — SYSTÈME D'ÉVALUATION
//  script.js
// ============================================

// ──────────────────────────────────────────
//  ⚙️ CONFIGURATION — À MODIFIER
// ──────────────────────────────────────────

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1497158799436415020/5fhmZ82DobCYu5UoUqkJWDh8p0ZoKPG9x6_HTGN5gr9xE1uHS-pjAgRzsUvZ0zH-M8YK";

// ──────────────────────────────────────────
//  📋 QUESTIONS — Ajoutez / modifiez ici
//  Types: "text", "radio", "checkbox"
// ──────────────────────────────────────────

const FORMS = {

  // ===== FORMULAIRE 1 — Connaissances Générales =====
  1: [
    {
      id: "f1_q1",
      text: "Quel est le rôle principal de la Police Nationale ?",
      type: "radio",
      options: [
        "Maintenir l'ordre public et assurer la sécurité des citoyens",
        "Gérer les affaires judiciaires uniquement",
        "S'occuper des frontières nationales seulement",
        "Appliquer uniquement les lois fiscales"
      ]
    },
    {
      id: "f1_q2",
      text: "Qu'est-ce que l'interpellation d'un suspect implique ?",
      type: "radio",
      options: [
        "Uniquement lui poser des questions",
        "L'arrêter, l'informer de ses droits et le placer en garde à vue si nécessaire",
        "Le menotter sans autre formalité",
        "L'emmener directement en prison"
      ]
    },
    {
      id: "f1_q3",
      text: "Citez les grades de la Police Nationale du plus bas au plus haut (répondez librement).",
      type: "text"
    },
    {
      id: "f1_q4",
      text: "Lors d'une intervention, quelles informations doit-on toujours collecter ? (plusieurs réponses possibles)",
      type: "checkbox",
      options: [
        "Identité des personnes impliquées",
        "Témoignages des personnes présentes",
        "Heure et lieu de l'incident",
        "Numéro de téléphone personnel du supérieur",
        "Description des faits"
      ]
    },
    {
      id: "f1_q5",
      text: "Qu'est-ce que la légitime défense ? Donnez une définition complète.",
      type: "text"
    },
    {
      id: "f1_q6",
      text: "Quel est le comportement adopté face à un civil non coopératif ?",
      type: "radio",
      options: [
        "Utiliser immédiatement la force",
        "Ignorer la situation et partir",
        "Maintenir son calme, expliquer la situation et escalader si nécessaire selon la procédure",
        "Appeler directement son supérieur sans rien faire"
      ]
    },
    {
      id: "f1_q7",
      text: "Décrivez brièvement la procédure d'une garde à vue.",
      type: "text"
    },
    {
      id: "f1_q8",
      text: "Quelle est votre compréhension du secret professionnel au sein de la Police Nationale ?",
      type: "text"
    }
  ],

  // ===== FORMULAIRE 2 — Procédures & Législation =====
  2: [
    {
      id: "f2_q1",
      text: "Quelle est la durée légale maximale d'une garde à vue en France (droit commun) ?",
      type: "radio",
      options: [
        "12 heures",
        "24 heures",
        "48 heures",
        "72 heures"
      ]
    },
    {
      id: "f2_q2",
      text: "Quels droits doit-on obligatoirement notifier à une personne en garde à vue ? (plusieurs réponses)",
      type: "checkbox",
      options: [
        "Droit de garder le silence",
        "Droit à un avocat",
        "Droit d'informer un proche",
        "Droit de quitter la garde à vue à tout moment",
        "Droit à un examen médical"
      ]
    },
    {
      id: "f2_q3",
      text: "Quelle est la différence entre une contravention, un délit et un crime ?",
      type: "text"
    },
    {
      id: "f2_q4",
      text: "Lors d'un contrôle d'identité, un individu refuse de présenter ses papiers. Quelle est la procédure ?",
      type: "radio",
      options: [
        "Le laisser partir immédiatement",
        "Procéder à une vérification d'identité pouvant aller jusqu'à 4h de rétention",
        "L'arrêter pour 48h automatiquement",
        "Appeler uniquement son supérieur"
      ]
    },
    {
      id: "f2_q5",
      text: "Expliquez la différence entre flagrant délit et crime non flagrant concernant les pouvoirs d'arrestation.",
      type: "text"
    },
    {
      id: "f2_q6",
      text: "Quand peut-on procéder à une fouille corporelle de sécurité ?",
      type: "radio",
      options: [
        "À tout moment sans justification",
        "Uniquement dans les commissariats",
        "Lorsqu'il existe des raisons plausibles de soupçonner qu'une arme est dissimulée",
        "Jamais sans mandat du juge"
      ]
    },
    {
      id: "f2_q7",
      text: "Définissez le principe de proportionnalité dans l'usage de la force.",
      type: "text"
    },
    {
      id: "f2_q8",
      text: "Quels actes constituent une faute professionnelle grave pouvant entraîner une sanction disciplinaire ? (plusieurs réponses)",
      type: "checkbox",
      options: [
        "Manquement au secret professionnel",
        "Usage disproportionné de la force",
        "Refus d'obéissance à un ordre légal",
        "Arriver 5 minutes en retard",
        "Corruption ou abus d'autorité"
      ]
    }
  ],

  // ===== FORMULAIRE 3 — Protocoles Opérationnels =====
  3: [
    {
      id: "f3_q1",
      text: "Lors d'un appel pour rixe en cours, quelle est votre première action en arrivant sur les lieux ?",
      type: "radio",
      options: [
        "Intervenir immédiatement sans évaluation",
        "Appeler des renforts et sécuriser le périmètre",
        "Évaluer la situation, sécuriser la scène et demander des renforts si nécessaire",
        "Repartir si la situation semble trop dangereuse"
      ]
    },
    {
      id: "f3_q2",
      text: "Vous découvrez un individu blessé sur la voie publique. Décrivez les étapes de votre intervention.",
      type: "text"
    },
    {
      id: "f3_q3",
      text: "Lors d'une poursuite automobile, quelles règles de sécurité s'appliquent ? (plusieurs réponses)",
      type: "checkbox",
      options: [
        "Activer les gyrophares et les sirènes",
        "Maintenir une distance de sécurité",
        "Respecter la signalisation dans la mesure du possible",
        "Ignorer les piétons pour rattraper le suspect",
        "Informer le PC par radio de la poursuite"
      ]
    },
    {
      id: "f3_q4",
      text: "Comment rédigez-vous un procès-verbal d'intervention ? Quels éléments sont obligatoires ?",
      type: "text"
    },
    {
      id: "f3_q5",
      text: "En cas de prise d'otage, quel est le protocole de base ?",
      type: "radio",
      options: [
        "Intervenir immédiatement pour libérer l'otage",
        "Établir un périmètre de sécurité, sécuriser la zone et attendre le GIGN",
        "Tenter de négocier seul directement avec le preneur d'otage",
        "Évacuer la zone et ne pas intervenir"
      ]
    },
    {
      id: "f3_q6",
      text: "Quels sont les codes radio essentiels que vous utilisez en opération ? (répondez librement selon vos connaissances)",
      type: "text"
    },
    {
      id: "f3_q7",
      text: "Face à une manifestation qui dégénère, quelles sont les étapes d'escalade de la réponse policière ?",
      type: "radio",
      options: [
        "Charge immédiate avec matraque",
        "Dispersion verbale → nasse → dispersion physique progressive → usage de lacrymogènes si nécessaire",
        "Attendre que ça se calme seul",
        "Appeler l'armée directement"
      ]
    },
    {
      id: "f3_q8",
      text: "Décrivez ce que vous feriez si un collègue commettait un abus de pouvoir devant vous.",
      type: "text"
    }
  ]
};

// ──────────────────────────────────────────
//  STATE
// ──────────────────────────────────────────

let selectedForm = null;
let currentStep = "identity";

// ──────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  startClock();
  initParticles();
  buildAllForms();

  // Enable start button when pseudo + matricule + form are filled
  document.getElementById("discord-pseudo").addEventListener("input", checkReadyState);
  document.getElementById("matricule").addEventListener("input", checkReadyState);
});

// ──────────────────────────────────────────
//  CLOCK
// ──────────────────────────────────────────

function startClock() {
  const el = document.getElementById("clock");
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

// ──────────────────────────────────────────
//  PARTICLES
// ──────────────────────────────────────────

function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.4 + 0.05
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(26, 111, 255, ${p.alpha})`;
      ctx.fill();
    }
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(26, 111, 255, ${0.07 * (1 - d / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ──────────────────────────────────────────
//  BUILD FORMS
// ──────────────────────────────────────────

function buildAllForms() {
  for (const formNum of [1, 2, 3]) {
    const container = document.getElementById(`questions-form${formNum}`);
    container.innerHTML = "";
    FORMS[formNum].forEach((q, idx) => {
      container.appendChild(buildQuestion(q, idx + 1));
    });
  }
}

function buildQuestion(q, num) {
  const block = document.createElement("div");
  block.className = "question-block";
  block.id = `block-${q.id}`;

  const numEl = document.createElement("div");
  numEl.className = "question-number";
  numEl.textContent = `QUESTION ${String(num).padStart(2, "0")}`;
  block.appendChild(numEl);

  const textEl = document.createElement("div");
  textEl.className = "question-text";
  textEl.textContent = q.text;
  block.appendChild(textEl);

  if (q.type === "text") {
    const ta = document.createElement("textarea");
    ta.className = "answer-textarea";
    ta.id = q.id;
    ta.placeholder = "Votre réponse...";
    ta.rows = 3;
    block.appendChild(ta);

  } else if (q.type === "radio") {
    const list = document.createElement("div");
    list.className = "options-list";
    q.options.forEach((opt, i) => {
      const lbl = document.createElement("label");
      lbl.className = "option-label";
      lbl.innerHTML = `<input type="radio" name="${q.id}" value="${opt}" /> ${opt}`;
      list.appendChild(lbl);
    });
    block.appendChild(list);

  } else if (q.type === "checkbox") {
    const list = document.createElement("div");
    list.className = "options-list";
    q.options.forEach((opt, i) => {
      const lbl = document.createElement("label");
      lbl.className = "option-label";
      lbl.innerHTML = `<input type="checkbox" name="${q.id}" value="${opt}" /> ${opt}`;
      list.appendChild(lbl);
    });
    block.appendChild(list);
  }

  return block;
}

// ──────────────────────────────────────────
//  FORM SELECTION
// ──────────────────────────────────────────

function selectForm(num) {
  selectedForm = num;
  document.querySelectorAll(".form-card").forEach(c => c.classList.remove("selected"));
  document.querySelector(`.form-card[data-form="${num}"]`).classList.add("selected");
  checkReadyState();
}

function checkReadyState() {
  const pseudo = document.getElementById("discord-pseudo").value.trim();
  const mat = document.getElementById("matricule").value.trim();
  const btn = document.getElementById("start-btn");
  btn.disabled = !(pseudo && mat && selectedForm);
}

// ──────────────────────────────────────────
//  NAVIGATION
// ──────────────────────────────────────────

function showStep(id) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setProgress(pct) {
  document.getElementById("progress-bar").style.width = pct + "%";
}

function startEvaluation() {
  const pseudo = document.getElementById("discord-pseudo").value.trim();
  const mat = document.getElementById("matricule").value.trim();
  if (!pseudo || !mat || !selectedForm) {
    showToast("⚠️ Veuillez remplir tous les champs et choisir un formulaire.");
    return;
  }
  showStep(`step-form${selectedForm}`);
  setProgress(50);
}

function goBack() {
  showStep("step-identity");
  setProgress(10);
}

// ──────────────────────────────────────────
//  COLLECT ANSWERS
// ──────────────────────────────────────────

function collectAnswers(formNum) {
  const answers = {};
  const questions = FORMS[formNum];
  for (const q of questions) {
    if (q.type === "text") {
      const el = document.getElementById(q.id);
      answers[q.id] = { question: q.text, answer: el ? el.value.trim() || "(vide)" : "(vide)" };
    } else if (q.type === "radio") {
      const sel = document.querySelector(`input[name="${q.id}"]:checked`);
      answers[q.id] = { question: q.text, answer: sel ? sel.value : "(non répondu)" };
    } else if (q.type === "checkbox") {
      const checked = [...document.querySelectorAll(`input[name="${q.id}"]:checked`)].map(i => i.value);
      answers[q.id] = { question: q.text, answer: checked.length ? checked.join(", ") : "(aucune sélection)" };
    }
  }
  return answers;
}

function validateAnswers(answers) {
  for (const key in answers) {
    if (answers[key].answer === "(non répondu)" || answers[key].answer === "(aucune sélection)" || answers[key].answer === "(vide)") {
      return false;
    }
  }
  return true;
}

// ──────────────────────────────────────────
//  SUBMIT
// ──────────────────────────────────────────

async function submitForm() {
  const pseudo = document.getElementById("discord-pseudo").value.trim();
  const matricule = document.getElementById("matricule").value.trim();
  const formNum = selectedForm;
  const answers = collectAnswers(formNum);

  if (!validateAnswers(answers)) {
    showToast("⚠️ Veuillez répondre à toutes les questions avant de soumettre.");
    return;
  }

  showLoading(true, "CHIFFREMENT DES DONNÉES...");
  await sleep(800);
  showLoading(true, "TRANSMISSION EN COURS...");

  const formNames = {
    1: "Connaissances Générales",
    2: "Procédures & Législation",
    3: "Protocoles Opérationnels"
  };

  const now = new Date();
  const timestamp = now.toLocaleString("fr-FR");

  // Build Discord embed fields
  const fields = [];
  for (const key in answers) {
    const item = answers[key];
    fields.push({
      name: `❓ ${item.question}`,
      value: `> ${item.answer}`,
      inline: false
    });
  }

  const embed = {
    title: `🛡️ ÉVALUATION POLICE NATIONALE — Formulaire ${formNum}`,
    description: `**${formNames[formNum]}**\nSoumis le ${timestamp}`,
    color: 0x1a6fff,
    fields: [
      { name: "👤 Pseudo Discord", value: pseudo, inline: true },
      { name: "🪪 Matricule", value: `#${matricule}`, inline: true },
      { name: "📋 Formulaire", value: `Formulaire ${formNum} — ${formNames[formNum]}`, inline: false },
      { name: "\u200B", value: "───────────────────────────────", inline: false },
      ...fields
    ],
    footer: {
      text: `Police Nationale — Système d'Évaluation Interne | ${timestamp}`
    },
    thumbnail: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_France.svg/200px-Flag_of_France.svg.png"
    }
  };

  try {
    // Proxy CORS pour Discord
    const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(DISCORD_WEBHOOK_URL);
    const response = await fetch(proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] })
    });

    if (response.ok || response.status === 204) {
      showLoading(false);
      setProgress(100);
      showStep("step-success");
      document.getElementById("success-meta").innerHTML =
        `📋 Formulaire ${formNum} — ${formNames[formNum]}<br>` +
        `👤 ${pseudo} &nbsp;|&nbsp; 🪪 Matricule #${matricule}<br>` +
        `🕐 ${timestamp}`;
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (err) {
    showLoading(false);
    console.error("Webhook error:", err);
    showToast("❌ Erreur d'envoi. Vérifiez le webhook Discord et réessayez.");
  }
}

// ──────────────────────────────────────────
//  RESET
// ──────────────────────────────────────────

function resetAll() {
  selectedForm = null;
  document.getElementById("discord-pseudo").value = "";
  document.getElementById("matricule").value = "";
  document.querySelectorAll(".form-card").forEach(c => c.classList.remove("selected"));
  document.getElementById("start-btn").disabled = true;
  buildAllForms();
  setProgress(0);
  showStep("step-identity");
}

// ──────────────────────────────────────────
//  UI HELPERS
// ──────────────────────────────────────────

function showLoading(visible, text = "TRANSMISSION EN COURS...") {
  const overlay = document.getElementById("loading-overlay");
  const textEl = document.getElementById("loading-text");
  textEl.textContent = text;
  overlay.classList.toggle("visible", visible);
}

let toastTimer;
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4000);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ──────────────────────────────────────────
//  INIT PROGRESS
// ──────────────────────────────────────────

setProgress(5);
