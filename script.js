const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const ampm = document.querySelector(".ampm");
const weekday = document.querySelector(".weekday");

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function showDate() {
    const d = new Date();
    let dayWeekday = weekdays[d.getDay()];
    let dayDate = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    let currentDate = `${dayDate}-${month}-${year}`;

    weekday.innerText = dayWeekday + " " + currentDate;
}

showDate()

function digitalClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h >= 12) {
        h = ((h-12) == 0) ? 12 : (h-12);
    } else {
        h = h;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}

setInterval(() => {
    digitalClock();
})
