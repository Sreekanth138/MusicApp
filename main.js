const canvas = document.getElementById('graph1');

canvasWidth = 600;
canvasHeight = 100;

console.log(canvasWidth,canvasHeight)

const canvasContext = canvas.getContext('2d');

var audioEl = document.getElementById("audio")
var ctrl = document.getElementById('audioControl')


canvasContext.fillStyle = "lightgrey";

for(let i = 0; i <1000;i += 10){
    canvasContext.fillRect(i, 0, 5,100);
}



let count = 0;
let percent = 0;

canvasContext.fillStyle = "orange";

function draw(){
    canvasContext.fillRect(count,0,5,100);

    count += 10;
    if(count > 100/1){
        return;
    }  
    //window.requestAnimationFrame(draw);
}



audioEl.addEventListener('loadedmetadata', function() {
    var duration = audioEl.duration

    var currentTime = audioEl.currentTime
      console.log(duration,currentTime)
    document.getElementById("duration").innerHTML = convertElapsedTime(duration)
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
    console.log(canvasWidth)
  });
  
  function togglePlaying() {

    var play = ctrl.innerHTML === 'Play'
    var method;
  
    if (play) {
      ctrl.innerHTML = 'Pause'
      method = 'play'
    } else {
      ctrl.innerHTML = 'Play'
      method = 'pause'
    }
    audioEl[method]()
  }
  
  // canvas.addEventListener('click', function() {
  //   var currentTime =Math.floor(audioEl.duration - audioEl.currentTime) 

  //   updateBar(currentTime)

  //     console.log(currentTime)

  //       //console.log(canvasContext.moveTo(0,currentTime))

  // })

  // Updating the Bar based on current time
  function updateBar() {

    var currentTime = audioEl.currentTime
    var duration = audioEl.duration

    //let current = Math.floor(duration - currentTime)

    draw();

    if (currentTime === duration) {
      ctrl.innerHTML = "Play"
    }
    document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)

    console.log(canvasContext)
  }


 