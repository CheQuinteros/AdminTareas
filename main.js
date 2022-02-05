'use strict'
var tarea,materia,fecha;
window.addEventListener("load", function(){

});

function capturarDatos(){
    tarea = document.querySelector("#nombreTarea").value;
    materia = document.querySelector("#materia").value;
    fecha = document.querySelector("#fecha").value;
    if (tarea == "" || materia == "" || fecha == "" ) {
        alert("La tarea esta vacio");
    }else{
        CrearTarea();
    }
}

function CrearTarea(){
    var contenedor = document.querySelector("#cartas");
    
    var plantilla = `
        <div class="carta">
            <h2>Tarea: ${tarea}</h2>
            <h4>Materia: ${materia}</h4>
            <p>Fecha: ${fecha} </p>
        </div>
    
    `;
    console.log(contenedor);

    contenedor.innerHTML += plantilla;
}