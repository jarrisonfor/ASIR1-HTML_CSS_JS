/* function calctext(texto) {
    var palabras = texto.split(" ");
    document.write("Numero de palabras: " + palabras.length + "</br>");
    document.write("Primera palabra: " + palabras[0] + "</br>");
    document.write("Ultima palabra: " + palabras[palabras.length - 1] + "</br>");
    document.write("Orden inverso: " + palabras.reverse() + "</br>");
    document.write("Ordenado A -> Z: " + palabras.sort() + "</br>");
    document.write("Ordenado Z -> A: " + palabras.reverse(palabras.sort() + "</br>"));
}
*/


/* calctext(texto)  */

texto = prompt("Introduce un texto:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu arcu gravida, dignissim arcu id, dictum diam. Sed gravida dictum quam ac euismod. Aliquam ut ligula sem. Vivamus laoreet, tellus ac eleifend rutrum, sem velit ultricies arcu, nec venenatis neque lacus a tellus. Phasellus non libero sit amet elit tempor iaculis. Nam maximus mattis erat. Suspendisse ac purus enim. In cursus semper leo in ornare. Nunc congue ornare sollicitudin. Aenean vulputate lacus vitae risus ultrices iaculis in at neque. Vestibulum sollicitudin lectus ac sapien maximus, eget tempus purus varius. Aenean a nibh metus. Cras non lacus non ex commodo scelerisque. Mauris purus urna, sollicitudin sed rutrum in, hendrerit sit amet turpis. Morbi ornare ante sit amet diam blandit, in convallis ipsum posuere.");
tmp = ''
palabras = []
npalabras = 0

for (i = 0; i < texto.length; i++) {
    if (texto[i] === ' ') {
        palabras[npalabras] = tmp  
        npalabras++
        tmp = ''
    } else {
        tmp += texto[i]
    }
}
if (texto[i - 1] != ' ') {
palabras[npalabras] = tmp 
npalabras++
}

document.write(palabras + '<br>')
document.write(npalabras + '<br>')
document.write(palabras[0] + '<br>')
document.write(palabras[palabras.length - 1] + '<br>')

for (let i = palabras.length - 1; i != 0; i--) {
    document.write(palabras[i] + ' ')
}

