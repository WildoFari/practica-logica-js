// Dado un array de objetos con el nombre del alumno y su nota, 
// mostrar cuántos aprobaron y cuántos reprobaron.

//     Consideramos aprobado si la nota es mayor o igual a 60
//      (puedes ajustarlo si usás otro criterio).


function contarResultados(alumnos) {
    let aprobados = 0;
    let reprobados = 0;

    alumnos.forEach(alumno => {
        if(alumno.nota >= 60) {
            aprobados ++;
        } else {
            reprobados ++;
        }
    })
    return {aprobados, reprobados};
}

const alumnos = [
    { nombre: "Ana", nota: 75 },
    { nombre: "Luis", nota: 55 },
    { nombre: "María", nota: 20 },
    { nombre: "Pedro", nota: 40 }
  ];
  
  console.log(contarResultados(alumnos));

  