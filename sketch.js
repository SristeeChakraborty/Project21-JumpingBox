var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(700,584,200,30);
surface1.shapeColor = "pink";
surface2 = createSprite(500,584,200,30);
surface2.shapeColor = "turquoise";
surface3 = createSprite(300,584,200,30);
surface3.shapeColor = "yellow";
surface4 = createSprite(100,584,200,30);
surface4.shapeColor = "purple";

    //create box sprite and give velocity
box = createSprite(random(20,750),200,60,60);
box.shapeColor = "white";
box.velocityX = 8;
box.velocityY = 8;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);   

    //add condition to check if box touching surface and make it box
if (surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "pink";
    music.stop();
    box.velocityX = 0;
    box.velocityY = 0;
}

if (surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "turquoise";
    music.play();
}

if (surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "yellow";
}

if (surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "purple";
}
    drawSprites();
}
