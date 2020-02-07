var getDaysInMonth = function (month) {
    return new Date(2019, month, 0).getDate();
  };
  
  var mes = parseInt(prompt('Dime un numero de mes:', 5));
  
  
  if (isNaN(mes) || mes <= 0 || mes >= 13) {
    alert('error');
  } else if (mes === 1 || mes === 2 || mes === 12) {
    alert('inverno')
    if (mes === 1) {
      alert(getDaysInMonth(mes) + ' Enero')
    } else if (mes === 2) {
      alert(getDaysInMonth(mes) + ' febrero');
    } else {
      alert(getDaysInMonth(mes) + ' diciembre');
    }
  
  } else if (mes === 3 || mes === 4 || mes === 5) {
    alert('primavera')
    if (mes === 3) {
      alert(getDaysInMonth(mes) + ' marzo');
    } else if (mes === 4) {
      alert(getDaysInMonth(mes) + ' abril');
    } else {
      alert(getDaysInMonth(mes) + ' mayo');
    }
  
  } else if (mes === 6 || mes === 7 || mes === 8) {
    alert('verano')
    if (mes === 6) {
      alert(getDaysInMonth(mes) + ' junio');
    } else if (mes === 7) {
      alert(getDaysInMonth(mes) + ' julio');
    } else {
      alert(getDaysInMonth(mes) + ' agosto');
    }
  
  } else if (mes === 9 || mes === 10 || mes === 11) {
    alert('otoño')
    if (mes === 9) {
      alert(getDaysInMonth(mes) + ' septiembre');
    } else if (mes === 10) {
      alert(getDaysInMonth(mes) + ' octubre');
    } else {
      alert(getDaysInMonth(mes) + ' noviembre');
    }
  
  };
  
  switch (mes) {
    case 1:
      alert(getDaysInMonth(mes) + ' enero');
      break;
    case 2:
      alert('inverno');
      alert(getDaysInMonth(mes) + ' febrero');
      break;
    case 3:
      alert(getDaysInMonth(mes) + ' marzo');
      break;
    case 4:
      alert(getDaysInMonth(mes) + ' abril');
      break;
    case 5:
      alert('primavera');
      alert(getDaysInMonth(mes) + ' mayo');
      break;
    case 6:
      alert(getDaysInMonth(mes) + ' junio');
      break;
    case 7:
      alert(getDaysInMonth(mes) + ' julio');
      break;
    case 8:
      alert('verano');
      alert(getDaysInMonth(mes) + ' agosto');
      break;
    case 9:
      alert(getDaysInMonth(mes) + ' septiembre');
      break;
    case 10:
      alert(getDaysInMonth(mes) + ' octubre');
      break;
    case 11:
      alert('otoño');
      alert(getDaysInMonth(mes) + ' noviembre');
      break;
    case 12:
      alert('inverno');
      alert(getDaysInMonth(mes) + ' diciembre');
      break;
    default:
      alert(' error');
      break;
  };