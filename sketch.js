var dog, happyDog;
var foodS, foodStock;
var database; 
var dogImg, happyDogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250, 300, 150, 150)
  dog.addImage(dogImg);
  dog.scale = 0.15;


  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }

  drawSprites();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



