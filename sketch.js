function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="green";

  rect2=createSprite(400,200,80,30);
   rect2.shapeColor="green";

   rect1.velocityY=-5;
   rect2.velocityY=+5;
}

function draw() {
  background(255);
  //rect1.x=World.mouseX;
 // rect1.y=World.mouseY;
  console.log(rect1.x-rect2.x);
 /* if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2 &&
  rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2){
     rect1.shapeColor="red";
      rect2.shapeColor="red";
      
  }
else{
  rect1.shapeColor="green";
      rect2.shapeColor="green";

}*/

if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2 ){
    rect1.velocityX=rect1.velocityX * (-1);
    rect2.velocityX=rect2.velocityX *(-1);
  }
if ( rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2){

  rect1.velocityY=rect1.velocityY * (-1);
    rect2.velocityY=rect2.velocityY *(-1); 
}
    drawSprites();

}