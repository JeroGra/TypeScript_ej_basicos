/// <reference path="./alumno.ts"/>
/// <reference path="./persona.ts"/>


    function CrearAlumno()
    {
        let apellido : string = (<HTMLInputElement> document.getElementById("txtApellido")).value;
        let nombre:string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
        let legajo:number = Number.parseInt((<HTMLInputElement> document.getElementById("txtLegajo")).value);

        let nuevoAlumno = new Prueba.Alumno(nombre,apellido,legajo);

        console.log(nuevoAlumno.ToString());
        alert(nuevoAlumno.ToString());
    }
