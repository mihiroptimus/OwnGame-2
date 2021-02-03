const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var player
var leftImg, rightImg;
var direction = "left";
var bg;
var loseImg;
var helicopter1, helicopter2;
var backgroundMusic;
var killSound;

var troops  = []
var bullets = [];
var clouds = []
var helicopters = []

function preload(){
  leftImg = loadImage("planeLeft.png");
  rightImg = loadImage("planeRight.png");
  bg = loadImage("spacebg.jpg");
  loseImg = loadImage("lose.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  //backgroundMusic = new sound("gametheme.mp3");
  //backgroundMusic.play();
  
  player = new Plane(width/2,height/2);

  for(let i =1;i<300;i+=5){
    createHeli(i*300+random(200,400), random(windowWidth*0.001,windowHeight*0.06), random(200,400), random(50, 125));
  }
  for(let i =1;i<300;i+=5){
    createHeli(i*500+random(200,400), 50, random(windowWidth*0.001,windowHeight*0.3), random(height*0.15,height*0.2));
  }
  for(let i =1;i<500;i+=10){
    createCloud(i*300+random(200,400), random(windowWidth*0.5,windowHeight*0.3), random(200,400), random(50, 125));
  }
  /*for(let i =1;i<500;i+=10){
    createCloud(i*500+random(200,400), 50, random(windowWidth*0.001,windowHeight*0.3), random(height*0.15,height*0.2));
  }*/
  for(let i =1;i<500;i+=10){
    createTroop(i*300+random(200,400), random(windowWidth*0.05,windowHeight*0.05), 150, 150);
  }
  /*for(let i =1;i<500;i+=10){
    createTroop(i*500+random(200,400), 50, random(windowWidth*0.001,windowHeight*0.3), random(height*0.15,height*0.2));
  }*/
}

function draw() {
  background(bg);  
  Engine.update(engine);
  
  player.display();
  //killSound.play();
  drawHeli();
  drawClouds();
  drawTroop();
  drawBullet();
  //drawSprites();
    camera.position.x = player.body.position.x;
  translate((camera.position.x - 30 + width/2),(camera.position.y - 30 + height/2))
}

function keyPressed(){
  
  if(keyCode == 32){
    if(frameCount % 2 == 0){
    createBullet(player.body.position.x, player.body.position.y);
    }
  }
  if(keyCode ==37){
    Matter.Body.applyForce(player.body, player.body.position, {x:-50,y:0})
   }
  if(keyCode ==39){
    Matter.Body.applyForce(player.body, player.body.position, {x:50,y:0})
  }
  if(keyCode ==38){  
    Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-50})
  }
  else if(player.body.velocity.y>5){
    Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-1})
  }  
  
}


function detectcollision(lbullet,ltroop){
  bulletBodyPosition=lbullet.body.position
  troopBodyPosition=ltroop.body.position

  var distance=dist(bulletBodyPosition.x,bulletBodyPosition.y,troopBodyPosition.x,troopBodyPosition.y)
  if (distance <= lbullet.r + ltroop.r)
 	{
    return true
   } 
   else{
    return false
   }
}

function troopKill(){
for(var i = 0; i < bullets.length; i++){
  for(var j = 0; j < troops.length; j++){
  if(detectcollision(bullets[i].body, troops[j].body)){
    World.remove(world, bullets[i].body);
    World.remove(world, troops[j].body);
  }
}
}
}

