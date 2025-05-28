// Dado un número, devolver su factorial.
// El factorial de un número es la multiplicación de todos
// los números enteros positivos desde el 1 hasta ese número.


function factorial(numero) {
    if(typeof numero !== "number" || typeof numero < 0) {
        return "Ingrese un numero valido"
    }

    let resultado = 1;

    for(let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado
}

console.log(factorial(5))