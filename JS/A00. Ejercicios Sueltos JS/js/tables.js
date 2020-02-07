function tablas(nf, nc) {
    if (isNaN(nf) || nf <= 0 || isNaN(nc) || nc <= 0) {
        return false;
    }
    document.write('<table border=1>')
    for (let f = 0; f < nf; f++) {
        document.write('<tr>')
        for (let c = 0; c < nc; c++) {
            document.write('<td>')
            document.write('col ' + c)
            document.write('</td>')
        }
        document.write('</tr>')
    }
    document.write('</table>')
    return true
}

let filas = parseInt(prompt('Numero de filas', 5))
let columnas = parseInt(prompt('Numero de columnas', 5))

while(!tablas(filas, columnas)) {
    alert('Tiene que tener un numero mayor que 0, vuelve a intentarlo')
    filas = parseInt(prompt('Numero de filas', 5))
    columnas = parseInt(prompt('Numero de columnas', 5))
}