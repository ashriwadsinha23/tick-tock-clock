function rotateClockHands() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourRotation = (hour * 30) + (minute / 2); // Each hour mark is 30 degrees, and additional rotation for minutes
  const minuteRotation = (minute * 6) + (second / 10); // Each minute mark is 6 degrees, and additional rotation for seconds
  const secondRotation = second * 6; // Each second mark is 6 degrees

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
  
}

setInterval(rotateClockHands, 1000);
