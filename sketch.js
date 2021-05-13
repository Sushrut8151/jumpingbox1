//creating all the variables
var box1, box2, box3, box4;
var flyingBox;
var music;
//loading sound
function preload(){
music=loadSound("music.mp3");
}

function setup(){
    //making canvas
    createCanvas(800,600);

    
//making the moving box 
    flyingBox=createSprite(random(10,750),300,20,20);
    flyingBox.shapeColor="white";
    flyingBox.velocityX=3;
    flyingBox.velocityY=3;

   // amking 4 surfaces 
    box1=createSprite(100,580,180,30);
    box1.shapeColor="red";

    box2=createSprite(300,580,180,30);
    box2.shapeColor="green";

    box3=createSprite(500,580,180,30);
    box3.shapeColor="blue";

    box4=createSprite(700,580,180,30);
    box4.shapeColor="yellow";

    

}

function draw() {
  //making the background black
    background(rgb(10,10,10))
  
   // giving conditions for the box to collide and bounce off and change color from 4 surfaces
  // playing music if touching 4 surfaces
  if(flyingBox.isTouching(box4)){
    music.play()
    flyingBox.shapeColor="yellow";
    flyingBox.bounceOff(box4);
    
  }
  
  else if(flyingBox.isTouching(box3)){
    music.play()
    flyingBox.shapeColor="blue";
    bounceOff(flyingBox,box3)
   
  }
    
  else if(flyingBox.isTouching(box2)){
    music.play()
    flyingBox.shapeColor="green";
    bounceOff(flyingBox,box2)
    flyingBox.velocityX=3;
    flyingBox.velocityY=-3;
  }
  
  else if(flyingBox.isTouching(box1)){
    music.play()
    flyingBox.shapeColor="red";
    flyingBox.bounceOff(box1)
  }

// giving conditions to make edges 
// stopping music if colliding with edges 
  if(flyingBox.x<10){
    music.stop()
      flyingBox.velocityX=3
  }else if(flyingBox.x>790){
    music.stop()
      flyingBox.velocityX=-3
  }


  if (flyingBox.y<10){
    music.stop()
    flyingBox.velocityY=3
  }

  
   // darwing sprites 
    drawSprites()
}
