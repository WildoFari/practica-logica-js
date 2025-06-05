// Dado un array de números, devolver el valor más bajo y el valor más alto.

function mayorMenor(numeros) {
    if(!Array.isArray(numeros) || numeros.length === 0 ) {
        return "Debes de ingresar algo valido"
    }

    const soloNumeros = numeros.filter(n => typeof n === "number")

    if(soloNumeros.length === 0) {
        return "No tiene numeros validos"
    }

    const minimo = Math.min(...soloNumeros)
    const maximo = Math.max(...soloNumeros)

    return [minimo, maximo]

}

console.log(mayorMenor([1,2,3,4,5,6,7,8,9,10]))