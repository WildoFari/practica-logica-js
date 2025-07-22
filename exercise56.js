// Dado un array de objetos con propiedades "nombre" y "edad",
// devuelve un objeto con la propiedad "nombre" y la edad promedio
// de todos los objetos del array.

function edadPromedio(usuarios) {
    let suma = 0;
    usuarios.forEach(usuario => {
        suma += usuario.edad;
    });
    return {
        nombre: "promedio",
        edad: suma / usuarios.length
    };
}

console.log(edadPromedio([
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 }
]));
