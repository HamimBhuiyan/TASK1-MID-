const btnDark = document.getElementById("b1");
const btnLight = document.getElementById("b2");

btnDark.onclick = function () {
    document.body.style.background = "black";
    document.body.style.color = "white";

    document.getElementById("h").style.background = "#333";
    document.getElementById("f").style.background = "#333";
}

btnLight.onclick = function () {
    document.body.style.background = "white";
    document.body.style.color = "black";

    document.getElementById("h").style.background = "#eee";
    document.getElementById("f").style.background = "#eee";
}
