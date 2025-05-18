// Dado dos números, devolver cuántos números impares hay entre ellos.

function impares(inicio, fin) {
    let contador = 0 
    for(let i = inicio; i < fin; i++ ) {
        if(i % 2 !== 0) {
            contador++
        }
    }
    return contador
}

console.log(impares(1,10))
