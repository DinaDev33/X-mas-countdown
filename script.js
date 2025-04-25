function christmasCountdown() {
    const christmasDate = new Date("December 25, 2025 00:00");
    const now = new Date();
    const diff = christmasDate - now;

   const msInSecond = 1000; 
   const msInMinute = 60 * 1000;
   const msInHour = 60 * 60 * 1000; 
   const msInDay = 24 * 60 * 60 * 1000; 

   const displayDay =  Math.floor(diff/msInDay);
   document.querySelector(".days").textContent = displayDay;
   
   const displayHour = Math.floor((diff%msInDay) / msInHour);
   document.querySelector(".hours").textContent = displayHour;
   
   const displayMinute = Math.floor((diff%msInHour) / msInMinute);
   document.querySelector(".minutes").textContent = displayMinute;

   const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
   document.querySelector(".seconds").textContent = displaySecond;

   if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merryChristmas();
   }
}
let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    heading.classList.add("red");
}
const button = document.querySelector('#myButton');
const audio = document.querySelector('#myAudio');
button.addEventListener ('click', function() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.getElementById('snowflakes');
    const numberOfSnowflakes = 200;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 200}vw`;
        snowflake.style.width = `${Math.random() * 10 + 3}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflakesContainer.appendChild(snowflake);
    }
});
