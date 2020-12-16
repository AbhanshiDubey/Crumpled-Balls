var paperObject,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()

	


function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	var groundOption ={
		isStatic : true
		}
	//Create the Bodies Here.
	ground = new Ground(500,680,1000,20);
	ground.shapeColor=color(255)

	dustbin1 = new Dustbin (810,659,300,20);
	dustbin1.shapeColor=color("pink");

	dustbin2 = new Dustbin (950,605,20,100);
	dustbin2.shapeColor=color("pink");

	dustbin3= new Dustbin (670,605,20,100);
	dustbin3.shapeColor=color("pink");

	paper = new Paper (200,600);
	//ellipse(56, 46, 55, 55);
	//paper = createSprite (200,640,50,50);

	Engine.run(engine);
 

}


function draw() {
  rectMode(CENTER);
  
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  drawSprites();
 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
}

