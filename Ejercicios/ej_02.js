"use strict";
var Meses;
(function (Meses) {
    Meses[Meses["Enero"] = 1] = "Enero";
    Meses[Meses["Febrero"] = 2] = "Febrero";
    Meses[Meses["Marzo"] = 3] = "Marzo";
    Meses[Meses["Abril"] = 4] = "Abril";
    Meses[Meses["Mayo"] = 5] = "Mayo";
    Meses[Meses["Junio"] = 6] = "Junio";
    Meses[Meses["Julio"] = 7] = "Julio";
    Meses[Meses["Agosto"] = 8] = "Agosto";
    Meses[Meses["Semptiempre"] = 9] = "Semptiempre";
    Meses[Meses["Octubre"] = 10] = "Octubre";
    Meses[Meses["Noviembre"] = 11] = "Noviembre";
    Meses[Meses["Diciembre"] = 12] = "Diciembre";
})(Meses || (Meses = {}));
;
let meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 0; i < 12; i++) {
    console.log(`${Meses[meses[i]]}, es el mes ${meses[i]}`);
}
;
//# sourceMappingURL=ej_02.js.map