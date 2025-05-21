// Dada una cadena de texto, poner en mayúscula la primera
//  letra de cada palabra y luego devolver la cadena modificada.

function enMayuscula(texto) {
    if (typeof texto !== "string") {
      return "Debes ingresar un texto válido.";
    }
  
    const palabras = texto.split(" ");
    const resultado = [];
  
    for (let palabra of palabras) {
      let primeraLetra = palabra.charAt(0).toUpperCase();
      let resto = palabra.slice(1).toLowerCase();
      resultado.push(primeraLetra + resto);
    }
  
    return resultado.join(" ");
  }
  
  console.log(enMayuscula("hola mundo"));