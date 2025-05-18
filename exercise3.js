// Dada una palabra, buscarla en una frase y devolver cuántas veces aparece.
// Tanto la frase como la palabra deben ser parámetros de una función.


function contarPalabraEnFrase(frase, palabra) {
    const fraseLimpia = frase.toLowerCase().replace(/[.,!?:;"']/g, "");
    const palabras = fraseLimpia.split(" ");
    let contador = 0;

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra.toLowerCase()) {
            contador++;
        }
    }

    return `La palabra "${palabra}" aparece ${contador} veces.`;
}

console.log(contarPalabraEnFrase("Hola mundo hola mundo hola", "Hola"));