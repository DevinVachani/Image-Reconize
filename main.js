objects = [];
status = "";

function preload(){
  video = createVideo('video.mp4');
}


function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
  video.hide();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(video, 0, 0, 480, 380);
      if(status != "")
      {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Objects Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
 
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}
camera = document.getElementById("camera");
Webcam.attach( camera ); 
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
  /*write a for loop that runs 4 times and inside that for loop use snap() function of webcam.js to display images.*/  
  
  
  
}