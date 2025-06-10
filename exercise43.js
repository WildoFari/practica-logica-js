// Dado un array de números, devolver la media de todos ellos.

function media(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      return "Ingresa un array válido";
    }
  
    const soloNumeros = numeros.filter(n => typeof n === "number");
    const suma = soloNumeros.reduce((acc, n) => acc + n, 0);
    return suma / soloNumeros.length;
  }

  console.log(media([1, 2, 3, 4, 5]))