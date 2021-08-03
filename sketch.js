var title,button,input;
var gameState=0


function preload(){
  cake = loadImage("cake 1.png")
  pbm = loadImage("pbm 2.png")
  taco=loadImage("taco 1.png")
  bg1=loadImage("formbg.jpg")
  bg2=loadImage("bg.jpg")
  l1=loadImage("list1.PNG")
  l2=loadImage("list2.PNG")
  l3=loadImage("list3.PNG")
}
function setup(){
  createCanvas(600,600)
  bg=createSprite(300,300,600,600)
  bg.addImage("a",bg1)
  bg.scale=0.5
  title=createElement('h2')
  title.html("COOKING FEVER")
  title.position(180,10)
  input=createInput('Enter Your Name')
  input.position(200,200)
  button=createButton('Start')
  button.position(250,250)
  greet= createElement('h3')
  food1=createSprite(200,200,10,10)
  food1.addImage(cake)
  food1.scale=0.1
  food1.visible=false
  food2=createSprite(200,320,10,10)
  food2.addImage(pbm)
  food2.scale=0.2
  food2.visible=false
  food3=createSprite(200,400,10,10)
  food3.addImage(taco)
  food3.scale=0.5
  food3.visible=false
  list1=createSprite(300,300)
  list1.visible=false
  list2=createSprite(300,300)
  list2.visible=false
  list3=createSprite(300,300)
  list3.visible=false
}

function draw(){
  background("lightblue")
  if(gameState===0){
  button.mousePressed(()=> {
    input.hide()
    button.hide()
    var name = input.value()
    greet.html("Welcome "+name)
    greet.position(200,100)
    food1.visible = true
    food2.visible = true
    food3.visible = true
    gameState=1
  })
}
if(gameState===1){
 
  if(mousePressedOver(food1)){
    list1.visible=true
    list1.addImage(l1)
    playbutton()
    greet.hide()
  }
  if(mousePressedOver(food2)){    
    list2.visible=true
    list2.addImage(l2)
    list2.scale=0.8
    playbutton()
    greet.hide()
  }
  if(mousePressedOver(food3)){
    list3.visible=true
    list3.addImage(l3)
    list3.scale=0.7
    playbutton()
    greet.hide()
  }
}
  if(gameState===2){
    greet.hide()
    startbutton.hide()
    bg.visible=true
    bg.addImage("b",bg2)
    bg.changeImage("b",bg2)
    bg.scale=2
    list1.visible=false
    list2.visible=false
    list3.visible=false
  }
  
  drawSprites();
}
function playbutton(){
  startbutton=createButton("PLAY")
  startbutton.position(450,450)
  startbutton.mousePressed(()=>{
    
    gameState=2
    food1.visible = false
    food2.visible = false
    food3.visible = false
  
  })
}