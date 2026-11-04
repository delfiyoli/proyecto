
const formulario = document.getElementById("formularioQuiz");
const resultado = document.getElementById("resultado");

const explicacion1 = document.getElementById("explicacion1");
const explicacion2 = document.getElementById("explicacion2");
const explicacion3 = document.getElementById("explicacion3");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtenemos las respuestas seleccionadas.
    const respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
    const respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
    const respuesta3 = document.querySelector('input[name="pregunta3"]:checked');

    // Comprobamos que todas las preguntas estén respondidas.
    if (respuesta1 === null || respuesta2 === null || respuesta3 === null) {
        resultado.textContent = "Debes responder todas las preguntas.";
        resultado.className = "resultado-error";
        return;
    }
// Mostramos la explicación de la primera pregunta.
if (respuesta1.value === "xamiras") {
    explicacion1.textContent = "Correcto. San Faustino Míguez nació el 24 de marzo de 1831 en Xamirás, una aldea de Orense, España.";
    explicacion1.className = "explicacion correcta";
} else {
    explicacion1.textContent = "La respuesta correcta es Xamirás. Allí nació San Faustino Míguez el 24 de marzo de 1831.";
    explicacion1.className = "explicacion incorrecta";
}

// Mostramos la explicación de la segunda pregunta.
if (respuesta2.value === "escuelas") {
    explicacion2.textContent = "Correcto. Faustino Míguez perteneció a las Escuelas Pías y fue un religioso escolapio.";
    explicacion2.className = "explicacion correcta";
} else {
    explicacion2.textContent = "La respuesta correcta es Escuelas Pías. Faustino Míguez fue un religioso escolapio.";
    explicacion2.className = "explicacion incorrecta";
}

// Mostramos la explicación de la tercera pregunta.
if (respuesta3.value === "divina") {
    explicacion3.textContent = "Correcto. Faustino Míguez impulsó la creación de la Congregación de Hijas de la Divina Pastora.";
    explicacion3.className = "explicacion correcta";
} else {
    explicacion3.textContent = "La respuesta correcta es Hijas de la Divina Pastora. Esta congregación surgió de su iniciativa educativa.";
    explicacion3.className = "explicacion incorrecta";
}

    // Quitamos los colores de intentos anteriores.
    const opciones = formulario.querySelectorAll("li");

    opciones.forEach(function(opcion) {
        opcion.classList.remove("respuesta-correcta");
        opcion.classList.remove("respuesta-incorrecta");
    });

    // Inicializamos el puntaje.
    let puntaje = 0;

    // CORRECCIÓN DE LA PREGUNTA 1.
    const opciones1 = document.querySelectorAll('input[name="pregunta1"]');

    opciones1.forEach(function(opcion) {

        if (opcion.value === "xamiras") {
            opcion.closest("li").classList.add("respuesta-correcta");
        }

        if (opcion.checked && opcion.value === "xamiras") {
            puntaje++;
        }

        if (opcion.checked && opcion.value !== "xamiras") {
            opcion.closest("li").classList.add("respuesta-incorrecta");
        }

    });

    // CORRECCIÓN DE LA PREGUNTA 2.
    const opciones2 = document.querySelectorAll('input[name="pregunta2"]');

    opciones2.forEach(function(opcion) {

        if (opcion.value === "escuelas") {
            opcion.closest("li").classList.add("respuesta-correcta");
        }

        if (opcion.checked && opcion.value === "escuelas") {
            puntaje++;
        }

        if (opcion.checked && opcion.value !== "escuelas") {
            opcion.closest("li").classList.add("respuesta-incorrecta");
        }

    });

    // CORRECCIÓN DE LA PREGUNTA 3.
    const opciones3 = document.querySelectorAll('input[name="pregunta3"]');

    opciones3.forEach(function(opcion) {

        if (opcion.value === "divina") {
            opcion.closest("li").classList.add("respuesta-correcta");
        }

        if (opcion.checked && opcion.value === "divina") {
            puntaje++;
        }

        if (opcion.checked && opcion.value !== "divina") {
            opcion.closest("li").classList.add("respuesta-incorrecta");
        }

    });

    // MOSTRAMOS EL RESULTADO.
    if (puntaje === 3) {

        resultado.textContent = "¡Excelente! Respondiste correctamente las 3 preguntas.";
        resultado.className = "resultado-correcto";

    } else if (puntaje === 2) {

        resultado.textContent = "¡Muy bien! Respondiste correctamente 2 de 3 preguntas.";
        resultado.className = "resultado-parcial";

    } else {

        resultado.textContent = "Obtuviste " + puntaje + " de 3 respuestas correctas. ¡Seguí aprendiendo sobre San Faustino!";
        resultado.className = "resultado-error";

    }

});

