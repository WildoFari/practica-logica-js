// Dado un número (en grados), indicar qué tipo de ángulo es.

function tipoDeAngulo(grados) {
    if (typeof grados !== "number" || grados < 0 || grados > 360) {
      return "Ingresa un valor entre 0 y 360 grados.";
    }
  
    if (grados === 0) return "Ángulo nulo";
    if (grados > 0 && grados < 90) return "Ángulo agudo";
    if (grados === 90) return "Ángulo recto";
    if (grados > 90 && grados < 180) return "Ángulo obtuso";
    if (grados === 180) return "Ángulo llano";
    if (grados > 180 && grados < 360) return "Ángulo cóncavo o reflejo";
    if (grados === 360) return "Ángulo completo";
  }

console.log(tipoDeAngulo(180))