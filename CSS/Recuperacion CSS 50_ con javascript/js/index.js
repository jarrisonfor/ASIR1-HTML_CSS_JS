var array = document.getElementsByClassName("celda");

for (let i = 0; i < array.length; i++) {
    if (array[i].textContent === "*") {
        array[i].style.backgroundColor = "#FFFA00";
        array[i].style.fontSize = "1.1em"
    } else if (array[i].textContent === "**") {
        array[i].style.backgroundColor = "#FFA101";
                array[i].style.fontSize = "1.1em"
        array[i].style.color = "white";
    } else if (array[i].textContent === "***") {
        array[i].style.backgroundColor = "#01C700";
                array[i].style.fontSize = "1.1em"
        array[i].style.color = "white";
    };
}