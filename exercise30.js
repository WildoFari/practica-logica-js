// Queremos una función que reciba un array (como [1, 2, 1, 3, 4]) y devuelva:

//     Solo números

//     Sin repetidos


function eliminarDuplicador(array) {
    if(!Array.isArray(array)) {
        return "El dato introducido no es un array"
    }

const soloNumeros = array.filter((element) => typeof element === "number");
const sinRepetidos = [...new Set(soloNumeros)];

return sinRepetidos;
}

console.log(eliminarDuplicador([1, 2, 1, 3,"asdf", 4]))