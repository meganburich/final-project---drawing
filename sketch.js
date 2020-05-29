var keyCode
var settings 
var backgroundColor
var colorPicker
var colorSelector
var changeBackgroundColor
var val
var strokeLabel
var strokeSlider
var strokeValue
var canvas 
var saveIt
var camera123
var cameraButton 
var pictureTime
var labelSettings 
var labelSettingsP

function preLoad() {

  img = loadImage('settings2.ico')
}

function setup() {
  
  //camera 
  camera123 = createCapture(VIDEO); 
  camera123.position(400, 0);
  camera123.size(200, 300);

  
  //camera button 
  cameraButton = createButton("Take Picture"); 
  cameraButton.mousePressed(takePicture); 
  cameraButton.position(400, 75); 
  

  //color selector 
  colorSelector = createP("Select Color");
  colorSelector.position(0, 157); 
  colorSelector.style("margin", "2px");
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(0 , 180);

  
  //stroke change
  strokeLabel= createP('Change Stroke')
  strokeLabel.position(100, 144); 
  strokeSlider = createSlider(1,100,200);
  strokeSlider.position(100, 180); 
  

  //canvas
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0, 210); 

}


function takePicture(){ 
  pictureTime = image(camera123, 0, 0, 1000, 800); 
  
} 

function draw() {
  
  //values of the pen
  strokeValue = strokeSlider.value(); 
  stroke(colorPicker.color());

  //pen
  if (mouseIsPressed && mouseY > 50) {
    stroke(colorPicker.color());
    strokeWeight(strokeValue); 
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}



function keyPressed() {
  if (keyCode === BACKSPACE) {
clear();
  } 
}
