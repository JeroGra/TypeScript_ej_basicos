"use strict";
var Prueba;
(function (Prueba) {
    class Persona {
        constructor(nombre, apellido) {
            this.apellido = apellido;
            this.nombre = nombre;
        }
        ToString() {
            return this.apellido + "-" + this.nombre;
        }
    }
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=persona.js.map