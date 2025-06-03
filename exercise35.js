// Dado un array, crear otro array con el primer y el último elemento del array original.


function primeroUltimo(array) {

   if(!Array.isArray(array)) {
    return "Debes de ingresar un array"
   }

    const primero = array[0];
   const ultimo = array[array.length - 1]

    return [primero, ultimo]
}

console.log(primeroUltimo([100, 299, 300, 400, 1223]))