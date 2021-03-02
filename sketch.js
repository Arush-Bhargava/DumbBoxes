const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

     box1 = new Box(600,300,50,50);
    box2 = new Box(630,100,50,100);

    ground = new Ground(600,height,1200,20);
}




function draw(){
    background(0);
    Engine.update(engine);
     box2.display();
    box1.display();
    ground.display();
}





