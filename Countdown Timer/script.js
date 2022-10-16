const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('mins');
const s = document.getElementById('seconds');

const newYears = '1 Jan 2023';

function countdown() {
    const newYearsData = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsData - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds / 60 % 60);
    const seconds = Math.floor(totalSeconds % 60);


    d.innerHTML = days;
    h.innerHTML = formatTime(hours);
    m.innerHTML = formatTime(mins);
    s.innerHTML = formatTime(seconds);

    // console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
    
    
}

countdown()
setInterval(countdown, 1000)
