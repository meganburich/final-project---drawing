var r
var g
var b
var keyCode
var transparency
var img
var back
var txtclr
var extraCanvas 
var settings 
var redValue 
var greenValue 
var blueValue
var labelR
var labelB
var labelG


function preLoad() {

  img = loadImage('settings2.ico')
}

function setup() {
  red = 0
  green = 0
  blue = 0
  transparency = 255
  img = loadImage('settings2.ico')
  back = 255
  txtclr = 0
  extraCanvas = createGraphics(400, 400); 
  
  settings = createP("Settings")
  
  //color sliders 

  r = createSlider(1, 255);
  g = createSlider(1, 255);
  b = createSlider(1, 255);
  r.style("width", "200px");
  r.position(550, 65); 
  g.style("width", "200px"); 
  g.position(550, 110) 
  b.style("width", "200px"); 
  b.position(550, 155); 
  
  //assigning variables to values of sliders
  redValue = r.value(); 
  greenValue = g.value(); 
  blueValue = b.value(); 
  
  //color labels and headings 
  newColor = createP("Change color");
  newColor.position(500, 5);
  // newColor.style(
  labelR= createP("Red");
  labelR.position(550, 30); 
  labelG = createP("Green")
  labelG.position(550, 75) 
  labelB = createP("Blue");
  labelB.position(550, 120); 
  
  
  

  
  

createCanvas(800, 600);
  background(back);

  // label for stroke 
  noStroke();
  fill(txtclr);
  text('stroke size', 150, 24);

  // slider = createSlider(1, 50, 50);
  // slider.position(140, height/5.5);
  // slider.style('width', '80px');
  

}

function draw() {
  // print(mouseX, mouseY);

  image(img, 250, 10, 40, 40);
  image(extraCanvas, 0,0); 




  
// color values being inputed into the paintbrush 
  redValue = r.value(); 
  greenValue = g.value(); 
  blueValue = b.value(); 


  if (mouseIsPressed && mouseY > 50) {
    stroke(redValue, greenValue, blueValue, transparency);
    line(mouseX, mouseY, pmouseX, pmouseY)

  }
}

function mousePressed() {

  // val = slider.value();
  // strokeWeight(val);
  extraCanvas = createGraphics(displayWidth, displayHeight); 
  extraCanvas.clear(); 

  //  if (mouseX > 30 && mouseX < 50 && mouseY > 30 && mouseY < 50) {
  //   green = 0;
  //   blue = 0;
  //   red = 255;
  // } else if (mouseX > 60 && mouseX < 80 && mouseY > 30 && mouseY < 50) {
  //   blue = 0;
  //   red = 0;
  //   green = 255;
  // } else if (mouseX > 90 && mouseX < 110 && mouseY > 30 && mouseY < 50) {
  //   red = 0;
  //   green = 0;
  //   blue = 255;
  // } 
   if (mouseX > 250 && mouseX < 290 && mouseY > 10 && mouseY < 50) {
    // image(extraCanvas, 0,0); 
    extraCanvas.loop(); 
    extraCanvas.fill(255, 5, 195);
    extraCanvas.rect(100, 100, 200, 200);
    extraCanvas.fill(255);
    extraCanvas.textSize(30);
    extraCanvas.text('Settings', 111, 130);
    extraCanvas.textSize(12);
    extraCanvas.text('To change transparency of your', 111, 154);
    extraCanvas.text('pen, use the up and down arrows.', 111, 170);
    extraCanvas.text('Use Delete key to erase drawing', 111, 200);
    extraCanvas.text('Press Ctrl, then Delete to change', 111, 230);
    extraCanvas.text('background to black', 111, 246);
    extraCanvas.text('WARNING - drawing will be lost', 111, 262);
    extraCanvas.text('Pick a color and press Delete to', 111, 282);
    extraCanvas.text('start drawing!', 111, 292); 
    extraCanvas.rect(280, 110, 10,10) 
    extraCanvas.line(280, 110, 290, 120); 
    extraCanvas.line(290, 110, 280, 120); 
  } else if (mouseX>280 && mouseY >110 && mouseX<290 && mouseY<120){
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(back);
    image(img, 250, 10, 40, 40);
    noStroke();
    fill(txtclr);
    textSize(12);
    text('color', 30, 20);
    noStroke();
    text('stroke size', 150, 24);
  } else if (keyCode === UP_ARROW) {
    transparency = 50
  } else if (keyCode === DOWN_ARROW) {
    transparency = 255
  }
  //change background to black
  else if (keyCode === CONTROL) {
    background(0);
    back = 0
    txtclr = 255
  } else if (keyCode === ENTER) {
    back = 255
    txtclr = 0
  } 
}
