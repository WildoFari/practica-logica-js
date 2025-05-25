// Dado un string, convertirlo completo a mayúsculas o minúsculas según qué tipo de letra aparezca más.

// Si hay más mayúsculas → poner todo en MAYÚSCULAS

// Si hay más minúsculas (o iguales) → poner todo en minúsculas

function mayusMinus(texto) {
    let contadorMayusculas = 0;
    let contadorMinusculas = 0;

    for( let letra of texto) {
        if( letra >= "A" && letra <= "Z") {
            contadorMayusculas++
        } else if (letra >= "a" && letra <= "z") {
            contadorMinusculas++
        }
    }

    if (contadorMayusculas > contadorMinusculas) {
        return texto.toUpperCase();
    } else {
        return texto.toLowerCase();
    }
}


console.log(mayusMinus("Hola Mundo"))