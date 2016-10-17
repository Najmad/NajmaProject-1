var time1 = 500;
var time2 = 1000;
var time3 = 1500;
var time4 = 2000;
var time5 = 2500;
var time6 = 3000;
var time7 = 3500;
var time8 = 4000;
var time9 = 4500;
var times1 = 5000;
var times2 = 5500;
var times3 = 6000;
var times4 = 6500;
var times5 = 7000;
var times6 = 15000;
var times7 = 20000;
var times8 = 23000;
var angle = 100;
var variable = .01;
var speed = 0.04;
var speed1 = .01;
var a = 595;
var b = 600;
var c = 500;
var sp = 50;


function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);
  background(0);
}

function draw() {
  
  
  //left scatter 1
  stroke(254, 215, 243);
  strokeWeight(1);
  var currentTime = millis();
  if (currentTime < time1) {
  var x = random (1, 100) + cos(angle) * variable;
  var y = random (1, 100) + sin(angle) * variable;
  rect(x,y,5,1);
  angle += speed;
  variable += speed;
  
  }
  
  //right scatter 1
  else if (currentTime < time2) {
    stroke(135, 181, 209);
    var x = random (500, 600) + cos(angle) * variable;
    var y = random (500, 600) + sin(angle) * variable;
    rect(x,y,5,1);
    angle += speed;
    variable += speed;
      
  } 
  
  //left scatter 2
  else if (currentTime < time3) {
    stroke(168, 103, 180);
    var x = random (1, 100) + cos(angle) * variable;
    var y = random (100, 200) + sin(angle) * variable;
    rect(x,y,5,1);
    angle += speed;
    variable += speed;
  }
  
  //right scatter 2  
    else if (currentTime < time4) {
      stroke(25, 168, 255);
      var x = random (500, 600) + cos(angle) * variable;
      var y = random (400, 500) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
      
  } 
  //left scatter 3
  else if (currentTime < time5) {
    stroke(102, 51, 147);
    var x = random (1, 100) + cos(angle) * variable;
    var y = random (200, 300) + sin(angle) * variable;
    rect(x,y,5,1);
    angle += speed;
    variable += speed;
  }
  
  //right scatter 3  
    else if (currentTime < time6) {
      stroke(103, 132, 185);
      var x = random (500, 600) + cos(angle) * variable;
      var y = random (300, 400) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
      
  } 
  
  //left scatter 4
  else if (currentTime < time7) {
    stroke(118, 0, 198);
    var x = random (1, 100) + cos(angle) * variable;
    var y = random (300, 400) + sin(angle) * variable;
    rect(x,y,5,1);
    angle += speed;
    variable += speed;
  }
  
  //right scatter 4  
    else if (currentTime < time8) {
      stroke(0, 81, 229);
      var x = random (500, 600) + cos(angle) * variable;
      var y = random (200, 300) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
  }    
    
  //left scatter 5
   else if (currentTime < time9) {
    stroke(86, 21, 136);
    var x = random (1, 100) + cos(angle) * variable;
    var y = random (400, 500) + sin(angle) * variable;
    rect(x,y,5,1);
    angle += speed;
    variable += speed;
  }
  
  //right scatter 5  
    else if (currentTime < times1) {
      stroke(8, 0, 204);
      var x = random (500, 600) + cos(angle) * variable;
      var y = random (100, 200) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
  }    
    
  //left scatter 6
  else if (currentTime < times2) {
    stroke(36, 0, 74);
    var x = random (1, 100) + cos(angle) * variable;
    var y = random (500, 600) + sin(angle) * variable;
    rect(x,y,5,1);
    angle += speed;
    variable += speed;
  }
  
  //right scatter 6  
    else if (currentTime < times3) {
      stroke(3, 0, 76);
      var x = random (500, 600) + cos(angle) * variable;
      var y = random (1, 100) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
  } 
  
    //top scatter   
    else if (currentTime < times4) {
      stroke(111, 0, 204);
      var x = random (100, 500) + cos(angle) * variable;
      var y = random (1, 100) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
  } 
  
  //bottom scatter   
    else if (currentTime < times5) {
      stroke(0, 64, 204);
      var x = random (100, 500) + cos(angle) * variable;
      var y = random (500, 600) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed;
      variable += speed;
  } 
  
    //center scatter   
    else if (currentTime < times6) {
      stroke(random(20), random(50), random(140));
      var x = random (100, 500) + cos(angle) * variable;
      var y = random (100, 500) + sin(angle) * variable;
      rect(x,y,5,1);
      angle += speed1;
      variable += speed1;
  } 
  
    else if (currentTime < times7) {
      fill(255,255,255,25);
      //strokeWeight(.05);
      stroke(255,255,255);
      ellipse(a, 350, 3, 2);
      //strokeWeight(.03);
      stroke(0);
      fill(0);
      ellipse(b, 350, 10, 5);
  
    
  
  
  if
    (a > width) {
    sp = -1;
    }
  
  if  
    (b > width) {
    sp = -1;
    }
  
 
  a = a + sp;
  b = b + sp;
    }
    
    else if (currentTime < times8) {
      stroke(0);
      fill(0);
      ellipse(c, 350, 10, 5);
  
  if  
    (c > width) {
    sp = -1;
    }
  
  
  c = c + sp;
    }
    
    
}