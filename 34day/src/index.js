// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const input = document.querySelector("select");
const country = "country";

function saveCountry(text) {
    localStorage.setItem(country, text);
}

function paintGreeting(text) {
    input.value = text;
}

function askForCountry() {
    input.setAttribute("autofocus", "autofocus");
}

function loadCountry() {
    const currentCountry = localStorage.getItem(country);
    if (currentCountry === null) {
        askForCountry();
    } else {
        paintGreeting(currentCountry);
    }
}

// input.addEventListener("submit", handleSubmit);
input.addEventListener("change", function (event) {
    const result = event.target.value;
    saveCountry(result);
});

function init() {
    loadCountry();
}

init();
