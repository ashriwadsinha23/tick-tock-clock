
const secondsHand = document.querySelector('.sec'),
      minutesHand = document.querySelector('.minutes'),
      hoursHand = document.querySelector('.hours');

// const secondsHand = document.getElementById("second");
//      const minutesHand = document.getElementById("minute");
//      const hoursHand = document.getElementById("hour");
      
const now = new Date();



function moveHands() {
  const secs = now.getSeconds(),
        mins = now.getMinutes() * 60,
        hours = now.getHours() * 3600;
  
  
  secondsHand.style.animationDelay = '-' + secs + 's';
  minutesHand.style.animationDelay = '-' + mins + 's';
  hoursHand.style.animationDelay = '-' + hours + 's';
}
moveHands();


// source: http://jsbin.com/wotutamabi/edit?css,js,output