function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function navidad() {
    var hoy = new Date();
    var navi = new Date();
    navi.setMonth(11);
    navi.setDate(24);
    var dias = 0;
    for (i = hoy.getMonth(); i <= navi.getMonth(); i++) {
        copia = new Date(hoy.getFullYear(), i, 0).getDate();
        if (hoy.getMonth() == i) {
            dias += copia - hoy.getDate();
        } else if (i == 11) {
            dias += navi.getDate();
        } else {
            dias += copia;
        }
    }
    return dias;
}

function formato() {
    let f = new Date();
    let pmam = f.getHours() <= 12 ? 'PM' : 'AM';
    var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds() + ' ' + pmam + ' ' + dias[f.getUTCDay()] + ', ' + f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear();
}

function enero(ano1, ano2) {
    let fechas = [];
    for (i = ano1; i <= ano2; i++) {
        let a = new Date(i, 0, 1);
        if (a.getUTCDay() == 1) {
            fechas.push(a);
        }
    }
    return fechas;
}

function control() {
    let inicio = Date.now();
    prompt('nombre', 'yeray');
    prompt('apellidos', 'gonzalez mancebo');
    let final = Date.now();
    let resultado = (final - inicio) / 1000 + ' Segundos';
    return resultado;
}

console.log(calcularEdad('02/25/1995'));
console.log(navidad());
console.log(formato());
console.log(enero(2000, 2019));
console.log(control());