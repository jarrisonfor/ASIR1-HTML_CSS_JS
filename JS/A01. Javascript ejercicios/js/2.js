function presentacion(nombre, apellido, poblacion) {
    document.write('================= <br>')
    document.write('Hola ' + nombre + ' ' + apellido + '<br>')
    document.write('Adios habitante de ' + poblacion + '<br>')
    document.write('================= <br>')
}

let nombre = prompt('Dime tu nombre')
let apellido = prompt('Dime tu apellido')
let poblacion = prompt('Dime tu poblacion')

presentacion(nombre, apellido, poblacion)