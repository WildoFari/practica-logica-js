function contarPalabraEnFrase(frase, palabra) {
    const palabras = frase.toLowerCase().split(" ");
    let contador = 0;

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra.toLowerCase()) {
            contador++;
        }
    }

    return `La palabra "${palabra}" aparece ${contador} veces.`;
}

console.log(contarPalabraEnFrase("Hola mundo hola mundo hola", "hola"));