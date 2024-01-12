var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var sMinutes = document.getElementById('minutes');
var sSeconds = document.getElementById('seconds');
var sMilliSeconds = document.getElementById('milli');

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

function timer(){
    milliseconds++;
    sMilliSeconds.innerHTML = milliseconds;
 if(milliseconds >= 9){
    seconds++;
    sSeconds.innerHTML = seconds;
    milliseconds = 0;    
}
if(seconds >= 59){
    minutes++;
    sMinutes.innerHTML = minutes;
    seconds = 0;
}

}

function start(){
      interval = setInterval(timer, 100);
      startButton.style.display = "none";
      stopButton.style.display = "inline-block";
      resetButton.style.display = "inline-block"
    }

function stop(){
    clearInterval(interval);
    stopButton.style.display = "none";
    startButton.style.display = "inline-block"
    resetButton.style.display = "inline-block"
}

function reset(){
    stop();
    minutes = "00";
    seconds = "00";
    milliseconds = "00";
    sMinutes.innerHTML = minutes;
    sSeconds.innerHTML = seconds;
    sMilliSeconds.innerHTML = milliseconds;
    stopButton.style.display = "inline-block";
    startButton.style.display = "inline-block" 
    resetButton.style.display = "inline-block";  
}