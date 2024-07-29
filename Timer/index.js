let seconds=0,minutes=0,hours=0;
let c=0;

function starttime(){
    if(c===0){
       c=1;
       document.getElementById("start").innerHTML="Pause";
        inter=setInterval(time,1000);
    }
    else{
        pause();
    }

}
function restart(){
    pause();
    hours=0;
    minutes=0;seconds=0;
    let t1=formatTimeUnit(hours)+":"+formatTimeUnit(minutes)+":"+formatTimeUnit(seconds);
    document.getElementById("timer").innerHTML=t1 ;

}
function pause(){
    clearInterval(inter);
    document.getElementById("start").innerHTML="start";
    c=0;
}
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
  }

function displayTime(){

const display=document.getElementById("timer");
let t=formatTimeUnit(hours)+":"+formatTimeUnit(minutes)+":"+formatTimeUnit(seconds)
display.innerHTML=t ;
}
function time(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
        if(minutes===60){
            minutes=0;
            hours++;
            if(hours===24){
                hours=0;
            }
        }
    }
    displayTime();
}