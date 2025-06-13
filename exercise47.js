// Dado un array de objetos donde cada usuario tiene una lista de aficiones,
// devolver cuáles son las aficiones más repetidas.

function aficionesMasComunes(usuarios) {
    const contador = {};
  
    usuarios.forEach(usuario => {
      usuario.aficiones.forEach(aficion => {
        if (contador[aficion]) {
          contador[aficion]++;
        } else {
          contador[aficion] = 1;
        }
      });
    });
  
    return contador;
  }

  const usuarios = [
    { nombre: "Ana", aficiones: ["leer", "correr", "viajar"] },
    { nombre: "Luis", aficiones: ["correr", "jugar", "viajar"] },
    { nombre: "María", aficiones: ["leer", "bailar", "correr"] }
  ];
  
  console.log(aficionesMasComunes(usuarios));