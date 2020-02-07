function circulos(radio) {
    document.write('Area: ' + Math.PI * radio * 2 + '<br>')
    document.write('longitud: ' + Math.PI * radio * radio + '<br>' + '<br>')

    document.write(`<div style="width: ${radio * 2}px;height: ${radio * 2}px; background-color: orange; border: 1px solid black; border-radius: 50%"></div><br>`)
    document.write(`<div style="width: ${Math.PI * radio * radio}px; border: 1px solid black;"></div>`)
}

radio = parseFloat(prompt('Dame el radio para calcular el area y la longitud', 5))
circulos(radio)