// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

var dateToChristmas = document.querySelector("#dateToChristmas");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");

    let today = new Date();
    today = today.getTime();

    const calculate = xmasDay - today;
    const calculateDay = Math.floor(calculate / (1000 * 60 * 60 * 24)); //일
    const calculateHours = Math.floor((calculate / (1000 * 60 * 60)) % 24); // 시간
    const calculateMinutes = Math.floor((calculate / (1000 * 60)) % 60); // 분
    const calculateSeconds = Math.floor((calculate / 1000) % 60); //초

    dateToChristmas.innerText = `${calculateDay}d ${
        calculateHours < 10 ? `0${calculateHours}` : calculateHours
    }h ${calculateMinutes < 10 ? `0${calculateMinutes}` : calculateMinutes}m ${
        calculateSeconds < 10 ? `0${calculateSeconds}` : calculateSeconds
    }s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
