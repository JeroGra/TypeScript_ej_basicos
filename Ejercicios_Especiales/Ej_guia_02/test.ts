/// <reference path="./Punto.ts" />
/// <reference path="./Rectangulo.ts" />

    let p1 = new Ej_01.Punto(3,7);
    let p2 = new Ej_01.Punto(6,2);

    let miRectangulo = new Ej_01.Rectangulo(p1,p2);
    console.log(miRectangulo.ToString());
    alert(miRectangulo.ToString());

    let ancho = miRectangulo.Dibujito();
    document.write(ancho);

    

