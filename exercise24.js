// Dado un array de enteros y un número, detectar si esa lista es una permutación del 1 al número aportado.


function permutacion(lista, numero) {
    if (!Array.isArray(lista) || typeof numero !== "number") {
      return "Datos inválidos";
    }
  
    if (lista.length !== numero) {
      return false;
    }
  
    const conjunto = new Set(lista);
  
    if (conjunto.size !== numero) {
      return false;
    }
  
    for (let i = 1; i <= numero; i++) {
      if (!conjunto.has(i)) {
        return false;
      }
    }
  
    return true;
  }
  