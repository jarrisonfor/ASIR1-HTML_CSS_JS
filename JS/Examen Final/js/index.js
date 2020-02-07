/* funciones auxiliares */
function alazar(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}

function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

/* ejercicio 1 */
function ejercicio1() {
    let suma = [];
    document.write('<table cellspacing="0"><tr>');
    for (let i = 0; i < 60; i++) { /* bucle que pushea a la array y hace el td */
        dado1 = alazar(1, 6);
        dado2 = alazar(1, 6);
        if (dado1 == dado2) {
            suma.push(dado1 + dado2);
            document.write('<td class="' + (dado1 + dado2) + '">' + (dado1 + dado2) + '</td>');
        }
    }
    document.write('</tr></table><br><br>');
    let array1 = document.getElementsByClassName(Math.min(...suma));
    let array2 = document.getElementsByClassName(Math.max(...suma));
    for (let i = 0; i < array1.length; i++) { /* pinto las celdas que sean menores y mayores usando dos bucles*/
        array1[i].style.backgroundColor = "red";
    }
    for (let i = 0; i < array2.length; i++) {
        array2[i].style.backgroundColor = "blue";
    }
}

function ejercicio2(n, m) { /* ejercicio 3 */
    document.write('<table cellspacing="0">');
    for (let r = 1; r <= m; r++) {
        document.write('<tr><td>' + r + '</td><td>x</td><td>' + n + '</td><td class="resultado">' + r * n + '</td></tr>'); /* creo la tabla con los resultados */
    }
    document.write('</tr></table><br><br>');
}

function ejercicio3(n) { /* ejercicio 3 */
    document.write('<table cellspacing="0">');
    document.write('<tr><td>1</td>');
    let cont = 1;
    for (let i = 2; i < n; i++) {
        if (primo(i)) { /* si es primo, pinta la celda */
            cont++;
            document.write('<td>' + i + '</td>');
        }
        if (cont == 10) { /* cuando llega a 10, termina el tr y empieza otro nuevo */
            document.write('</tr><tr>');
            cont = 0;
        }
    }
    document.write('</tr></table><br><br>');
}


/* llamadas a las funciones */

ejercicio1();

ejer21 = parseInt(prompt('Dame un numero para multiplicar.', 7));
ejer22 = parseInt(prompt('Cuantas veces lo multiplico?.', 12));
ejercicio2(ejer21, ejer22);

ejer31 = parseInt(prompt('Dame un numero para calcular los valores primos.', 50));
ejercicio3(ejer31);