// Contar cuántos bucles tiene un número

function contarBucle(numero) {
    const buclesPorDigito = {
      "0": 1,
      "6": 1,
      "8": 2,
      "9": 1,
    };
  
    let totalBucles = 0;
    const digitos = numero.toString();
  
    for (const digito of digitos) {
      totalBucles += buclesPorDigito[digito] || 0;
    }
  
    return totalBucles;
  }

  console.log(contarBucle(123456789));
  