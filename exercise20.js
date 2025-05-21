// Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre sí.

// Un anagrama es cuando las dos palabras tienen las mismas letras en la misma cantidad, pero en distinto orden.

// No hay que tener en cuenta espacios, signos, ni mayúsculas.

function limpiarTexto(texto) {
    texto = texto.toLowerCase().replace(/\g/, '').split('').sort().join('');
    return texto
}

function sonAnagramar(texto1, texto2) {
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(sonAnagramar('wildodev', 'devwildo'))
console.log(sonAnagramar('wildofari', 'wildogome'))