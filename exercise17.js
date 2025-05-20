// Dado un número, mostrar todos los números del 1 hasta ese número, pero:
// 	•	Si es múltiplo de 3, mostrar "buzz"
// 	•	Si es múltiplo de 5, mostrar "lightyear"
// 	•	Si es múltiplo de 3 y 5, mostrar "buzzlightyear"

function mostrarBuzzLightyear(hastaNumero) {
    const resultado = [];
  
    for (let numero = 1; numero <= hastaNumero; numero++) {
      if (numero % 3 === 0 && numero % 5 === 0) {
        resultado.push("buzzlightyear");
      } else if (numero % 3 === 0) {
        resultado.push("buzz");
      } else if (numero % 5 === 0) {
        resultado.push("lightyear");
      } else {
        resultado.push(numero);
      }
    }
  
    return resultado;
  }


  console.log(mostrarBuzzLightyear(15));