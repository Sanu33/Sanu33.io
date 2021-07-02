//for time
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); //gets the date of the system
    date = a.toLocaleDateString(undefined, options);//returns date in a string format like days, month all in words
    time = a.getHours() + ':0' + a.getMinutes() + ':' + a.getSeconds();//provides hours,minutes and seconds
    document.getElementById('time').innerHTML = time + "<br>on " + date;//puts the value in place where id= time
}, 1000);