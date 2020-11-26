// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const colors = ["#3498db", "#9b59b6", "#f1c40f"];
const bodyBackgroundColor = document.querySelector("body");
const BASE_COLOR = "#9b59b6";

function handleWindowResize() {
    window.addEventListener("resize", function () {
        if (window.innerWidth < 600) {
            bodyBackgroundColor.style.backgroundColor = colors[0];
        } else if (window.innerWidth > 600 && window.innerWidth < 1000) {
            bodyBackgroundColor.style.backgroundColor = colors[1];
        } else {
            bodyBackgroundColor.style.backgroundColor = colors[2];
        }
    });
}

handleWindowResize();

function init() {
    bodyBackgroundColor.style.backgroundColor = BASE_COLOR;
}

init();
