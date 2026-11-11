
const resultado = document.getElementById("resultado");
const boton = document.getElementById("enviar");

boton.addEventListener("click", function() {

    let puntaje = 0;
    let todasRespondidas = true;

    
    for (let i = 1; i <= 3; i++) {

        const opcionA = document.getElementById("p" + i + "a");
        const opcionB = document.getElementById("p" + i + "b");
        const opcionC = document.getElementById("p" + i + "c");

        document.getElementById("explicacion" + i).textContent = "";

        if (!opcionA.checked && !opcionB.checked && !opcionC.checked) {
            todasRespondidas = false;
        }
    }

    
    if (todasRespondidas === false) {

        resultado.textContent = "Debes responder todas las preguntas.";

    } else {

        
        if (document.getElementById("p1a").checked) {
            puntaje++;
            document.getElementById("explicacion1").textContent =
                "Correcto. San Faustino Míguez nació en Xamirás, España.";
        } else {
            document.getElementById("explicacion1").textContent =
                "Incorrecto. Nació en Xamirás, España.";
        }

        
        if (document.getElementById("p2a").checked) {
            puntaje++;
            document.getElementById("explicacion2").textContent =
                "Correcto. Perteneció a las Escuelas Pías.";
        } else {
            document.getElementById("explicacion2").textContent =
                "Incorrecto. Perteneció a las Escuelas Pías.";
        }

       
        if (document.getElementById("p3a").checked) {
            puntaje++;
            document.getElementById("explicacion3").textContent =
                "Correcto. Fundó las Hijas de la Divina Pastora.";
        } else {
            document.getElementById("explicacion3").textContent =
                "Incorrecto. Fundó las Hijas de la Divina Pastora.";
        }

     
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

}
}
});
