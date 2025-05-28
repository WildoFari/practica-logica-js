// Dado un número (cantidad de días), mostrar a cuántos años, meses y días equivale.


function calcularDias(dias) {
    if(typeof dias !== "number" || typeof dias < 0) {
        return "Ingresa un numero de dias que sea valido"
    }

    const anios = Math.floor(dias/365);
    const diasDespuesDeAnios = dias % 365;

    const meses = Math.floor(diasDespuesDeAnios / 30);
    const diasFinales = diasDespuesDeAnios % 30;


    return `Los anios son de ${anios}, los meses de ${meses} y dias de ${diasFinales}`

}

console.log(calcularDias(599))
