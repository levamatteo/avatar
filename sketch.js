let eggSpin;
let mic;
let micLevel;
let angleMouth = 0;
let userClicked = false

function setup() {


  createCanvas(400, 400);
  angleMode(DEGREES)





}

function draw() {
  //console.log("mic level " + mic.getLevel());
if(userClicked) {
  micLevel = mic.getLevel();
  eggSpin = map(mic.getLevel(.95), 0, .4, -5, 100)

  background(200);

  drawPlate();1

  drawEggWhite(eggSpin);

  drawYoke(micLevel * 100);

  drawEyes();

  drawMouth(angleMouth);
}

}

function mousePressed() {
  mic = new p5.AudioIn()
  mic.start();
userClicked = true

    console.log("mouse beep in here");
    angleMouth += 2

}

function drawPlate() {

  //plate
  fill(230, 255, 252)
  circle(200, 200, 500)
  circle(200, 200, 400)


}


function drawEggWhite(angle) {

  rotate(angle);
  //the egg white
  beginShape();
  fill(255)
  curveVertex(width * .15, height * .40);
  curveVertex(width * .30, height * .25);
  curveVertex(width * .65, height * .15);
  curveVertex(width * .70, height * .30);
  curveVertex(width * .85, height * .50);
  curveVertex(width * .60, height * .80);
  curveVertex(width * .15, height * .70);
  curveVertex(width * .15, height * .43);
  endShape(CLOSE);
  beginShape();
  curveVertex(width * .14, height * .39);
  curveVertex(width * .29, height * .24);
  curveVertex(width * .15, height * .20);
  endShape(CLOSE);

}

function drawYoke() {

  //yoke
  fill(255, 226, 38)
  circle(200, 200, 100)

}

function drawEyes() {
  //eyes
  fill(50)
  circle(220, 190, 30)
  circle(180, 190, 30)
  fill(255)
  circle(175, 185, 10)
  circle(225, 185, 10)

}

function drawMouth(angle) {
  push()
  rotate(angle)
  //mouth
  fill(255, 163, 163)
  circle(200, 225, 30)
  pop()
}
