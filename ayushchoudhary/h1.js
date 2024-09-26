setInterval(() => {
    date = new Date();
    
    hr = date.getHours();
    
    min = date.getMinutes();
    
    sec = date.getSeconds();
    
    hr_rot = 30 * hr + min / 2; 
    
    min_rot  = 6 * min;
    
    sec_rot = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rot}deg)`;
    
    minute.style.transform = `rotate(${min_rot}eg)`;
    
    second.style.transform = `rotate(${sec_rot}deg)`;
    });