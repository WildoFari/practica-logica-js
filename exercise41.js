// Dado un número, mostrar un triángulo de asteriscos con ese número de filas.


function triangulo(filas) {
    if (typeof filas !== "number" || filas < 1) {
      return "Número inválido";
    }
  
    for (let i = 1; i <= filas; i++) {
      const espacios = " ".repeat(filas - i);
      const estrellas = "*".repeat(i * 2 - 1);
      console.log(espacios + estrellas);
    }
  }

  console.log(triangulo(10))