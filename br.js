img = "";
status = "";

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
object_Detector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Detecting Objects";
document.getElementById("objects").innerHTML = "There are 5 Big Objects in the image and CocoSsd model has identified 2 objects"
}

function preload(){
    img = loadImage("br.webp");

}
function home(){
    window.location = "index.html";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 75, 75);
    noFill();
    stroke("#FF0000");
    rect(60, 60, 390, 350)

    
    fill("#FF0000");
    text("Window", 365, 15);
    noFill();
    stroke("#FF0000");
    rect(350, 0, 200, 200)
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