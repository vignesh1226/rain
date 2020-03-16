const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  a = new Raindrop(20,30,20,PI);
  b = new Raindrop(30,30,20,PI);
  c = new Raindrop(30,40,20,PI);
  d = new Raindrop(40,50,20,PI);
  e = new Raindrop(30,60,20,PI);
  f = new Raindrop(20,30,20,PI);
  g = new Raindrop(30,40,20,PI);
  h = new Raindrop(30,80,20,PI);
  i = new Raindrop(40,20,20,PI);
  j = new Raindrop(100,90,20,PI);
  k = new Raindrop(54,74,20,PI);
  l = new Raindrop(31,39,20,PI);
  m = new Raindrop(80,356,20,PI);
  n = new Raindrop(82,208,20,PI);
  o = new Raindrop(78,34,20,PI);
  p = new Raindrop(67,42,20,PI);
  q = new Raindrop(74,42,20,PI);
  r = new Raindrop(30,34,20,PI);
  s = new Raindrop(340,150,20,PI);
  t = new Raindrop(378,360,20,PI);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  a.display();
  b.display();
  c.display();
  d.display();
  e.display();
  f.display();
  g.display();
  h.display();
  i.display();
  j.display();
  k.display();
  l.display();
  m.display();
  n.display();
  o.display();
  p.display();
  q.display();
  r.display();
  s.display();
  t.display();
}
