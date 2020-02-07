let texto1 = prompt("Introduce un texto1:", "Lorem ipsumumaeo");
let miarray = [0, 0, 0, 0, 0]
let max = 0;
let min = 9999;
/* document.write('<table border="1"><tr>') */

//calcular numero de letras
for (let i = 0; i < texto1.length; i++) {
  if ((texto1[i] === 'a') || (texto1[i] === 'A')) {
    miarray[0]++;
  } else if ((texto1[i] === 'e') || (texto1[i] === 'E')) {
    miarray[1]++;
  } else if ((texto1[i] === 'i') || (texto1[i] === 'I')) {
    miarray[2]++;
  } else if ((texto1[i] === 'o') || (texto1[i] === 'O')) {
    miarray[3]++;
  } else if ((texto1[i] === 'u') || (texto1[i] === 'U')) {
    miarray[4]++;
  }
}

// comprobar minimo y maximo
for (let i = 0; i < miarray.length; i++) {
  if (max < miarray[i]) {
    max = miarray[i]
  }
  if (min > miarray[i]) {
    min = miarray[i]
  }
}

document.write('<table border="1"><tr>')
for (let i = 0; i < texto1.length; i++) {
  if (((texto1[i] === 'a') || (texto1[i] === 'A')) && (miarray[0] === max)) {
    document.write('<td style="background-color: red">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'e') || (texto1[i] === 'E')) && (miarray[1] === max)) {
    document.write('<td style="background-color: red">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'i') || (texto1[i] === 'I')) && (miarray[2] === max)) {
    document.write('<td style="background-color: red">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'o') || (texto1[i] === 'O')) && (miarray[3] === max)) {
    document.write('<td style="background-color: red">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'u') || (texto1[i] === 'U')) && (miarray[4] === max)) {
    document.write('<td style="background-color: red">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'a') || (texto1[i] === 'A')) && (miarray[0] === min)) {
    document.write('<td style="background-color: blue">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'e') || (texto1[i] === 'E')) && (miarray[1] === min)) {
    document.write('<td style="background-color: blue">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'i') || (texto1[i] === 'I')) && (miarray[2] === min)) {
    document.write('<td style="background-color: blue">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'o') || (texto1[i] === 'O')) && (miarray[3] === min)) {
    document.write('<td style="background-color: blue">' + texto1[i] + '</td>')
  } else if (((texto1[i] === 'u') || (texto1[i] === 'U')) && (miarray[4] === min)) {
    document.write('<td style="background-color: blue">' + texto1[i] + '</td>')
  } else {
    document.write('<td>' + texto1[i] + '</td>')
  }

  

}
document.write('</tr></table>')


console.log(miarray)
console.log(max)
console.log(min)







/* document.write('</tr></table>') */




/* let texto1 = prompt("Introduce un texto1:", "Lorem");
let texto2 = prompt("Introduce un texto2:", 'ipsum')

let array = [texto1, texto2]

if (array[0].length < array[1].length) {
  for (let i = 0; i < array[1].length; i++) {
    if (array[0][i] === undefined) {
      console.log(`- y ${array[1][i]}`)
    } else {
      console.log(`${array[0][i]} y ${array[1][i]}`)
    }
  }
} else {
  for (let i = 0; i < array[0].length; i++) {
    if (array[1][i] === undefined) {
      console.log(`${array[0][i]} y -`)
    } else {
      console.log(`${array[0][i]} y ${array[1][i]}`)
    }
  }
} */



/* var ordenar = [];
for (n = 1; n <= 7; n++) {
    var numero = parseInt(prompt("Digame el numero " + n, ""));
    ordenar.push(numero);
}

document.write("Array sin ordenar: " + ordenar + "</br>");

for (i = 0; i < (ordenar.length - 1); i++) {
    for (j = 0; j < (ordenar.length - i); j++) {
        if (ordenar[j] < ordenar[j + 1]) {
             aux = ordenar[j];
             ordenar[j] = ordenar[j + 1];
             ordenar[j + 1] = aux;
        }
    }
}
document.write("Array ordenada de forma complicada (burbuja): " + ordenar + " </br></br>"); */


