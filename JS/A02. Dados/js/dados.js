function alazar(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}
c1 = '<div class="cara cara1" id="c1"><div class="punto pcara11"><div></div></div></div>';
c2 = '<div class="cara cara2" id="c2"><div class="punto pcara21"><div></div></div><div class="punto pcara22"><div></div></div></div>';
c3 = '<div class="cara cara3" id="c3"><div class="punto pcara31"><div></div></div><div class="punto pcara32"><div></div></div><div class="punto pcara33"><div></div></div></div>';
c4 = '<div class="cara cara4" id="c4"><div class="punto pcara41"><div></div></div><div class="punto pcara42"><div></div></div><div class="punto pcara43"><div></div></div><div class="punto pcara44"><div></div></div></div>';
c5 = '<div class="cara cara5" id="c5"><div class="punto pcara51"><div></div></div><div class="punto pcara52"><div></div></div><div class="punto pcara53"><div></div></div><div class="punto pcara54"><div></div></div><div class="punto pcara55"><div></div></div></div>';
c6 = '<div class="cara cara6" id="c6"><div class="punto pcara61"><div></div></div><div class="punto pcara62"><div></div></div><div class="punto pcara63"><div></div></div><div class="punto pcara64"><div></div></div><div class="punto pcara65"><div></div></div><div class="punto pcara66"><div></div></div></div>';
dobles = 0;
menor = 9999;
mayor = 0;
media = 0;
for (let i = 0; i < 12; i++) {
    dado1 = alazar(1, 6);
    dado2 = alazar(1, 6);
    min = Math.min(dado1, dado2);
    max = Math.max(dado1, dado2);
    document.write('<div class="contenedor">');

    if (min === 1) {
        document.write(c1);
    } else if (min === 2) {
        document.write(c2);
    } else if (min === 3) {
        document.write(c3);
    } else if (min === 4) {
        document.write(c4);
    } else if (min === 5) {
        document.write(c5);
    } else if (min === 6) {
        document.write(c6);
    }

    if (max === 1) {
        document.write(c1);
    } else if (max === 2) {
        document.write(c2);
    } else if (max === 3) {
        document.write(c3);
    } else if (max === 4) {
        document.write(c4);
    } else if (max === 5) {
        document.write(c5);
    } else if (max === 6) {
        document.write(c6);
    }

    if (min < menor) {
        menor=min
    }
    if (max > mayor) {
        mayor=max
    }

    media += min + max

    if (max == min) {
        dobles++
    } else if (max == min) {
        dobles++
    } else if (max == min) {
        dobles++
    } else if (max == min) {
        dobles++
    } else if (max == min) {
        dobles++
    } else if (max == min) {
        dobles++
    }
    document.write('</div>');
    document.write('<br>');

}


document.write('Numero de dobles: ' + dobles);
document.write('<br>');
document.write('El menor dado: ' + menor);
document.write('<br>');
document.write('El mayor dado: ' + mayor);
document.write('<br>');
document.write('La media de los dados: ' + media/24)