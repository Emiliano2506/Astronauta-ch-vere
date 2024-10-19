//Git repositorio BAse Plantilla

var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia Arriba = Cepillarse",20, 55);
  text("Flecha hacia Abajo = Ejercitarse",20, 70);
  text("Flecha hacia la Izquierda = Comer",20, 85);
  text("Flecha hacia la Derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  //1.- Agregar  bordes
  

  //2.- Condicionales para cada menu donde  el sprite  cambie de imagen
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
  }
  if(keyDown("right_arrow")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
  }
  if(keyDown("left_arrow")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat");
  }
  if(keyDown("m")){
    astronaut.addAnimation("move",move);
    astronaut.changeAnimation("move");
  }
}