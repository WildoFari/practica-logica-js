// Dado un array de objetos con propiedades "nombre" y "edad", 
// devolver un objeto con dos propiedades: "menor" y "mayor", 
// que tengan como valor el objeto que tiene la menor o mayor edad, 
// respectivamente.
function objetoMasEdad(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const edadActual = arr[i].edad;
        const menorEdad = menor.edad;
        const mayorEdad = mayor.edad;

        if (edadActual < menorEdad) {
            menor = arr[i];
        }
        if (edadActual > mayorEdad) {
            mayor = arr[i];
        }
    }

    return {
        menor,
        mayor
    };
}

console.log(objetoMasEdad([
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
]));
