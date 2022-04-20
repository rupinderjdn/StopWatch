const timer = document.getElementById('display')

const playBtn = document.getElementById('play-pause-btn')
const resetBtn = document.getElementById('stop-btn')
let active = false;

let startTime;
let elapsedTime = 0;
let stopWatchInterval
function timeToString(time){
    let diffInHrs = time/(3600000)
    let hh = Math.floor(diffInHrs)

    let diffInMin = (diffInHrs - hh)*60
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm)*60
    let ss = Math.floor(diffInSec); 

    let diffInMs = (diffInSec-ss)*1000
    let ms = Math.floor(diffInMs)

    
    let formattedHH = hh.toString().padStart(2,"0")
    let formattedMM = mm.toString().padStart(2,"0")
    let formattedSS = ss.toString().padStart(2,"0")
    let formattedMS = ms.toString().padStart(3,"0")

    timer.innerHTML = `${formattedHH} : ${formattedMM} : ${formattedSS} : ${formattedMS}`

}
function StopWatch(){
    if(active){
        console.log(Date.now());
        startTime = Date.now() - elapsedTime

        stopWatchInterval = setInterval(function printTime(){
            elapsedTime = Date.now()- startTime;
            timeToString(elapsedTime)
        },1)
    }
    else{
        clearInterval(stopWatchInterval);
    }
    
}
playBtn.addEventListener("click", (e) => {
    e.target.classList.toggle('fa-play');
    e.target.classList.toggle('fa-pause')
    active = active ? false : true;
    StopWatch();
})
resetBtn.addEventListener("click",()=>{
    clearInterval(stopWatchInterval);
    if(active){
        playBtn.classList.toggle('fa-play');
        playBtn.classList.toggle('fa-pause');
    }
    active=false;
    timer.innerHTML = "00 : 00 : 00 : 000"
})