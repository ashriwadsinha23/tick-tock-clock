
const secondHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

setInterval(function setDate(){

    const currTime= new Date();
    
    const seconds = currTime.getSeconds();
    const second = ((seconds / 60) * 360)+180 ;
    secondHand.style.transform = `rotate(${second}deg)`;

    const mins = currTime.getMinutes();
    const minutes = ((mins / 60) * 360) + ((seconds/60)*6)+180 ;
    minsHand.style.transform = `rotate(${minutes}deg)`;

    const hour = currTime.getHours();
    const hours = ((hour / 12) * 360) + ((mins/60)*30)+180;
    hourHand.style.transform = `rotate(${hours}deg)`;

}, 1000);

setDate();

