const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var mConstraint;
var roof;

function preload()
{
	
}

function setup() {
	
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;
  
	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
	  mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.

	roof = new Roof(457,175,300,50);

	bob1 = new Bob(340, 450, "#00b0ff");
	bob2 = new Bob(400, 450, "#e91e63");
	bob3 = new Bob(460, 450, "#ffc107");
	bob4 = new Bob(520, 450, "#e91e63");
	bob5 = new Bob(580, 450, "#00b0ff");

	rope1 = new Rope(bob1.body, { x: 340, y: 200 });
    rope2 = new Rope(bob2.body, { x: 400, y: 200 });
	rope3 = new Rope(bob3.body, { x: 460, y: 200 });
    rope4 = new Rope(bob4.body, { x: 520, y: 200 });
    rope5 = new Rope(bob5.body, { x: 580, y: 200 });

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
  }



