const secsHand =  document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    // seconds hand
    const secs = now.getSeconds();
    const secDeg = (secs / 60) * 90;
    secsHand.style.transform = `rotate(${secDeg}deg)`;
    // minutes hand
    const mins = now.getMinutes();
    const minsDeg = ((mins / 60 ) * 360) + 90;
    minsHand.style.transform =  `rotate(${minsDeg}deg)`;
    // hours hand
    const hour = now.getMinutes();
    const hourDeg = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);