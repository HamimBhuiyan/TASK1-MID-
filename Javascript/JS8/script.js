let userType = document.getElementById("userType");
let rollLabel = document.getElementById("l1");
let rollInput = document.getElementById("i1");
let depLabel = document.getElementById("l2");
let depInput = document.getElementById("i2");

rollLabel.style.display = "none";
rollInput.style.display = "none";
depLabel.style.display = "none";
depInput.style.display = "none";

userType.onchange = function () {
    let v = userType.value;

    if (v === "student") {
        rollLabel.style.display = "block";
        rollInput.style.display = "block";

        depLabel.style.display = "none";
        depInput.style.display = "none";
    }
    else if (v === "teacher") {
        depLabel.style.display = "block";
        depInput.style.display = "block";

        rollLabel.style.display = "none";
        rollInput.style.display = "none";
    }
    else {
        rollLabel.style.display = "none";
        rollInput.style.display = "none";
        depLabel.style.display = "none";
        depInput.style.display = "none";
    }
}
