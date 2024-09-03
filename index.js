const generateA = document.getElementById("generateA");
const generateH = document.getElementById("generateH");

const btnAlly = document.querySelector(".btn-ally");
const btnHorde = document.querySelector(".btn-horde");

const raceOutput = document.getElementById("race-output");
const classOutput = document.getElementById("class-output");

let AArace = ["Humain", "Elf de la nuit", "Nain"];
let AAclass = ["Guerrier", "mage", "Voleur", "Pretre", "Démoniste"];

let AHrace = ["Orc", "Mort-Vivant", "Troll"];
let AHclass = ["Guerrier", "mage", "Voleur", "Pretre", "Démoniste"];

const randAAR = Math.floor(Math.random() * AArace.length);
const randAAC = Math.floor(Math.random() * AAclass.length);
const randHAR = Math.floor(Math.random() * AHrace.length);
const randHAC = Math.floor(Math.random() * AHclass.length);

btnAlly.addEventListener("click", () => {
  raceOutput.value = AArace[randAAR];
  classOutput.value = AAclass[randAAC];
});

btnHorde.addEventListener("click", () => {
  raceOutput.value = AHrace[randHAR];
  classOutput.value = AHclass[randHAC];
});

// ici je n'arrive pas à remettre à zero pur chaque clique sur l'icon pour regénérer.
