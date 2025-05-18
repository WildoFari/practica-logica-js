// Dibujar un cuadrado hueco con asteriscos (*)
// Ejemplo:
// ****
// *  *
// *  *
// ****

function cuadradoHueco(cantidad) {
    let resultado = "";

    for(let fila = 0; fila < cantidad; fila ++) {
        if(fila === 0 || fila === cantidad - 1) {
            resultado += "*".repeat(cantidad);
        } else {
            resultado += "*" + " ".repeat(cantidad - 2) + "*"
        }
        resultado += "\n"
    }
    return resultado
}

console.log(cuadradoHueco(5))