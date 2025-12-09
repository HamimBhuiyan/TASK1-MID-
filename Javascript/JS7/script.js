let para = document.getElementById("p");

let btnBg = document.getElementById("bc");
let btnFont = document.getElementById("if");
let btnCenter = document.getElementById("c");
let btnReset = document.getElementById("reset");

let currentFont = 16; // default

btnBg.onclick = function () {
    para.style.backgroundColor = "lightblue";
}

btnFont.onclick = function () {
    currentFont = 20;
    para.style.fontSize = currentFont + "px";
}

btnCenter.onclick = function () {
    para.style.textAlign = "center";
}

btnReset.onclick = function () {
    para.style.backgroundColor = "";
    para.style.textAlign = "left";
    para.style.fontSize = "16px";
    currentFont = 16;
}
