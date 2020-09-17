const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roofClass(400, 200, 220, 40);
	bobObject1 = new bobClass(320, 400, 40);
	bobObject2 = new bobClass(360, 400, 40);
	bobObject3 = new bobClass(400, 400, 40);
	bobObject4 = new bobClass(440, 400, 40);
	bobObject5 = new bobClass(480, 400, 40);
	rope1 = new ropeClass(bobObject1.body, { x: 320, y: 200 });
	rope2 = new ropeClass(bobObject2.body, { x: 360, y: 200 });
	rope3 = new ropeClass(bobObject3.body, { x: 400, y: 200 });
	rope4 = new ropeClass(bobObject4.body, { x: 440, y: 200 });
	rope5 = new ropeClass(bobObject5.body, { x: 480, y: 200 });
	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(100, 200, 300);
	roofObject.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -100, y: - 50 });
	}
}


