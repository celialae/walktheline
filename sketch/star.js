let song;
let a = 0;

function preload (){
  song = loadSound('sound/universeSound.mp3');
}


function setup() {
  song.play();
  createCanvas(windowWidth, windowHeight, WEBGL);
  background('#070719');
 
}




function draw() {
  //background(0);
  //blendMode(ADD)
  //orbitControl()
  noFill()
  strokeWeight(0.001)

  
  let r = random (0, 255)
  let g = random (0,255)
  let b = random (255, 0)
  factor = sin(a)

  rotateX (-frameCount/100 + factor*10)
  rotateY (frameCount/200 + factor*300)
  rotateZ (frameCount/10*factor)
 
  
  stroke (b,r,g)
  cylinder(windowWidth, -factor *200)

  //stroke(100,100,255)
  //box(mouseY+100 + factor *100)
  //plane(mouseY+100 + factor *100)

  a += 0.0001

  // andere Möglichkeit. Reset nach 10 sec: 
  /*let counter = frameCount % 6000
  if (counter == 5999) {
    clear()*/
  }
  

function mousePressed() {
  clear();
  background('#070719');
}