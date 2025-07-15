

// Dado un array de números, devolver la suma de todos los pares.

function sumaPares(arr) {
    let suma = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            suma += num;
        }
    }
    return suma;
}

console.log(sumaPares([1, 2, 3, 4, 5, 6])); // 12
