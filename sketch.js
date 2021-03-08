let a = 5;
let circles1;
let circles2;
let circles3;
let circles4;
let circles5;
let circles6;
let circles7;
let circles8;
let circles9;
let circles10;
let circles11;
let circles12;
let circles13;
let circles14;
let circles15;
let circles16;

function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES)
  frameRate(20);
  
  circles1 = new circles(width * .2, height * .3, 10, 0.5);
  circles2 = new circles(width * .4, height * .6, 10, 1.5);
  circles3 = new circles(width * .6, height * .9, 10, 0.8);
  circles4 = new circles(width * .8, height * .12, 10, 1.0);
  circles5 = new circles(width * .1, height * .1, 10, 0.5);
  circles6 = new circles(width * .2, height * .4, 10, 1.0);
  circles7 = new circles(width * .8, height * .16, 10, 1.2);
  circles8 = new circles(width * .32, height * .64, 10, 1.5);
  circles9 = new circles(width * .4, height * .3, 10, 0.75);
  circles10 = new circles(width * .2, height * .6, 10, 1.7);
  circles11 = new circles(width * .6, height * .6, 10, 0.55);
  circles12 = new circles(width * .8, height * .8, 10, 1.25);
  circles13 = new circles(width * .3, height * .3, 10, 0.65);
  circles14 = new circles(width * .6, height * .4, 10, 1.0);
  circles15 = new circles(width * .3, height * .5, 10, 1.2);
  circles16 = new circles(width * .45, height * .75, 10, 1.5);
  
}

function draw() {
  background(220);
  strokeWeight(4);
  angleMode(DEGREES)
  
    circles1.display();
  circles2.display();
  circles3.display();
  circles4.display();
  circles5.display();
  circles6.display();
  circles7.display();
  circles8.display();
  circles9.display();
  circles10.display();
  circles11.display();
  circles12.display();
  circles13.display();
  circles14.display();
  circles15.display();
  circles16.display();
    
    
  circles1.move();
  circles2.move();
  circles3.move();
  circles4.move();
  circles5.move2();
  circles6.move2();
  circles7.move2();
  circles8.move2();
  circles9.move();
  circles10.move();
  circles11.move();
  circles12.move();
  circles13.move2();
  circles14.move2();
  circles15.move2();
  circles16.move2();
  
  //if-else
  if (a > 0) {
    console.log('positive');
    
    //for loop
    for (let i = 0; i < 1; i++) {
      console.log(i);
      let r = random(10, 360);
      let r2 = random(10, 360);
      let r3 = random(0, 100);
      let r4 = random(0, 100);
      stroke(r, r2, 150, 255)
      line(r,r2,20,20);
      outerLeg(width * .43, height * .87,r3, r4);
  outerArm(width * .35, height * .72,r3, r4);
  innerLeg(width * .60, height * .87,r3, r4);
  innerArm(width * .67, height * .72,r3, r4);
    }
  } else {
    ellipse(10,10,10,10);
    console.log('negative');
  }
  
 
  body();
  
  head();
  leftEye();
  rightEye();
  leftPupil();
  rightPupil();
  mouth();
  leftEyeBrow();
  rightEyeBrow();
}

function innerLeg(xPos, yPos, rotation) {
  //inner leg
  c = color(0, 0, 0);
  fill(c);
  push();
  //width * .60, height * .87
  translate(xPos, yPos);
  rotate(rotation);
  ellipse(0, 0, width * .10, height * .20);
  pop();
}

function innerArm(xPos, yPos, rotation){
  //inner arm
  c = color(0, 0, 300);
  fill(c);
  push();
  //width * .67, height * .72
  translate(xPos, yPos);
  rotate(rotation);
  ellipse(0, 0, width * .10, height * .20);
  pop();
  
}

function body(){
  //body
  c = color(0, 0, 300);
  fill(c);
  ellipse(width * .50, height * .70, width * .30, height * .40);
}

function outerArm(xPos, yPos, rotation){
  //outer arm
  c = color(0, 0, 300);
  fill(c);
  push();
  //width * .35, height * .72
  translate(xPos, yPos);
  rotate(rotation);
  ellipse(0, 0, width * .10, height * .20);
  pop();
}

function outerLeg(xPos, yPos, rotation){
  //outer leg
  c = color(0, 0, 0);
  fill(c);
  push();
  //width * .43, height * .87
  translate(xPos, yPos);
  rotate(rotation);
  ellipse(0, 0, width * .10, height * .20);
  pop();
  
  
}

function head(){
  //head
  stroke(5);
  c = color(175, 135, 100);
  fill(c);
  beginShape();
  curveVertex(width * .23, height * .42)
  curveVertex(width * .20, height * .30)
  curveVertex(width * .29, height * .10);
  curveVertex(width * .45, height * .05);
  curveVertex(width * .68, height * .13);
  curveVertex(width * .72, height * .31);
  curveVertex(width * .80, height * .40);
  curveVertex(width * .80, height * .50);
  curveVertex(width * .72, height * .53);
  curveVertex(width * .55, height * .55);
  curveVertex(width * .30, height * .50);
  endShape(CLOSE);
}

function leftEye(){
  c = color(225, 225, 225);
  fill(c);
  beginShape();
  curveVertex(width * .35, height * .32)
  curveVertex(width * .45, height * .32)
  curveVertex(width * .45, height * .23)
  curveVertex(width * .40, height * .20)
  curveVertex(width * .35, height * .23)
  endShape(CLOSE);
}

function rightEye(){
  c = color(225, 225, 225);
  fill(c);
  beginShape();
  curveVertex(width * .55, height * .32)
  curveVertex(width * .65, height * .32)
  curveVertex(width * .65, height * .23)
  curveVertex(width * .60, height * .20)
  curveVertex(width * .55, height * .23)
  endShape(CLOSE);
}

function rightPupil(){
  c = color(0, 0, 0);
  fill(c);
  beginShape();
  curveVertex(width * .60, height * .30)
  curveVertex(width * .66, height * .30)
  curveVertex(width * .65, height * .24)
  curveVertex(width * .63, height * .22)
  curveVertex(width * .60, height * .24)
  endShape(CLOSE);
  
  c = color(225, 225, 225);
  fill(c);
  strokeWeight(0);
  circle(width * .61, height * .25, 10)
}

function leftPupil(){
  c = color(0, 0, 0);
  fill(c);
  beginShape();
  curveVertex(width * .40, height * .30)
  curveVertex(width * .45, height * .30)
  curveVertex(width * .45, height * .25)
  curveVertex(width * .43, height * .23)
  curveVertex(width * .40, height * .25)
  endShape(CLOSE);
  
  c = color(225, 225, 225);
  fill(c);
  strokeWeight(0);
  circle(width * .41, height * .25, 10)
}

function leftEyeBrow(){
  noFill();
  beginShape();
  strokeWeight(4);
  curveVertex(width * .23, height * .50)
  curveVertex(width * .33, height * .15)
  curveVertex(width * .43, height * .15)
  curveVertex(width * .53, height * .50)
  endShape();
}

function rightEyeBrow(){
  noFill();
  beginShape();
  strokeWeight(4);
  curveVertex(width * .45, height * .05)
  curveVertex(width * .55, height * .18)
  curveVertex(width * .65, height * .20)
  curveVertex(width * .75, height * .40)
  endShape();
}

function mouth(){
  noFill();
  beginShape();
  strokeWeight(4);
  curveVertex(width * .68, height * .48)
  curveVertex(width * .67, height * .49)
  curveVertex(width * .55, height * .48)
  curveVertex(width * .47, height * .46)
  curveVertex(width * .41, height * .41)
  curveVertex(width * .40, height * .25)
  endShape();
}

