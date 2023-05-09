"use strict";
/// <reference path="./alumno.ts"/>
/// <reference path="./persona.ts"/>
function CrearAlumno() {
    let apellido = document.getElementById("txtApellido").value;
    let nombre = document.getElementById("txtNombre").value;
    let legajo = Number.parseInt(document.getElementById("txtLegajo").value);
    let nuevoAlumno = new Prueba.Alumno(nombre, apellido, legajo);
    console.log(nuevoAlumno.ToString());
    alert(nuevoAlumno.ToString());
}
//# sourceMappingURL=manejador.js.map