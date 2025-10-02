// EJERCICIO 57: SUMA DE LOS ELEMENTOS DE UN ARRAY

function sumaArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

console.log(sumaArray([1, 2, 3, 4, 5]));    