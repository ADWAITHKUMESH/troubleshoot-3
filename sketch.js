var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  paper1=new paper(300,300)
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paper1.display();
  drawSprites();
 
}



