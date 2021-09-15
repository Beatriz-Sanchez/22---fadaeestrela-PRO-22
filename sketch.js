var starImg, bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  starImg = loadImage("images/star.png");
  bgImg = loadImage("images/starNight.png");
  vozFada = loadSound("sound/JoyMusic.mp3");
  //carregar animação de fada 
}

function setup() {
  createCanvas(800, 750);

  //escrever código para tocar o som vozFada


  //criar sprite de fada e adicionar animação para fada


  star = createSprite(650, 30);
  star.addImage(starImg);
  star.scale = 0.2;

  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650, 30, 5, {
    restitution: 0.5,
    isStatic: true
  });
  World.add(world, starBody);

  Engine.run(engine);

}

function draw() {
  background(bgImg);

  //fazer com que posição do sprite seja a mesma que a do corpo starBody

  //se a estrela encostar na fada, o corpo fica estático
  /*
	exemplo:
	if(star.y > 470 && starBody.position.y > 470 ){
  	Matter.Body.setStatic(starBody,true);
	}
	Ajustar posição de acordo com a posição e o tamanho da sua fada
	*/

  drawSprites();
}

function keyPressed() {
  //**lembrar que dentro do function keyPressed() usamos keyCode ====


  //se a seta para baixo for apertada, estrela deixa de ser estática

  //se a seta para a direita for apertada, o x da fada aumenta

  //se a seta para a esquerda for apertada, o x da fada diminui
  
}