
    // Dado un texto y una búsqueda, censurar todas las coincidencias de la búsqueda en el texto con [-CENSURADO-].
    // Si el texto y la búsqueda están vacíos, mostrar:
    // "No puedes leer el texto y la búsqueda".

    function censurar(texto, busqueda) {

        if(!texto && !busqueda) {
            return "No puedes leer el texto y la búsqueda"
        }

       const censurado = texto.replaceAll(busqueda,"[-CENSURADO-]")
            return censurado
    }


    console.log(censurar("Hola mundo, mundo bonito", "mundo"));