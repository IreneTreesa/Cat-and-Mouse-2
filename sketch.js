var  tom, jerry ;
var tomImg1, tomImg2, tomImg3;
var jerryImg1, jerryImg2, jerryImg3;
var backgroundImage, ground;

function preload() {
    
    backgroundImage= loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png"); 
    tomImg2= loadAnimation("tomTwo.png", "tomThree.png");
    tomImg4= loadAnimation("tomFour.png");
    
    jerryImg1= loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png", "jerryThree.png");
    
    jerryImg4= loadAnimation("jerryFour.png");
}

function setup(){

    createCanvas(1000,800);

   

    tom= createSprite(850,700,30,20);
    tom.addAnimation( "tom1", tomImg1);
    tom.scale= 0.2;
    
    jerry= createSprite(100, 700, 30,20);
    jerry.addAnimation("jerry1", jerryImg1);
    jerry.scale= 0.1;
}

function draw() {

    background(backgroundImage);
    
    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("catLastImage", tomImg4);
        //tom.x= 300;
        tom.scale= 0.2;
        tom.changeAnimation("catLastImage");
        
        jerry.addAnimation("jerryLastImage", jerryImg4);
        jerry.changeAnimation("jerryLastImage");
        jerry.scale= 0.1;
        jerry.velocityX=0;
     }

    text(mouseX +','+mouseY,10,45);

    
    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      tom.velocityX= -5;
      tom.addAnimation("catRunning",tomImg2 );
      tom.changeAnimation("catRunning");
      jerry.addAnimation("jerryTeasing", jerryImg2);
      jerry.changeAnimation("jerryTeasing");
  }


}
