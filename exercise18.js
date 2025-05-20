// Dado un número, mostrar todos sus números divisores.

function mostrarDivisores(numero) {
        let divisores = [];
    
        for (let divisor = 1; divisor <= numero; divisor++) {
            if (numero % divisor === 0) {
                divisores.push(divisor);
            }
        }
    
        return divisores;
    }

    console.log(mostrarDivisores(12))