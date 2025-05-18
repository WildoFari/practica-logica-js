// Dado un número, mostrar una escalera con escalones de [-] usando el número para los niveles de la escalera.

function escalera(nivel) {
    resultado = "";

    for(let i = 1; i <= nivel; i++) {
        resultado += "[-]".repeat(i) + "\n"
    }
    return resultado
}

console.log(escalera(7))