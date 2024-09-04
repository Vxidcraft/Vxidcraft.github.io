// const generateA = document.getElementById("generateA");
// const generateH = document.getElementById("generateH");

// const btnAlly = document.querySelector(".btn-ally");
// const btnHorde = document.querySelector(".btn-horde");

// const raceOutput = document.getElementById("race-output");
// const classOutput = document.getElementById("class-output");

// let AArace = ["Humain", "Elf de la nuit", "Nain"];
// let AAclass = ["Guerrier", "mage", "Voleur", "Pretre", "Démoniste"];

// let AHrace = ["Orc", "Mort-Vivant", "Troll"];
// let AHclass = ["Guerrier", "mage", "Voleur", "Pretre", "Démoniste"];

// const randAAR = Math.floor(Math.random() * AArace.length);
// const randAAC = Math.floor(Math.random() * AAclass.length);
// const randHAR = Math.floor(Math.random() * AHrace.length);
// const randHAC = Math.floor(Math.random() * AHclass.length);

// btnAlly.addEventListener("click", () => {
//   raceOutput.value = AArace[randAAR];
//   classOutput.value = AAclass[randAAC];
// });

// btnHorde.addEventListener("click", () => {
//   raceOutput.value = AHrace[randHAR];
//   classOutput.value = AHclass[randHAC];
// });

// ici je n'arrive pas à remettre à zero pur chaque clique sur l'icon pour regénérer.

// Listes de classes et races par faction
const classes = ["Guerrier", "Mage", "Voleur", "Pretre", "Démoniste"];
const allianceRaces = ["Humain", "Elfe de la Nuit", "Nain"];
const hordeRaces = ["Orc", "Mort-Vivant", "Troll"];

// Fonction pour générer un combo aléatoire
function generateRandomCombo(races) {
  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  const randomRace = races[Math.floor(Math.random() * races.length)];
  return { class: randomClass, race: randomRace };
}

// Gestionnaire d'événement pour le bouton Alliance
document.querySelector(".btn-ally").addEventListener("click", function () {
  const combo = generateRandomCombo(allianceRaces);
  document.getElementById("class-output").value = combo.class;
  document.getElementById("race-output").value = combo.race;
});

// Gestionnaire d'événement pour le bouton Horde
document.querySelector(".btn-horde").addEventListener("click", function () {
  const combo = generateRandomCombo(hordeRaces);
  document.getElementById("class-output").value = combo.class;
  document.getElementById("race-output").value = combo.race;
});
