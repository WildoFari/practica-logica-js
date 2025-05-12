function esPalindromo(text) {
    const reverse = text.split('').reverse().join('')
    return reverse === text
}

console.log(esPalindromo('oso'))