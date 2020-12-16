const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var barObject,bob1Object,bob2Object,bob3Object,bob4Object,bob5Object,chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	barObject = new Bar(width/2,height/4,600,20);
	bob1Object = new Bob(400,350,100);
	bob2Object = new Bob(600,350,100);
	bob3Object = new Bob(500,350,100);
	bob4Object = new Bob(300,350,100);
	bob5Object = new Bob(200,350,100);
	chain1 = new Chain(bob1Object,{x:400,y:height/4})
	chain2 = new Chain(bob2Object,{x:600,y:height/4})
	chain3 = new Chain(bob3Object,{x:500,y:height/4})
	chain4 = new Chain(bob4Object,{x:300,y:height/4})
	chain5 = new Chain(bob5Object,{x:200,y:height/4})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  barObject.display();
  bob1Object.display();
  bob2Object.display();
  bob3Object.display();
  bob4Object.display();
  bob5Object.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === "LEFT_ARROW"){
		Matter.Body.applyForce(bob5Object,{x:15,y:0})
	}
}

