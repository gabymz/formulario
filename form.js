
function mostrarNombre() {
	let nombre = document.getElementById('nameCandidato').value;
	let resultadoCandidato = document.getElementById("resultadoCandidato");
	resultadoCandidato.textContent = nombre;
}

function calcularCalificacion() {

	let tomaDesicion = 0;
	let factorDesicion = 0;
	let recursosProceso = 0;
	let sponsor = 0;

	if (document.getElementById('menos45dias').checked) {
		tomaDesicion = 30;
	} else if (document.getElementById('mas45dias').checked) {
		tomaDesicion = 0;
	}

	if (document.getElementById('faltaIngresos').checked) {
		factorDesicion = 0;
	} else if (document.getElementById('decisionFamiliar').checked) {
		factorDesicion = 20;
	}

	if (document.getElementById('si1').checked) {
		recursosProceso = 20;
	} else if (document.getElementById('no1').checked) {
		recursosProceso = 0;
	}

	if (document.getElementById('si2').checked) {
		sponsor = 30;
	} else if (document.getElementById('no2').checked) {
		sponsor = 0;
	}

	let calificacion = (tomaDesicion + factorDesicion + recursosProceso + sponsor);
	//console.log("Calificación calculada: " + calificacion);
	return calificacion;
}

function mostrarResultado() {

	let resultadoScore = calcularCalificacion();
	let resultadoScoreElement = document.getElementById("resultadoCalificacion");
	resultadoScoreElement.textContent = resultadoScore;

	let resultadoStageElement = document.getElementById("resultadoStage");
	let resultadoStage;

	if (resultadoScore >= 75) {
		resultadoStage = "Follow up";
	} else if (resultadoScore < 75 && resultadoScore >= 0) {
		resultadoStage = "New Lead";
	} else {
		resultadoStage = "Error: Calificación inválida";
	}
	resultadoStageElement.textContent = resultadoStage;
	document.getElementById("seccionResultados").style.display = "block";
}

function validarCampos() {

	const nombre = document.getElementById("nameCandidato").value;
	const correo = document.getElementById("mail").value;
	const fecha = document.getElementById("date").value;
	const consultor = document.getElementById("nameConsultor").value;
	const entrevista = document.querySelector("input[name='tomaDecision']:checked");

	if (nombre === "" || correo === "" || fecha === "" || consultor === "" || entrevista === null) {
		alert("Por favor, completa todos los campos antes de calificar.");
	} else {
		mostrarResultado();
	}
}



