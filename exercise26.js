// Dado un número, mostrar su serie de Fibonacci.

function fibonacci(num) {
    const serie = [0, 1];

    for(let i = 2; i < num; i++) {
        const siguiente = serie[i - 1] + serie[i - 2]
        serie.push(siguiente)
    }
    return [serie, serie [serie.length -1]]
}

console.log(fibonacci(20))