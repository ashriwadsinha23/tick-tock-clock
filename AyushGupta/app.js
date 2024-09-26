




setInterval(function () {
let d= new Date();
let hour=d.getHours();
let minute=d.getMinutes();
let second=d.getSeconds();
let hour_r=(hour+minute/60+second/3600)*(360/12);
let minute_r=(360/60)*(minute+second/60);
let second_r=(360/60)*second;

const hr=document.getElementById('hourdiv');
const min=document.getElementById('minutediv');
const sec=document.getElementById('seconddiv');
hr.style.transform=`rotate(${hour_r}deg)`;
min.style.transform=`rotate(${minute_r}deg)`;
sec.style.transform=`rotate(${second_r}deg)`;


}, 1000);