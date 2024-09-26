let hr = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('second');

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh+mm/2;
    let mRotataion = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    m.style.transform = `rotate(${mRotataion}deg)`;
    s.style.transform = `rotate(${sRotation}deg)`;
    
}
setInterval(displayTime, 1000);