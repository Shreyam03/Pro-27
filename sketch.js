
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var bobDiameter=40;
    var startBobPositionX=width/2;
	var startBobPositionY=height/2;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	roof=new Ground();
	chain1=new Chain(bobObject1.body,roof.body,-160,0);
	chain2=new Chain(bobObject2.body,roof.body,-80,0);
	chain3=new Chain(bobObject3.body,roof.body,0,0);
	chain4=new Chain(bobObject4.body,roof.body,80,0);
	chain5=new Chain(bobObject5.body,roof.body,160,0);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}
}




