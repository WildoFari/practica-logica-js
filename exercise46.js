// Recorrer todas las combinaciones posibles de letras contiguas dentro de un string.
// Ejemplo: si el string es "abc", los substrings son:

function obtenerSubstrings(texto) {
    const substrings = [];
  
    for (let inicio = 0; inicio < texto.length; inicio++) {
      for (let fin = inicio + 1; fin <= texto.length; fin++) {
        const sub = texto.slice(inicio, fin);
        substrings.push(sub);
      }
    }
  
    return substrings;
  }

  console.log(obtenerSubstrings('abc'))