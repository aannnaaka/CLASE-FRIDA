var gato;

function setup(){
createCanvas(600,400);
gato = createSprite(200,200,40,40);
}

function draw(){
background("black");

if(keyIsDown(UP_ARROW)){
    gato.y = gato.y-5;
}

drawSprites();
}