var car, bg,carImg,bgImg,enemyImg,enemy;

function preload(){
carImg=loadImage("car.png");
bgImg=loadImage("bg.png")
enemy=loadImage("enemy.png")
}

function setup() {
  createCanvas(400,800);

bg = createSprite(200,-500)
bg.addImage(bgImg);
bg.scale=1.2

 car = createSprite(200, 350, 50, 50);
 car.addImage(carImg);
 car.scale=0.15;
car.rotation=-90

}

function draw() {
  background("lightblue");

  // setup camera positions with car
  camera.x=car.x
  camera.y=car.y

  if(keyDown("up")){
    car.y-=7
  }
  
if(keyDown("left")){
  car.x-=7
}
if(keyDown("down")){
  car.y+=8
}
if(keyDown("right")){
  car.x+=8
}
if(car.y-bg.y>200) bg.y=car.y+200;

  

  drawSprites();
}