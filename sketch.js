var player,player_running,stone,stoneimg,jungle,
    jungleimg,banana,bananaimg,ground;
var FoodGroup,obstaclesgroup;
var score=0;
function preload(){

player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

 bananaimg = loadImage("banana.png");
  
 stoneimg = loadImage("stone.png");
  
 jungleimg=loadImage("jungle.jpg");
}

function setup() {
  createCanvas(1920,1080);
  jungle=createSprite(0,0,800,600);
jungle.addImage(jungleimg);
jungle.scale=1.1
  jungle.x=jungle.width/2;
  jungle.velocityX=-4;
  
  
 player = createSprite(98,310,20,50);
  player.addAnimation("running",player_running);
  player.scale=0.1
  
  ground = createSprite(50,310,800,10);
  ground.x=ground.width/2;
  ground.velocityX=-2;
  ground.visible=false;
  

 
  FoodGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background(220);
  
   if(obstaclesGroup.isTouching(player))
  {
   player.scale=0.1
    
  
  }
if(jungle.x<100){
    jungle.x=jungle.width/2;
  }

  
  if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: player.scale=0.12;
                break;
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        default: break;
    }
  
  if(ground.x<0){
    ground.x=ground.width/2; 
  }
  
  if(keyDown(UP_ARROW)){
     player.velocityY=-4;
     }
  
  player.velocityY=player.velocityY+0.5;
  
 food();
 spawnObstacles();
 obstaclesGroup.collide(ground)
player.collide(ground);
  drawSprites();
  stroke("white") ;
 textSize (20);
 fill("white");
   text("Score:"+score,250,70)
  //score = score + Math.round(getFrameRate()/60); 
}

function food()
{
  if(frameCount%100===0){
  var banana=createSprite(400,0,20,20);
  banana.addImage(bananaimg)
  banana.velocityX=-3
  banana.scale=0.05
  banana.y=random(200,300);
    
    
  banana.lifetime=130;
      FoodGroup.add(banana);
        player.depth = banana.depth + 1;
 
    
  
  }}
   
   
    
    
  
 function spawnObstacles(){
  if (frameCount%300===0) {
     stone=createSprite(400,300,20,30) 
    stone.addImage(stoneimg);
    stone.scale=0.10 
   stone .velocityX=-5
    stone.lifetime=130;
    obstaclesGroup.add(stone);
    obstaclesGroup.collide(ground)
    
    if(player.isTouching(obstaclesGroup)){
       switch(score){
         case 1: player.scale=0.2
           break;
           case 2:player.velocityY=0
           break;
           default:break;
              }
       }
         }}
    
 
 
