// Dada una cadena de texto, darle la vuelta e 
// invertir el orden de sus caracteres, 
// sin usar métodos propios del lenguaje, 
// solo estructuras de control.


function invertirTexto(texto) {
    let resultado = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }

    return resultado;
}

console.log(invertirTexto("hola"));
