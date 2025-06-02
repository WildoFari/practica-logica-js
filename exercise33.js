// Crear un reloj que muestre la hora actual cada segundo
// (usando el objeto Date solo para obtener la hora una vez cada segundo).

class Reloj {
    encender() {
      setInterval(() => {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        const segundos = ahora.getSeconds().toString().padStart(2, "0");
  
        console.log(`${horas}:${minutos}:${segundos}`);
      }, 1000);
    }
  }

  let mi_relog = new Reloj();
mi_relog.encender();
