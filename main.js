const canvas = document.getElementById('graph1');

canvasWidth = 600;
canvasHeight = 100;

console.log(canvasWidth,canvasHeight)

const canvasContext = canvas.getContext('2d');

canvasContext.fillStyle = "lightgrey";

for(let i = 0; i <1000;i+= 10){
    canvasContext.fillRect(i, 0, 5,100);
}

let count = 0;
let percent = 0;

canvasContext.fillStyle = "orange";

function draw(){
    canvasContext.fillRect(count,0,5,100);
    //console.log(canvasContext)
    count += 10;
    if(count > 100/1){
        return;
    }
    //window.requestAnimationFrame(draw);
}

var audioEl = document.getElementById("audio")
var ctrl = document.getElementById('audioControl')


audioEl.addEventListener('loadedmetadata', function() {
    var duration = audioEl.duration

    var currentTime = audioEl.currentTime

    document.getElementById("duration").innerHTML = convertElapsedTime(duration)
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
    console.log(canvasWidth)
  });
  
  