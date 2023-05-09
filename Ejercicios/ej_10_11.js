"use strict";
function EsMayuscula(letra) {
    return letra === letra.toUpperCase();
}
function ComposicionDeCadena(cadena) {
    let contMayus = 0;
    let contMinus = 0;
    let i = 0;
    let subCadena = cadena;
    let respuesta = `La cadena ${cadena} esta compuesta por `;
    for (let i = 0; i < subCadena.length; i++) {
        subCadena = subCadena.replace(" ", "");
    }
    for (; i < subCadena.length; i++) {
        if (EsMayuscula(subCadena.charAt(i))) {
            contMayus++;
        }
        else {
            contMinus++;
        }
    }
    if (contMayus == i) {
        respuesta += "solo MAYUSCULAS";
    }
    else {
        if (contMinus == i) {
            respuesta += "solo MINUSCULAS";
        }
        else {
            respuesta += "por MAYUSCULAS y MINUSCULAS";
        }
    }
    return respuesta;
}
function InvertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}
function EsPalindromo(cadena) {
    let respuesta = "La cadena " + cadena + "";
    let subCadena = cadena;
    for (let i = 0; i < subCadena.length; i++) {
        subCadena = subCadena.replace(" ", "");
    }
    subCadena = subCadena.toLowerCase();
    if (subCadena === InvertirCadena(subCadena)) {
        respuesta += " es Palindromo";
    }
    else {
        respuesta += " no es Palindormo";
    }
    return respuesta;
}
console.log(ComposicionDeCadena("HOLA A A A"));
console.log(EsPalindromo("La ruta nos aporto otro paso natural"));
//# sourceMappingURL=ej_10_11.js.map