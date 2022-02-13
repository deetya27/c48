var Bg;
var ball;
var Dn;
var score = 0
var gameState = "start"

function preload(){
 Bg = loadImage("fluff.jpg");
ball =loadImage("rabbit.jpg");
Dn = loadImage("dino.jpg");
}

function setup() {
  createCanvas(400,400);
  bg = createSprite(200,200);
  bg.addImage("ball", Bg);
  bg.scale = 1.70;

  rabbit = createSprite(340,50);
  rabbit.addImage("rab", ball);
  rabbit.scale = 0.5;

  dino = createSprite(342,160);
  dino.addImage("di", Dn);
  dino.scale = 0.5;
  
}

function points(){
score = score+1

}

function draw() 
{
  background(30)
//console.log(gameState)
/*
if(gameState === "start"){
  console.log(gameState)
  text("Tap on the DINO as many times as possible before the time runs out", 200,200);
}
*/


if (gameState === "play"){
  drawSprites()

  var goal = Math.round(random(15,20))
  if(frameCount%120===0 ){
    //(frameRate(0.4))
  textSize(30)
  text("goal: "+goal, 260,280)
  }


textSize(30);
  text("Score : "+score, 200,250 )
  if(mousePressedOver(dino)){
    //console.log("deetya")
    points();
  score = score+1
  }}

  if(gameState === "start"){
    console.log(gameState)
    textSize(12);
    fill ("lavender")
    text("Tap on DINO as many times as possible before the time runs out", 12,200);
  }

  if (keyDown("space")){
    gameState = "play"
  }
}




