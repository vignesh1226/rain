const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  a = new Raindrop(20,30,20,PI);
  b = new Raindrop(30,30,20,PI);
  c = new Raindrop(30,40,20,PI);
  d = new Raindrop(40,50,20,PI);
  e = new Raindrop(30,60,20,PI);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  a.display();
  b.display();
  c.display();
  d.display();
  e.display();
}