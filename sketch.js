var naruto, sasuke;
var narutoimg, sasukeimg;
var bg;
var traps;
var slingshot, attack1, attack2, attack3;
var slingshotimg, attack1img, attack2img, attack3img; 

function preload(){
  bg = loadImage("Images/bg.png");
  narutoimg = loadAnimation("Images/Naruto Running 1.jpg, Images/Naruto Running 2.jpg, Images/Naruto Running 3.jpg, Images/Naruto Running 4.jpg");
  sasukeimg = loadAnimation("Images/Sasuke Running 1.jpg, Images/Sasuke Running 2.jpg, Images/Sasuke Running 3.jpg, Images/Sasuke Running 4.jpg");

}

function setup() {
  createCanvas(800,400);
  naruto = createSprite(200, 200, 50,50);
  naruto.addAnimation("narutoimg", running);

  sasuke = createSprite(200, 50, 50, 50);
  sasuke = addAnimation("sasukeimg", running);
}

function draw() { 
  drawSprites();
}