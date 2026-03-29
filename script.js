
let alumnes = [];

let formulari = document.getElementById("formulariAlumne");
let inputNom = document.getElementById("nom");
let inputExamen = document.getElementById("examen");
let inputPractiques = document.getElementById("practiques");
let inputActitud = document.getElementById("actitud");
let missatge = document.getElementById("missatge");
let cosTaula = document.getElementById("cosTaula");
let btnAsc = document.getElementById("ordenarAsc");
let btnDesc = document.getElementById("ordenarDesc");



function mostrarError(text) {
  missatge.textContent = text;
  missatge.className = "error";
}

function mostrarCorrecte(text) {
  missatge.textContent = text;
  missatge.className = "correcte";
}

function netejarMissatge() {
  missatge.textContent = "";
  missatge.className = "";
}


function validarFormulari() {
  let nom = inputNom.value.trim();
  let examen = inputExamen.value;
  let practiques = inputPractiques.value;
  let actitud = inputActitud.value;

  if (nom === "") {
    mostrarError("El nom no pot estar buit.");
    return false;
  }

  if (examen === "" || practiques === "" || actitud === "") {
    mostrarError("Tots els camps de notes han d'estar omplerts.");
    return false;
  }

  let notaExamen = parseFloat(examen);
  let notaPractiques = parseFloat(practiques);
  let notaActitud = parseFloat(actitud);

  if (isNaN(notaExamen) || notaExamen < 0 || notaExamen > 10) {
    mostrarError("La nota de l'examen ha de ser un número entre 0 i 10.");
    return false;
  }

  if (isNaN(notaPractiques) || notaPractiques < 0 || notaPractiques > 10) {
    mostrarError("La nota de les pràctiques ha de ser un número entre 0 i 10.");
    return false;
  }

  if (isNaN(notaActitud) || notaActitud < 0 || notaActitud > 10) {
    mostrarError("La nota d'actitud ha de ser un número entre 0 i 10.");
    return false;
  }

  return true;
}