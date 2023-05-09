"use strict";
var Ej_01;
(function (Ej_01) {
    class Rectangulo {
        constructor(v1, v3) {
            this.vertice1 = v1;
            this.vertice3 = v3;
            this.ladoUno = v1.GetY - v3.GetY;
            this.ladoDos = v3.GetX - v1.GetX;
            this.vertice2 = new Ej_01.Punto(v1.GetX, v3.GetY);
            this.vertice4 = new Ej_01.Punto(v3.GetX, v1.GetY);
            this.perimetro = 2 * this.ladoUno + 2 * this.ladoDos;
            this.area = this.ladoUno * this.ladoDos;
        }
        get Area() {
            return this.area;
        }
        get Perimetro() {
            return this.perimetro;
        }
        ToString() {
            return `\n
            Vertice Uno: (${this.vertice1.GetX},${this.vertice1.GetY})\n
            Vertice Dos: (${this.vertice2.GetX},${this.vertice2.GetY})\n
            Vertice Tres: (${this.vertice3.GetX},${this.vertice3.GetY})\n
            Vertice Cuatro: (${this.vertice4.GetX},${this.vertice4.GetY})\n
            Lado Uno: ${this.ladoUno}\n
            Lado Dos: ${this.ladoDos}\n
            Area: ${this.area}\n
            Perimetro:${this.perimetro}\n`;
        }
        Dibujito() {
            let ancho = "";
            for (let i = 0; i < this.ladoDos; i++) {
                ancho += "*";
            }
            for (let i = 0; i < this.ladoUno; i++) {
                ancho += "\n" + ancho;
            }
            //console.log(ancho);
            alert(ancho);
            for (let i = 0; i < this.ladoUno; i++) {
                ancho = ancho.replace("\n", "</br>");
            }
            return ancho;
        }
    }
    Ej_01.Rectangulo = Rectangulo;
})(Ej_01 || (Ej_01 = {}));
//# sourceMappingURL=Rectangulo.js.map