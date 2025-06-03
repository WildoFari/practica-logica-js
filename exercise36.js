function cuantasLetras(texto) {
    if (typeof texto !== "string") {
      return { error: "Debes ingresar un texto válido." };
    }
  
    let vocales = 0;
    let consonantes = 0;
  
    const letras = texto.toLowerCase();
  
    for (let i = 0; i < letras.length; i++) {
      const caracter = letras[i];
  
      if (/[aeiou]/.test(caracter)) {
        vocales++;
      } else if (/[a-z]/.test(caracter)) {
        consonantes++;
      }
    }
  
    return {
      vocales,
      consonantes
    };
  }


  const resultado = cuantasLetras("WildoDevPY");

if (resultado.error) {
  console.log(resultado.error);
} else {
  console.log(`Vocales: ${resultado.vocales}`);
  console.log(`Consonantes: ${resultado.consonantes}`);
}