var spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var spacebgImg;
var issImg;
var hasDocked = false;
function preload(){
spaceCraftImg1 = loadImage("spacecraft1.png");
spaceCraftImg2 = loadImage("spacecraft2.png");
spaceCraftImg3 = loadImage("spacecraft3.png");
spaceCraftImg4 = loadImage("spacecraft4.png");
spacebgImg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spaceCraftImg1);
  spacecraft.scale = 0.15;
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.50;
}

function draw() {
  background(spacebgImg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1)
  
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(spaceCraftImg3);
    spacecraft.x = spacecraft.x - 1;
  }
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spaceCraftImg4);
    spacecraft.x = spacecraft.x + 1;
  }
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 2;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spaceCraftImg2);
  }
}
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasDocked = true
  textSize(25)
  fill("white")
  text("Docking Succesful",200, 300)

}
  drawSprites();
}