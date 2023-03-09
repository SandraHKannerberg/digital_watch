const weekday = document.querySelector(".weekday");
const clock = document.querySelector(".clock-body");
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

function formatAMPM(date) {
    let h = date.getHours();
    let m = date.getMinutes();

    var ampmValue = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? '0'+m : m;

    var strTime = h + ':' + m + '' + ampmValue;
    return strTime;
  }
  
clock.innerText = (formatAMPM(new Date));
