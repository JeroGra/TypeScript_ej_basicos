"use strict";
function MostrarNombreApellido(nombre, apellido) {
    apellido = apellido.toLowerCase();
    nombre = nombre.toLowerCase();
    apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);
    nombre = nombre.toUpperCase();
    console.log(`${nombre}, ${apellido}`);
}
MostrarNombreApellido("jeRo", "gRa");
//# sourceMappingURL=ej_05.js.map