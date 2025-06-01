
// Dado un array de elementos, devolver solo los números, pero elevados al cuadrado
// (es decir: número × número).


function alCuadrado(array) {

    if(!Array.isArray(array)) {
        return "Debes de pasar un array valido"
    }

    soloNumeros = array.filter((element) => typeof element === "number")
    restultado = soloNumeros.map((num) => num * num)

    return restultado
}


console.log(alCuadrado([1,2,"asdf",4]))