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

function ejercicio3(numero, base) {
    var resto = '';
    var hexa = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    while (numero/base != 0) {
        resto = hexa[numero%base] + resto;
        numero = parseInt(numero/base);
    }
    return resto;
}

let numero = parseInt(prompt('Dame un numero en decimal', 225))

document.write(ejercicio3(numero, 16) + ' hexadecimal <br>')
document.write(ejercicio5(numero, 2) + ' binario <br>')