var path
var pathimg 
var boy
var runningboy
function preload(){
  runningboy = loadAnimation("Runner-1.png","Runner-2.png");
  pathimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200,10,30);
  path.addImage(pathimg);
  boy = createSprite(200,200,10,30)
  boy.addAnimation("Correndo",runningboy);
  boy.scale = -0.1;
}

function draw() {
  background(0);
  path.velocityY = -20;
    if(path.y<0){
      path.y = height/2

    }
    drawSprites()
}
