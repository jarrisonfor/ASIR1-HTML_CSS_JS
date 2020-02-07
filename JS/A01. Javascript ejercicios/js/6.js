function letra(dni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (dni < 0 || dni > 99999999 || isNaN(dni) || dni === null || dni === '') {
        document.write("numero de digitos incorrecto");
    } else {
        document.write(dni + letras[dni % 23])
    }
}

var dni = prompt("Introduce tu número de DNI (sin la letra)", "");

letra(dni)