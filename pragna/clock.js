setInterval(() => {
	date = new Date(); 
	hr = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
	hr_hand= 30 * hr + min / 2;
	min_hand= 6 * min;
	sec_hand = 6 * sec;

	hour.style.transform = `rotate(${hr_hand}deg)`;
	minute.style.transform = `rotate(${min_hand}deg)`;
	second.style.transform = `rotate(${sec_hand}deg)`;
}, 1000);
