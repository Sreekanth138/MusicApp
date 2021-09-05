//Canvas for bars
const canvas = document.getElementById('graph1');

// canvasWidth = 600;
// canvasHeight = 100;

const canvasContext = canvas.getContext('2d');

//audio and audio controls
var audioEl = document.getElementById("audio")
console.log(audioEl.controls)
var audio_control = document.getElementById('audioControl')

//Initial Color to the bars
canvasContext.fillStyle = "green";
window.onclick = function (){
  console.log("hello")
  canvasContext.fillStyle = "orange";

}
//Creating Bars
var arr = [];
for(let i = 0; i <1000; i += 3){
  var value = Math.round(Math.random(1) *100)
  canvasContext.fillRect(i, 0, 2,value);
  arr.push(value)
}

// audioEl.addEventListener('loadedmetadata', function() {
//     var duration = audioEl.duration

//     var currentTime = audioEl.currentTime
//       console.log(duration,currentTime)
//     // document.getElementById("duration").innerHTML = convertElapsedTime(duration)
//     // document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)
//     console.log(canvasWidth)
//   });
  
var count = 0;

console.log(count)

let percent = 0;
var fill = 0

canvasContext.fillStyle = "orange";

function draw(){
  console.log(arr)

  canvasContext.fillRect(count,0,2,arr[fill]);

  console.log(count,arr[fill],"fill value")
 
    fill += 1

    //console.log(val,"val")

    count += 3;
    if(count > 100/1){
        return;
    }  
    console.log(count)
    //window.requestAnimationFrame(draw);
}


  canvas.addEventListener("click",function(){

     // console.log(arr[fill])
    
      canvasContext.fillRect(i,0,2,value)
      canvasContext.fillStyle = "orange"
    console.log(count)
  })

  // function togglePlaying() {

  //    var play = audio_control.innerHTML === 'Play'
  //   var method;
  
  //   if (play) {
  //      audio_control.innerHTML = 'pause'
  //     method = 'play'
  //   } else {
  //      audio_control.innerHTML = 'play'
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