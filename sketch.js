var computerPaddle, ball;

function setup() {
  createCanvas(1200,800);
  computerPaddle = createSprite(400, 100, 50, 80);
  computerPaddle.shapeColor = "green";
  computerPaddle.debug = true;
  ball = createSprite(400, 800,80,30);
  ball.shapeColor = "green";
  ball.debug = true;

  ball.velocityY = -5;
  computerPaddle.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(ball, computerPaddle)
 
  drawSprites();
}

