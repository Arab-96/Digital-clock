const hourBox = document.getElementById("hours")
const minuteBox = document.getElementById("minute")
const secondsBox = document.getElementById("seconds")
const amPmBox = document.getElementById("ampm")
const dayBox = document.getElementById("day")
const monthBox = document.getElementById("month")
const yearBox = document.getElementById("year")


function displayClock(){
    new Date ()
    let currentTimeDate = new Date()

    let day = currentTimeDate.getDate();
    let month = currentTimeDate.getMonth() +1;
    let year = currentTimeDate.getFullYear()
    let hours = currentTimeDate.getHours()
    let minutes = currentTimeDate.getMinutes()
    let seconds = currentTimeDate.getSeconds()
    let timePrefix="am"

   
    if(hours > 12){
        hours= hours - 12;
        timePrefix="pm"
        
    }
    hours=hours<10? '0' + hours:hours;
    minutes=minutes<10?'0'+ minutes:minutes;
    seconds=seconds<10?'0'+ seconds:seconds;

   
    dayBox.innerHTML= day
    monthBox.innerHTML= month
    yearBox.innerHTML= year
    hourBox.innerHTML=hours
    minuteBox.innerHTML=minutes
    secondsBox.innerHTML=seconds
    amPmBox.innerHTML=timePrefix

    setTimeout(() => {
        displayClock();
      }, 1000);

    

    
}

displayClock()