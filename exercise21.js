// Queremos una función que reciba un texto y un número, y devuelva solamente los primeros X caracteres de ese texto.

function recortarTexto(texto, numero) {
    if(typeof texto !== "string" || typeof numero !== "number" ) {
        return "Datos invalidos"
    }

    return texto.substring(0, numero)
}

console.log(recortarTexto("Hola Mundo Soy WildoDev", 9))