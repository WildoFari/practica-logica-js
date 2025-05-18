
// Dados dos arrays, devolver array con solo los elementos comunes entre ambos.

function filtrarElementos (array1, array2) {
    filtrado = array1.filter(elementos => array2.includes(elementos) )

    return filtrado

}

console.log(filtrarElementos([4, 5, 6, 15, 7,], [15, 7, 8, 9, 7, 5]))


