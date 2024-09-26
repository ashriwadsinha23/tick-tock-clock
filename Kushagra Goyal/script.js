function rotateClockHands() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');
  
    const secondRotation = (seconds / 60) * 360;
    const minuteRotation = ((minutes * 60 + seconds) / 3600) * 360;
    const hourRotation = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30);
  
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
  }
  
  setInterval(rotateClockHands, 1000);
  