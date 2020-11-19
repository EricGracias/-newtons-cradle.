const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var p1,p2,p3,p4,p5;

function setup() {
  createCanvas(1540,720);
  engine = Engine.create();
  world = engine.world;

  //mouseDragged();
 

  ground = new Ground(width/2,height-13,width+1,30);

  p1 = new Ball(1500,200,90,90);
  p2 = new Ball(900,200,90,90);
  p3 = new Ball(800,200,90,90);
  p4 = new Ball(700,200,90,90);
  p5 = new Ball(600,200,90,90);


  rope1 = new Rope(p1.body,{x:1000,y:50});
  rope2 = new Rope(p2.body,{x:900,y:50});
  rope3 = new Rope(p3.body,{x:800,y:50});
  rope4 = new Rope(p4.body,{x:700,y:50});
  rope5 = new Rope(p5.body,{x:600,y:50});


}

function draw() {
  background("white");  
  Engine.update(engine);

  ground.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}

//function mouseDragged(){
  //Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY});

//}