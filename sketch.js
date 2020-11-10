var ball1, ball2;

function setup() {
  createCanvas(1200,800);
  ball1 = createSprite(400, 100, 50, 80);
  ball1.shapeColor = "green";
  ball1.debug = true;
  ball2 = createSprite(400, 800,80,30);
  ball2.shapeColor = "green";
  ball2.debug = true;

  ball2.velocityY = -5;
  ball1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(ball2, ball1);
  drawSprites();
}

