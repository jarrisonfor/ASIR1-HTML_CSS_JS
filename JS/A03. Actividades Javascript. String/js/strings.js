function contador(frase, filtro) {
    cont = 0
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === filtro) {
            cont++
        }
    }
    return cont
}

function indice(frase) {
    copia = ''
    for (let i = 0; i < frase.length; i++) {
        copia += frase[i] + i
    }
    return copia
}

function hack(frase) {
    copia = ''
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === 'a') {
            copia = 4 + copia
        } else if (frase[i] === 'a') {
            copia = 4 + copia
        } else if (frase[i] === 'e') {
            copia = 3 + copia
        } else if (frase[i] === 'i') {
            copia = 1 + copia
        } else if (frase[i] === 'o') {
            copia = 0 + copia
        } else if (frase[i] === 'u') {
            copia = 5 + copia
        } else {
            copia = frase[i] + copia
        }
    }
    return copia
}

console.log(contador('zarasa', 'a'))
console.log(indice('casa'));
console.log(hack('adios'));