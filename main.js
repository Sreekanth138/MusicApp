//Canvas for bars
const canvas = document.getElementById('graph1');

canvasWidth = 600;
canvasHeight = 100;


const canvasContext = canvas.getContext('2d');

//audio and audio controls
var audioEl = document.getElementById("audio")
console.log(audioEl.controls)
// var audio_control = document.getElementById('audioControl')

//Initial Color to the bars
canvasContext.fillStyle = "lightgrey";

//Creating Bars
var arr = [];

for(let i = 0; i <1000; i += 10){
  var value = Math.round(Math.random(1) *100)
    canvasContext.fillRect(i, 0, 3,value);
  arr.push(value)
}

let count = 0;
let percent = 0;
let fill = 0

canvasContext.fillStyle = "orange";

function draw(){

  canvasContext.fillRect(count,0,3,arr[fill]);

    fill += 1
    console.log(arr[fill],"fill value")

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
  
  // function togglePlaying() {

  //   var play = audio_control.innerHTML === 'Play'
  //   var method;
  
  //   if (play) {
  //     audio_control.innerHTML = 'Pause'
  //     method = 'play'
  //   } else {
  //     audio_control.innerHTML = 'Play'
  //     method = 'pause'
  //   }
  //   audioEl[method]()
  // }
  
  // canvas.addEventListener('click', function() {
  //   var currentTime =Math.floor(audioEl.duration - audioEl.currentTime) 

  //   updateBar(currentTime)

  //     console.log(currentTime)

  //       //console.log(canvasContext.moveTo(0,currentTime))

  // })

  // Updating the Bar based on current time
  function updateBar() {

    // var currentTime = audioEl.currentTime
    // var duration = audioEl.duration

    //let current = Math.floor(duration - currentTime)
    draw()
    // if (currentTime === duration) {
    //   audio_control.innerHTML = "Play"
    // }
    // document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)

    console.log(canvasContext)
  }

  //Converting Time to Display
  // function convertElapsedTime(inputSeconds) {
  //   var seconds = Math.floor(inputSeconds % 60)
  //   if (seconds < 10) {
  //     seconds = "0" + seconds
  //   }
  //   var minutes = Math.floor(inputSeconds / 60)
  //   return minutes + ":" + seconds
  // }