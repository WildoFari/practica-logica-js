// Dado un string, queremos:

// Saber qué letras aparecen solo una vez.

// Encontrar cuál es la primera de esas letras.

function letrasUnicas(texto) {
    const contador = {};
  
    for (const letra of texto) {
      contador[letra] = (contador[letra] || 0) + 1;
    }
  
    const unicas = texto.split("").filter(letra => contador[letra] === 1);
  
    return {
      letrasUnicas: [...new Set(unicas)],
      primeraUnica: unicas[0] || null
    };
  }
  

  console.log(letrasUnicas("abacddbec"));