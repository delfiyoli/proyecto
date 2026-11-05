
const resultado = document.getElementById("resultado");
const boton = document.getElementById("enviar");

boton.addEventListener("click", function() {

let puntaje = 0;

// Obtener las opciones seleccionadas
const p1a = document.getElementById("p1a");
const p1b = document.getElementById("p1b");
const p1c = document.getElementById("p1c");

const p2a = document.getElementById("p2a");
const p2b = document.getElementById("p2b");
const p2c = document.getElementById("p2c");

const p3a = document.getElementById("p3a");
const p3b = document.getElementById("p3b");
const p3c = document.getElementById("p3c");

// Comprobar que todas las preguntas estén respondidas
if (
(!p1a.checked && !p1b.checked && !p1c.checked) ||
(!p2a.checked && !p2b.checked && !p2c.checked) ||
(!p3a.checked && !p3b.checked && !p3c.checked)
) {
resultado.textContent = "Debes responder todas las preguntas.";

} else {

// Primera pregunta
if (p1a.checked) {
puntaje++;
document.getElementById("explicacion1").textContent =
"Correcto. San Faustino Míguez nació en Xamirás, España.";
} else {
document.getElementById("explicacion1").textContent =
"Incorrecto. Nació en Xamirás, España.";
}

// Segunda pregunta
if (p2a.checked) {
puntaje++;
document.getElementById("explicacion2").textContent =
"Correcto. Perteneció a las Escuelas Pías.";
} else {
document.getElementById("explicacion2").textContent =
"Incorrecto. Perteneció a las Escuelas Pías.";
}

// Tercera pregunta
if (p3a.checked) {
puntaje++;
document.getElementById("explicacion3").textContent =
"Correcto. Fundó las Hijas de la Divina Pastora.";
} else {
document.getElementById("explicacion3").textContent =
"Incorrecto. Fundó las Hijas de la Divina Pastora.";
}

// Mostrar el puntaje
if (puntaje === 3) {
resultado.textContent =
"¡Excelente! Respondiste correctamente las 3 preguntas.";

} else if (puntaje === 2) {
resultado.textContent =
"Muy bien. Respondiste correctamente 2 de 3.";

} else if (puntaje === 1) {
resultado.textContent =
"Respondiste correctamente 1 de 3. Seguí repasando.";

} else {
resultado.textContent =
"No acertaste ninguna respuesta. Podés repasar la información.";
}
}
});