const toggle = document.querySelector("#toggle");
const body = document.body;

toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
    isLight = !isLight;

    if (isLight) {
        toggle.innerText = "☀";
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
    } else {
        toggle.innerText = "🌑";
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
    }
}
