// Dado un array de películas con propiedades:
// titulo (nombre de la película),
// director (quién la dirigió),
// vista (si ya la viste o no),
// Crear una función que recorra ese array y devuelva una lista indicando:
// cuáles ya viste
// y cuáles te faltan por ver.

function mis_peliculas(listaPeliculas) {
    let resultado = [];

    for(let pelicula of listaPeliculas) {
        const {titulo, director, vista} = pelicula;

        if(vista) {
            resultado.push(`Ya viste la pelicula ${titulo} con el derector ${director}`)
        } else {
            resultado.push(`No viste la pelicula ${titulo} con el derector ${director}`)
        }
    }
    return resultado
}



const películas = [
    {
        titulo: "El senor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "El senor de los anillos 2",
        director: "Peter Jackson",
        vista: false
    },
    {
        titulo: "El senor de los anillos 3",
        director: "Peter Jackson",
        vista: false
    }
]

console.log(mis_peliculas(películas))