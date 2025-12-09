let imgArr = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg"
];

const prevBtn = document.getElementById("b1");
prevBtn.addEventListener('click', prev);

const nextBtn = document.getElementById("b2");
nextBtn.addEventListener('click', next);

let index = 0;

function changeImage() {
    document.getElementById("img").src = imgArr[index];
}

function next() {
    index++;
    if (index >= imgArr.length) {
        index = 0;
    }
    changeImage();
}

function prev() {
    index--;
    if (index < 0) {
        index = imgArr.length - 1;
    }
    changeImage();
}

setInterval(next, 3000);
changeImage();
