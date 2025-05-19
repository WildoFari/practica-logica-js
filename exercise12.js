// Dado un número, mostrar todos los números desde ese numero de 8 en 8,
//  en una lista con guiones y cada número debe empezar por "nº".


function restarNumero(numero) {
    let resultado = `Del numero Nº ${numero}`

    while(numero > 0) {
        resultado += `--- Nº${numero} \n`
        numero -= 8
    }
    return resultado
}


console.log(restarNumero(299))
