
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var SlingShot;
var polygon_img;
var score=0;

function preload(){
//polygon_img=loadImage("polygon.png")
//backgroundImg=loadImage("bg_png");
}

function setup(){
    engine=Engine.create();
    world= engine.world

    createCanvas(900,400);
    ground= new Ground();
    stand1= new Stand(380,300,270,10);
    stand2= new Stand(700,200,200,10);

    block1= new Block(280,275,30,40);
    block2= new Block(310,275,30,40);
    block3= new Block(340,275,30,40);
    block4= new Block(370,275,30,40);
    block5= new Block(400,275,30,40);
    block6= new Block(430,275,30,40);
    block7= new Block(460,275,30,40);
    block8= new Block(490,275,30,40);
    
    block9= new Block(310,235,30,40);
    block10= new Block(340,235,30,40);
    block11= new Block(370,235,30,40);
    block12= new Block(400,235,30,40);
    block13= new Block(430,235,30,40);
    block14= new Block(460,235,30,40);

    block15=new Block(340,195,30,40);
    block16=new Block(370,195,30,40);
    block17=new Block(400,195,30,40);
    block18=new Block(430,195,30,40);
    
    block19=new Block(370,155,30,40);
    block20=new Block(400,155,30,40);

    block21=new Block(385,115,30,40);

    //set 2
    blocks1=new Block(640,175,30,40);
    blocks2=new Block(670,175,30,40);
    blocks3=new Block(700,175,30,40);
    blocks4=new Block(730,175,30,40);
    blocks5=new Block(760,175,30,40);

    blocks6=new Block(670,135,30,40);
    blocks7=new Block(700,135,30,40);
    blocks8=new Block(730,135,30,40);

    blocks9=new Block(700,95,30,40);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot= new SlingShot(this.ball,{x:200,y:200});
}

function draw(){
    background("white")
    Engine.update(engine);
    strokeWeight(2);
    stroke("white");
    textSize(13);
    fill("red");
    text("Score:"+ score,width-300,-50)

    strokeWeight(2);
    stroke(15);
        
    stand1.display();
    stand2.display();

    stroke(15);
    fill("black");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    stroke(15)
    fill("orange")  
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    stroke(15);
    fill("violet")
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    stroke(15)
    fill("green")
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    stroke(15)
    fill("blue")
    block21.display();
    block21.score();
    stroke(15)
    fill("red")
    blocks1.display();
    blocks1.score();
    blocks2.display();
    blocks2.score();
    blocks3.display();
    blocks3.score();
    blocks4.display();
    blocks4.score();
    blocks5.display();
    blocks5.score();
    stroke(15)
    fill("yellow")
    blocks6.display();
    blocks6.score();
    blocks7.display();
    blocks7.score();
    blocks8.display();
    blocks8.score();
    stroke(15)
    fill("pink")
    blocks9.display();
    blocks9.score();
    text("drag the line and release to hit the blocks",600,250)
    elipse(ball.position.x,ball.position.y,20);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
}