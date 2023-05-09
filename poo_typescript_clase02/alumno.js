"use strict";
var Prueba;
(function (Prueba) {
    class Alumno extends Prueba.Persona {
        constructor(nombre, apellido, legajo) {
            super(nombre, apellido);
            this.legajo = legajo;
        }
        ToString() {
            return super.ToString() + "-" + this.legajo;
        }
    }
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=alumno.js.map