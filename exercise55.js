// Dado un array de strings, devolver otro array con los strings que comienzan con mayúscula.

function mayusculas(arr) {
    let resultado = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === arr[i][0].toUpperCase()) {
            resultado.push(arr[i])
        }
    }
    return resultado
}

console.log(mayusculas(["Ana", "luis", "MARÍA"]))
