class circles {
 constructor(_xPos, _yPos, _rotation, _size){
   this.xPos = _xPos;
   this.yPos = _yPos;
   this.rotation = _rotation; 
   this.size = _size;
   
 } 
  
 display() {
  if (mouseX <= width * .2 && mouseY <= height * .2)
  {
  fill(150, 0, 255);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  }
  if (mouseX <= width * .4 && mouseY <= height * .4)
  {
  fill(150, 75, 255);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  }
  else (mouseX > width * .4 && mouseY > height * .4)
  {
  fill(175, 50, 110);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  }  
  if (mouseX <= width * .6 && mouseY <= height * .6)
  {
  fill(150, 75, 200);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  }
  if (mouseX >= width * .6 && mouseY >= height * .6)
  {
  fill(150, 0, 0);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  } 
  if (mouseX <= width * .8 && mouseY <= height * .2)
  {
  fill(0, 0, 255);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  }
  if (mouseX >= width * .8 && mouseY >= height * .8)
  {
  fill(250, 100, 0);
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  circle(width * .2, height * .3, 100);
  pop();  
  } 
  }
 
  
  move(){
    
    if (this.yPos <= height){
     
   //this yPos = this.yPos + 2;
  //shorthand +2
  this.yPos += 2;}
  else {
  this.yPos = -height * 1.3;  
  }
  }  
    
  move2(){
    
    if (this.xPos <= height){
     
   //this yPos = this.yPos + 2;
  //shorthand +2
  this.xPos += 2;}
  else {
  this.xPos = -height * 1.3;  
  }
}
}

    
   
    
    
  
  
  




//function circles(xPos, yPos, rotation){
  
//  fill(250, 0, 0)
// push();
//  translate(xPos, yPos);
//  rotate(rotation);
//  circle(width * .2, height * .3, 100);
//  pop();
//}