//Canvas for bars
const canvas = document.getElementById('graph1');

// canvasWidth = 600;
// canvasHeight = 100;

const canvasContext = canvas.getContext('2d');

//audio and audio controls
var audioEl = document.getElementById("audio")
console.log(audioEl.controls)
var audio_control = document.getElementById('audioControl')
var count = Math.floor(audioEl.currentTime);

//Initial Color to the bars
canvasContext.fillStyle = "lightgrey";
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

//audio update
audioEl.addEventListener('timeupdate', function() {
    var duration = audioEl.duration
    var currentTime = audioEl.currentTime
      console.log(duration,currentTime)
      let progress_time = (currentTime / duration) * 100;
      canvasContext.width = `${progress_time}%`
      draw()
});
  

var fill = 0

canvasContext.fillStyle = "orange";

function draw(){
  
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

  var bars = document.getElementById("bars-div")

  bars.addEventListener("click",(event)=>{

     // console.log(arr[fill])
     let duration = audioEl.duration;

    let moveProgress = (event.offsetX / event.srcElement.clientWidth) * duration
    console.log(moveProgress)
    console.log(duration)
    audioEl.currentTime = moveProgress;
    draw(moveProgress)
  })

  // Updating the Bar based on current time
  // function updateBar() {

  //   // var currentTime = audioEl.currentTime
  //   // var duration = audioEl.duration

  //   //let current = Math.floor(duration - currentTime)
  //     draw()
    
    
  //   // if (currentTime === duration) {
  //   //   audio_control.innerHTML = "Play"
  //   // }
  //   // document.getElementById("current-time").innerHTML = convertElapsedTime(currentTime)

  //   console.log(canvasContext)
  // }

  //Converting Time to Display
  // function convertElapsedTime(inputSeconds) {
  //   var seconds = Math.floor(inputSeconds % 60)
  //   if (seconds < 10) {
  //     seconds = "0" + seconds
  //   }
  //   var minutes = Math.floor(inputSeconds / 60)
  //   return minutes + ":" + seconds
  // }