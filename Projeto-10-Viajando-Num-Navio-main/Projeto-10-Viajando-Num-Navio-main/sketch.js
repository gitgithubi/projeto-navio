var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if (keyIsDown(UP_ARROW)) {
    ship.y = ship.y -1.4;
 } else if (keyIsDown(DOWN_ARROW)) {
  ship.y = ship.y +1.4;
 }

 if (ship.y <= 200) {
   ship.y = 200;
 } else if (ship.y >= 290) {
  ship.y = ship.width;
 }

  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}
