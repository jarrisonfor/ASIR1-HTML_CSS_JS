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

function octal(n) {
    let c = 0
    let resultado = 0
    for (let i = n.length - 1; i >= 0; i--) {
        resultado = resultado + n[i] * 8 ** c
        c++
    }
    return resultado
}

let n = `${parseInt(prompt('Dame un numero octal', 10))}`




document.write(octal(n) + ' numero en octal<br>')
document.write(ejercicio5(octal(n), 2) + ' numero en binario')