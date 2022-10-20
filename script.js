const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");

function digitalClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    if(h >= 12) {
        h = ((h-12) == 0) ? 12 : (h-12);
    } else {
        h = h;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;

    hours.innerText = h;
    minutes.innerText = m;
}

setInterval(() => {
    digitalClock();
})