var gubber;
var shooter1Img,shooter2Img,shooter3Img;
var heart1Img,heart2Img ,heart3Img;
var bgImg;
var zombieImg;
var zombie ;




function preload(){
bgImg=loadImage("images/bg.jpeg");
shooter1Img=loadImage("images/shooter_1.png"); 
shooter2Img=loadImage("images/shooter_2.png"); 
shooter3Img=loadImage("images/shooter_3.png"); 
zombieImg=loadImage("images/zombie.png"); 
 heart1Img=loadImage("images/heart_1.png");
 heart2Img=loadImage("images/heart_2.png");
 heart3Img=loadImage("images/heart_3.png");

//explosionSound=loadSound("sound/explosion.mp3");
//winSound=loadSound("sound/win.mp3");
//loseSound=loadSound("sound/lose.mp3");


}

function setup (){
createCanvas(windowWidth,windowHeight);

gubber=createSprite(displayWidth/2-100,displayHeight/2-100,50,50);
gubber.addImage(shooter1Img);

zombie=createSprite(displayWidth/2+100,displayHeight/2+100,50,50);
zombie.addImage(zombieImg);

heart1=createSprite(displayWidth/4-100,displayHeight/4-100,40,40);
heart1.addImage(heart1Img);

heart2=createSprite(displayWidth/4-100,displayHeight/4-100,40,40);
heart2.addImage(heart2Img);


heart3=createSprite(displayWidth/2-100,displayHeight/2-100,50,50);
heart3.addImage(heart3Img);




}






function draw(){
background(bgImg);
 



 drawSprites();
}


