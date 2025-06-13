// Dado un objeto y el nombre de una propiedad,
//  comprobar si esa propiedad existe o no en el objeto.

function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
  }
  const persona = {
    nombre: "Ana",
    edad: 30
  };
  
  console.log(tienePropiedad(persona, "edad"));    
  console.log(tienePropiedad(persona, "altura"));  
    