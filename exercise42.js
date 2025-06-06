// Dados dos números, devolver un número aleatorio entero entre ellos (incluyéndolos).
function aleatorio(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
      return "Debes ingresar dos números válidos";
    }
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(aleatorio(1, 10))