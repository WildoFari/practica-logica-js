// Dado un array de strings, devolver otro array 
// solo con los elementos que tienen más de dos palabras.

function filtrarFrasesLargas(arr) {
    return arr.filter(frase => {
      const palabras = frase.trim().split(/\s+/); 
      return palabras.length > 2;
    });
  }
  
  console.log(filtrarFrasesLargas(["hola mundo", "esto es una frase larga", "otra frase corta"]));