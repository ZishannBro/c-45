var bgimg 
var bg
var penguin
var penguinimg
function preload(){
 bgimg=loadImage("assets/bg2.jpg")
 penguinimg=loadImage("assets/penguin1.png")
}

function setup() {
  createCanvas(800, 400);
bg=createSprite(400,200,800,400)
bg.addImage(bgimg)
penguin=createSprite(50,350,35,35)
penguin.addImage(penguinimg)
  

}

function draw() {
  background(255);
  bg.velocityX=-2
 if (bg.x<300) {
  bg.x=bg.width/2
 }
  
   
 
  
  drawSprites();

 
}

 




