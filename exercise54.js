// Dado un array de números, devolver la suma de todos los impares.
function sumaImpares(arr) {
    let suma = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            suma += num;
        }
    }
    return suma;
}

console.log(sumaImpares([1, 2, 3, 4, 5, 6])); // 9