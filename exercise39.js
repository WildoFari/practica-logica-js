// Comprobar si un texto ingresado tiene el formato correcto de un email.

function emailValido(email) {
    if(typeof email !== "string") {
        return "Debes de ingresar un email valido"
    }

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return expresion.test(email)
}

console.log(emailValido("WildoDevPY@gmail.com"))