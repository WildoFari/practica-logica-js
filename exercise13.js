// Dado un array, dividirlo en tantos sub-arrays como sea necesario, basándonos en un número que indique su tamaño.
// Dividirlo en arrays de X elementos.


function dividirEnChunks(array, tamaño) {
    const resultado = [];
    let i = 0;
  
    while (i < array.length) {
      const chunk = array.slice(i, i + tamaño);
      resultado.push(chunk);
      i += tamaño;
    }
  
    return resultado;
  }

console.log(dividirEnChunks([1, 2, 3, 4, 5, 6, 7], 3));