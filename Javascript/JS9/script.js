let darkMode = false;

function toggleTheme() {
    darkMode = !darkMode;

    if (darkMode) {
       
        document.body.style.backgroundColor = "#222"; 
        document.body.style.color = "#fff"; 
    } else {
        
        document.body.style.backgroundColor = "#fff"; 
        document.body.style.color = "#000"; 
    }
}
const header = document.querySelector("header");
const footer = document.querySelector("footer");
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        if (header) header.style.backgroundColor = "#333";
        if (footer) footer.style.backgroundColor = "#333";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";

        if (header) header.style.backgroundColor = "";
        if (footer) footer.style.backgroundColor = "";
    }
}
