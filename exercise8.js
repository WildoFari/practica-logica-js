// Dado un numero entero inviertirlo y devolver de nuevo el numero entero

function inviertir(numero) {
    let invertido = numero.toString().split("").reverse().join("");
    let resultado = parseInt(invertido);

    return resultado;

}

console.log(inviertir(123))

