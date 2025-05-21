// Dados dos números, indicar cuál es mayor y cuál es menor.

function cualEsMayor(num1, num2) {
    let resultado = ""

    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return "Debes de ingresar dos numeros"
    }

    if(num1 === num2) {
        return "Los numeros son iguales"
    }

    if(num1 < num2) {
        resultado = `El numero ${num2} es el mayor. Y el menor es el numero ${num1}`
    } else {
        resultado = `El numero ${num1} es el mayor. Y el menor es el numero ${num2}`
    }

    return resultado;
}

console.log(cualEsMayor(10, 30))