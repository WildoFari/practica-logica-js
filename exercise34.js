// Dado dos números, devolver los resultados de las operaciones básicas entre ellos:
// suma, resta, producto y división.

function calculadora(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "Debes ingresar dos números válidos.";
    }
  
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
  
    console.log(`La suma es: ${suma}`);
    console.log(`La resta es: ${resta}`);
    console.log(`La multiplicación es: ${multiplicacion}`);
    console.log(`La división es: ${division}`);
  }

calculadora(5,6)