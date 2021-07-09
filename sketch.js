const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dog, happyDog, database, foodS, readStock
var engine, world

function preload()
{
}

function setup() {
	createCanvas(500, 500);


  database = firebase.database();
  FoodStock = database.ref("Food");
  FoodStock.on("value", readStock); 

	engine = Engine.create();
	world = engine.world;


  dog = new Dog(250,340,250,250)

  Engine.run(engine);
  
}  

 function readStock(){
   
 }
function draw() {  
  background(46, 139, 87)
  
  if(keyCode === UP_ARROW){
      writeStock(Food);
      Dog.addImage(happyDog)
  }



  dog.display();
}

