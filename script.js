// Below code works for changing the icon of pause and play
const timer = document.getElementById('display')

const playBtn = document.getElementById('play-pause-btn')
const resetBtn = document.getElementById('stop-btn')
let active = false;
let sec=0;
let min=0;
let hr=0;
let ms=0;
let timeout=setTimeout(StopWatch,1);
function StopWatch(){
    if(active){
        ms=parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
        hr =  parseInt(hr);
        ms+=1;
        if(ms==200){
            sec+=1;
            ms=0;
        }
        if(sec==60){
            min+=1;
            ms=0;
            sec=0;
        }
        if(min==60){
            min=0;
            ms=0;
            sec=0;
            hr+=1;
        }
    }
    sec = sec.toString().padStart(2,"0");
    min = min.toString().padStart(2,"0");
    hr = hr.toString().padStart(2,"0");
    ms = ms.toString().padStart(3,"0");
    timer.innerHTML = `${hr} : ${min} : ${sec} : ${ms}`
    timeout=setTimeout(StopWatch,1);
}
resetBtn.addEventListener("click",()=>{
    clearInterval(timeout);
    if(active){
        playBtn.classList.toggle('fa-play');
        playBtn.classList.toggle('fa-pause');
    }
    active=false;
    sec=0;
    hr=0;
    min=0;
    ms=0;
    StopWatch();
})
playBtn.addEventListener("click", (e) => {
    e.target.classList.toggle('fa-play');
    e.target.classList.toggle('fa-pause')
    active = active ? false : true;
    timeout;
})