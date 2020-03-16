const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  a = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  b = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  c = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  d = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  e = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  f = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  g = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  h = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  i = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  j = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  k = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  l = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  m = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  n = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  o = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  p = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  q = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  r = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  s = new Raindrop(random(0,400),random(0,400),random(5,30),PI);
  t = new Raindrop(random(0,400),random(0,400),random(5,30),PI);

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
