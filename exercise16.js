// Dada una cadena de texto, devolver cuántas vocales (a, e, i, o, u) tiene.

function contarVocales(texto) {
    const vocales = "aeiouAEIOU"
    let cantidad = 0

   for( let letra of texto) {
        if(vocales.includes(letra)) {
            cantidad++
        }
   }

   return cantidad;
}

console.log(contarVocales("Wildo Fari"))