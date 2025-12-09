function showTime() {
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = "AM";

    if (h >= 12) {
        ampm = "PM";
    }

    if (h > 12) {
        h = h - 12;
    }

    if (h == 0) {
        h = 12;
    }

   if (h < 10) {
    h = "0" + h;}
   else {
    h = h;
     }


if (m < 10) {
    m = "0" + m;}
else {
    m = m;}

if (s < 10) {
    s = "0" + s;} 
else {
    s = s;}

    document.getElementById("clock").innerHTML = 
        h + ":" + m + ":" + s + " " + ampm;
}

setInterval(showTime, 1000);

showTime();