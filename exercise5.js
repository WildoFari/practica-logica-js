// ¿Cuánto es el X por ciento de X número?

function porcentaje(numero, porcentaje) {
    let resultado = (numero * porcentaje) / 100
    let respuesta = `El ${porcentaje}% de ${numero} es ${resultado}`
    return respuesta
}

console.log(porcentaje(500000, 50))