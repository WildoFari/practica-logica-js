// Dado un array de elementos o un texto, devolver el elemento o palabra que más se repite

function masRepetido(entrada) {
    if (typeof entrada !== "string" && !Array.isArray(entrada)) {
      return "Debes ingresar un texto o un array.";
    }
  
    // Convertimos string a array si es necesario
    const elementos = typeof entrada === "string"
      ? entrada.toLowerCase().split(" ")
      : entrada;
  
    const contador = {};
    let maxRepeticiones = 0;
    let masFrecuente = null;
  
    for (const el of elementos) {
      contador[el] = (contador[el] || 0) + 1;
  
      if (contador[el] > maxRepeticiones) {
        maxRepeticiones = contador[el];
        masFrecuente = el;
      }
    }
  
    return masFrecuente;
  }

  console.log(masRepetido(["hola", "mundo", "hola", "mundo", "mundo", "hola"]))