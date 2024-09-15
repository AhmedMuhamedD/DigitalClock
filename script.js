const time = document.querySelector(".time");
const format = document.querySelector(".format");
const interval = function(){setInterval(showTime, 1000)}
const timer = document.addEventListener('DOMContentLoaded', interval );

const showTime=()=>{
    let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let secs = date.getSeconds();
hr = hr<10 ? `0${hr}` : hr;
min = min<10 ? `0${min}` : min;
secs = secs<10 ? `0${secs}` : secs;
time.innerHTML = `${hr} : ${min} : ${secs} `;
format.innerHTML = hr>12 ? "PM" : "AM";
}

