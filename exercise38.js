// Dado un número, 
// mostrar el listado de los cuadrados de todos los números naturales desde 1 hasta ese número

function cudrado(numero) {
    for(let i = 1; i <= numero; i++) {
        console.log(numero * i)
    }
}

cudrado(5)