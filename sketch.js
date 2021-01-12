//name spacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;
var pig1,pig2;

function setup() {
  var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,30);
  box1 = new Box(900,560,50,50);
  box2 = new Box(700,560,50,50);
  box3 = new Box(900,490,50,50);
  box4 = new Box(700,490,50,50);
  box5 = new Box(800,420,50,50);

  log1 = new Log(800,525,250,PI/2);
  log2 = new Log(800,455,250,PI/2);
  log3 = new Log(780,435,130,PI/7);
  log4 = new Log(820,435,130,-PI/7);

  pig1 = new Pig(800,560);
  pig2= new Pig(800,490);

  bird = new Bird(100,100);

}

function draw() {
  background("lightblue"); 
  Engine.update(engine);
   
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  pig1.display();
  pig2.display();

  bird.display();
}