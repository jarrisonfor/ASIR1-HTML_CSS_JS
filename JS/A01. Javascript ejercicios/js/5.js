function ejercicio5(numero, base) {
    let resultado = ''
    let resto = ''
    while (numero != 0) {
        resto = numero % base
        numero = parseInt(numero / base)
        resultado = resto + resultado
    }
    return resultado
}

let numero = parseInt(prompt('Dame un numero decimal', 225))
let base = parseInt(prompt('Dame una base', 16))

document.write(ejercicio5(numero, base))