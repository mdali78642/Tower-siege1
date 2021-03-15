const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingshot;
var polygon_img;

function preload()
{

}

function setup()
{
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    ground = new Ground();
    stand1 = new stand(380,300,270,10);
    stand2 = new stand(700,200,200,10);

    block1 = new block()
}
