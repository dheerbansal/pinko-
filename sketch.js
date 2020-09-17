var ground
var division1, division2, division3, division4, division5, division6
var pinko1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(480, 800);
    engine = Engine.create();
	world = engine.world;

  ground = new Ground(100,795,800,25);
  
  division1 = new Division(50,650,10,300);
  division2 = new Division(120,650,10,300);
  division3 = new Division(190,650,10,300);
  division4 = new Division(260,650,10,300);
  division5 = new Division(330,650,10,300);
  division6 = new Division(400,650,10,300);

  pinko1 = new Pinko(5,100,10,10);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  pinko1.display();
 // drawSprites();
 
}



