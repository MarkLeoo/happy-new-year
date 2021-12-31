const container = document.querySelector('.container');
const boxHour = document.querySelector('.box-hour');
const boxMinute = document.querySelector('.box-minute');
const boxSecond = document.querySelector('.box-second');
let interval;
let endDate = new Date(2021, 12 - 1, 31, 24, 00);

let chars = ['H', 'A', 'P', 'P', 'Y', 'N', 'E', 'W', 'Y', 'E', 'A', 'R'];

let endTime = endDate.getTime();

let countdown = () => {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;
    let addZeroes = num => num >= 10 ? num : `0${num}`;
    if (endTime < todayTime) {
        clearInterval(interval);
        createConfetti();
    } else {
        let hourLeft = Math.floor((remainingTime % oneDay) / oneHour);
        let minLeft = Math.floor((remainingTime % oneHour) / oneMin);
        let secLeft = Math.floor((remainingTime % oneMin) / 1000);

        boxHour.textContent = addZeroes(hourLeft);
        boxMinute.textContent = addZeroes(minLeft);
        boxSecond.textContent = addZeroes(secLeft);
    }
}
countdown();
interval = setInterval(countdown, 1000);

function createConfetti() {
    boxHour.innerHTML = "";
    boxMinute.innerHTML = "";
    boxSecond.innerHTML = "";
    container.classList.add("flex-col");
    for (var i = 0; i < 5; i++) {
        const span = document.createElement("span");
        span.classList.add("char", `char${i}`);
        span.innerHTML = chars[i];
        boxHour.appendChild(span);
        boxHour.classList.remove("box-style");
    }
    for (var i = 5; i < 8; i++) {
        const span = document.createElement("span");
        span.classList.add("char", `char${i}`);
        span.innerHTML = chars[i];
        boxMinute.appendChild(span);
        boxMinute.classList.remove("box-style");
    }
    for (var i = 8; i < 12; i++) {
        const span = document.createElement("span");
        span.classList.add("char", `char${i}`);
        span.innerHTML = chars[i];
        boxSecond.appendChild(span);
        boxSecond.classList.remove("box-style");
    }
    setTimeout(function () {
        confetti.start()
    }, 1000);
}


