// Dada una cadena de texto, devolver el carácter que más veces se repite.

function letraMasRepetida(texto) {
    const contadorLetras = {};
    let letraMasFrecuente = '';
    let cantidadMaxima = 0;
  
    for (let letra of texto) {
      contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
  
      if (contadorLetras[letra] > cantidadMaxima) {
        letraMasFrecuente = letra;
        cantidadMaxima = contadorLetras[letra];
      }
    }
  
    return letraMasFrecuente;
  }

  console.log(letraMasRepetida('holaaa'))