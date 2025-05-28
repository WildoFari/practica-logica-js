// Dado un número, indicar si es capicúa o no.
// Un número capicúa es aquel que se lee igual
//  de izquierda a derecha que de derecha a izquierda.


function capi(num) {
    if(typeof num !== "number") {
        return "Debes de agregar un numero"
    }

    let original = num.toString();
    const reves = original.split("").reverse().join("");

    return original === reves
}


console.log(capi(12210))