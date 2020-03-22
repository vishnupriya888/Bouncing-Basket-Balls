var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var wall1,wall2,wall3,wall4;
var inner1,inner2,inner3,inner4,inner5,inner6;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;
function setup() {
  createCanvas(400, 400);
wall1 = createSprite(200, 50, 300, 10);
wall1.shapeColor = "black";
wall2 = createSprite(200, 350, 300, 10);
wall2.shapeColor = "black";
wall3 = createSprite(350, 200, 10, 300);
wall3.shapeColor = "black";
wall4 = createSprite(50, 200, 10, 300);
wall4.shapeColor = "black";

inner1 = createSprite(100, 200, 50, 3);
inner1.shapeColor = "black";
inner2 = createSprite(298, 200, 50, 3);
inner2.shapeColor = "black";
inner3 = createSprite(74, 166, 3, 70);
inner3.shapeColor = "black";
inner4 = createSprite(125, 166, 3, 70);
inner4.shapeColor = "black";
inner5 = createSprite(271, 166, 3, 70);
inner5.shapeColor = "black";
inner6 = createSprite(321, 166, 3, 70);
inner6.shapeColor = "black";


ball1 = createSprite(200, 195, 15, 15);
ball1.shapeColor = "orange";
ball2 = createSprite(200, 197, 15, 15);
ball2.shapeColor = "blue";
ball3 = createSprite(200, 200, 15, 15);
ball3.shapeColor = "orange";
ball4 = createSprite(200, 205, 15, 15);
ball4.shapeColor = "blue";
ball5 = createSprite(200, 215, 15, 15);
ball5.shapeColor = "violet";
ball6 = createSprite(200, 225, 15, 15);
ball6.shapeColor = "red";
ball7 = createSprite(200, 235, 15, 15);
ball7.shapeColor = "violet";
ball8 = createSprite(200, 245, 15, 15);
ball8.shapeColor = "red";
ball9 = createSprite(297, 167, 20, 20);
ball9.shapeColor = "#808000";
ball10 = createSprite(97, 167, 20, 20);
ball10.shapeColor = "#808000";


ball1.velocityX = 1;
ball1.velocityY = 1;
ball2.velocityX = 4;
ball2.velocityY = -4;
ball3.velocityX = -6;
ball3.velocityY = 1;
ball4.velocityX = -2;
ball4.velocityY = -1;
ball5.velocityX = 1;
ball5.velocityY = 4;
ball6.velocityX = -4;
ball6.velocityY = -2;
ball7.velocityX = -3;
ball7.velocityY = 5;
ball8.velocityX = 3;
ball8.velocityY = -1;

}

function draw() {
  background(100);
 textSize(17);
    fill("white");
    text("move all the balls inside either of the boxes to WIN!!!",8,17);
    text("Use keybord arrow keys to move the ball ", 47,377);
  if (keyDown("UP_ARROW")) {
      ball1.velocityX = 0;
      ball2.velocityX = 0;
      ball3.velocityX = 0;
      ball4.velocityX = 0;
      ball5.velocityX = 0;
      ball6.velocityX = 0;
      ball7.velocityX = 0;
      ball8.velocityX = 0;
      
      ball1.velocityY = -1;
      ball2.velocityY = -2;
      ball3.velocityY = -3;
      ball4.velocityY = -4;
      ball5.velocityY = -5;
      ball6.velocityY = -6;
      ball7.velocityY = -7;
      ball8.velocityY = -8;
    }
    if (keyDown("DOWN_ARROW")) {
      ball1.velocityX = 0;
      ball2.velocityX = 0;
      ball3.velocityX = 0;
      ball4.velocityX = 0;
      ball5.velocityX = 0;
      ball6.velocityX = 0;
      ball7.velocityX = 0;
      ball8.velocityX = 0;
      
      ball1.velocityY = 8;
      ball2.velocityY = 7;
      ball3.velocityY = 6;
      ball4.velocityY = 5;
      ball5.velocityY = 4;
      ball6.velocityY = 3;
      ball7.velocityY = 2;
      ball8.velocityY = 1;
    }
    if (keyDown("LEFT_ARROW")) {
      ball1.velocityX = -1;
      ball2.velocityX = -3;
      ball3.velocityX = -3;
      ball4.velocityX = -4;
      ball5.velocityX = -8;
      ball6.velocityX = -7;
      ball7.velocityX = -6;
      ball8.velocityX = -5;
      
      ball1.velocityY = 0;
      ball2.velocityY = 0;
      ball3.velocityY = 0;
      ball4.velocityY = 0;
      ball5.velocityY = 0;
      ball6.velocityY = 0;
      ball7.velocityY = 0;
      ball8.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      ball1.velocityX = 5;
      ball2.velocityX = 6;
      ball3.velocityX = 7;
      ball4.velocityX = 8;
      ball5.velocityX = 1;
      ball6.velocityX = 2;
      ball7.velocityX = 3;
      ball8.velocityX = 5;
      
      ball1.velocityY = 0;
      ball2.velocityY = 0;
      ball3.velocityY = 0;
      ball4.velocityY = 0;
      ball5.velocityY = 0;
      ball6.velocityY = 0;
      ball7.velocityY = 0;
      ball8.velocityY = 0;
    }
    
   ball1.bounceOff(wall1);
    ball1.bounceOff(wall2);
    ball1.bounceOff(wall3);
    ball1.bounceOff(wall4);
    ball2.bounceOff(wall1);
    ball2.bounceOff(wall2);
    ball2.bounceOff(wall3);
    ball2.bounceOff(wall4);
    ball3.bounceOff(wall1);
    ball3.bounceOff(wall2);
    ball3.bounceOff(wall3);
    ball3.bounceOff(wall4);
    ball4.bounceOff(wall1);
    ball4.bounceOff(wall2);
    ball4.bounceOff(wall3);
    ball4.bounceOff(wall4);
    ball5.bounceOff(wall1);
    ball5.bounceOff(wall2);
    ball5.bounceOff(wall3);
    ball5.bounceOff(wall4);
    ball6.bounceOff(wall1);
    ball6.bounceOff(wall2);
    ball6.bounceOff(wall3);
    ball6.bounceOff(wall4);
    ball7.bounceOff(wall1);
    ball7.bounceOff(wall2);
    ball7.bounceOff(wall3);
    ball7.bounceOff(wall4);
    ball8.bounceOff(wall1);
    ball8.bounceOff(wall2);
    ball8.bounceOff(wall3);
    ball8.bounceOff(wall4);
    
    ball1.bounceOff(inner1);
    ball1.bounceOff(inner2);
    ball1.bounceOff(inner3);
    ball1.bounceOff(inner4);
    ball1.bounceOff(inner5);
    ball1.bounceOff(inner6);
    ball2.bounceOff(inner1);
    ball2.bounceOff(inner2);
    ball2.bounceOff(inner3);
    ball2.bounceOff(inner4);
    ball2.bounceOff(inner5);
    ball2.bounceOff(inner6);
    ball3.bounceOff(inner1);
    ball3.bounceOff(inner2);
    ball3.bounceOff(inner3);
    ball3.bounceOff(inner4);
    ball3.bounceOff(inner5);
    ball3.bounceOff(inner6);
    ball4.bounceOff(inner1);
    ball4.bounceOff(inner2);
    ball4.bounceOff(inner3);
    ball4.bounceOff(inner4);
    ball4.bounceOff(inner5);
    ball4.bounceOff(inner6);
    ball5.bounceOff(inner1);
    ball5.bounceOff(inner2);
    ball5.bounceOff(inner3);
    ball5.bounceOff(inner4);
    ball5.bounceOff(inner5);
    ball5.bounceOff(inner6);
    ball6.bounceOff(inner1);
    ball6.bounceOff(inner2);
    ball6.bounceOff(inner3);
    ball6.bounceOff(inner4);
    ball6.bounceOff(inner5);
    ball6.bounceOff(inner6);
    ball7.bounceOff(inner1);
    ball7.bounceOff(inner2);
    ball7.bounceOff(inner3);
    ball7.bounceOff(inner4);
    ball7.bounceOff(inner5);
    ball7.bounceOff(inner6);
    ball8.bounceOff(inner1);
    ball8.bounceOff(inner2);
    ball8.bounceOff(inner3);
    ball8.bounceOff(inner4);
    ball8.bounceOff(inner5);
    ball8.bounceOff(inner6);
   if(ball1.isTouching(ball9) || ball1.isTouching(ball10)){
      ball1.velocityX = 0;
      ball1.velocityY = 0;
      num1 = 1;
    } 
    if(ball2.isTouching(ball9) || ball2.isTouching(ball10)){
      ball2.velocityX = 0;
      ball2.velocityY = 0;
      num2 = 1;
    } 
    if(ball3.isTouching(ball9) || ball3.isTouching(ball10)){
      ball3.velocityX = 0;
      ball3.velocityY = 0;
      num3 = 1;;
    } 
    
    if(ball4.isTouching(ball9)|| ball4.isTouching(ball10)){
      ball4.velocityX = 0;
      ball4.velocityY = 0;
      num4 = 1;
    } 
    
    if(ball5.isTouching(ball9) || ball5.isTouching(ball10)){
      ball5.velocityX = 0;
      ball5.velocityY = 0;
      num5 = 1;
    } 
    
    if(ball6.isTouching(ball9) || ball6.isTouching(ball10)){
      ball6.velocityX = 0;
      ball6.velocityY = 0;
      num6 = 1;
    } 
    
    if(ball7.isTouching(ball9) || ball7.isTouching(ball10)){
      ball7.velocityX = 0;
      ball7.velocityY = 0;
      num7 = 1;
    } 
    
    if(ball8.isTouching(ball9) || ball8.isTouching(ball10)){
      ball8.velocityX = 0;
      ball8.velocityY = 0;
      num8 = 1;
    } 
    
    if(num1 === 1 && num2 === 1 && num3 === 1 && num4 === 1 && num5 === 1 && num6 === 1 && num7 === 1 && num8 === 1) {
      text("YOU WIN", 148, 235);
    }
  drawSprites();
}