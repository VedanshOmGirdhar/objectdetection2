img = "";
status = "";

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
object_Detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("objects").innerHTML = "There are 3 Big Objects in the image and CocoSsd model has identified 2 objects";
document.getElementById("status").innerHTML = "Detecting Objects";
}

function preload(){
    img = loadImage("ta.jpg");

}
function home(){
    window.location = "index.html";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 105, 125);
    noFill();
    stroke("#FF0000");
    rect(100, 110, 375, 325)

    
    fill("#FF0000");
    text("AC", 210, 35);
    noFill();
    stroke("#FF0000");
    rect(200, 20, 250, 200)
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      objects = results;
    }
  }
