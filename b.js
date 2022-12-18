img = "";
status = "";

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
object_Detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Detecting Objects";
document.getElementById("objects").innerHTML = "There are 6 Big Objects in the image and CocoSsd model has identified 3 objects";
}

function preload(){
    img = loadImage("bottles.jpg");

}
function home(){
    window.location = "index.html";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Orange Bottle", 75, 75);
    noFill();
    stroke("#FF0000");
    rect(55, 60, 100, 350)

    
    fill("#FF0000");
    text("Green Bottle", 500, 65);
    noFill();
    stroke("#FF0000");
    rect(475, 50, 115, 365)

    fill("#FF0000");
    text("Orange Bottle", 235, 95);
    noFill();
    stroke("#FF0000");
    rect(225, 70, 100, 325)
    
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