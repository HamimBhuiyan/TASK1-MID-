const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.onclick = function () {
    let text = document.getElementById("textarea").value;

    if (text.trim() === "") {
        result.innerHTML = "Please enter some text.";
        return;
    }

    let charCount = text.length;
    let wordCount = text.trim().split(" ").length;
    let reversed = text.split("").reverse().join("");

    result.innerHTML ="Characters: " + charCount + "<br>" + "Words: " + wordCount + "<br>" +"Reversed: " + reversed;
};
