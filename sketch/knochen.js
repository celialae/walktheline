let song;

let a = 0


function preload (){
  song = loadSound('sound/scratchingWood.mp3');
}

function setup() {
  song.play();
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  background('#070719');
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  //background(0);
  blendMode(DIFFERENCE)
  //orbitControl()
  noFill()
  strokeWeight(0.01)

  
  let r = random (0, 255)
  let g = random (0,255)
  let b = random (255, 0)
  factor = sin(a)

  rotateX (-frameCount/100 + factor)
  //rotateY (frameCount/300 + factor)
  rotateZ (-frameCount/200 + factor)


  
 //stroke (r, g, b)
  //line (0,0, 100, 400, 0, 0)

  stroke (g, b, r)
  line (0,0,100, 100, 100, 0)

  stroke(b, g, r)
  line (0,windowWidth,0, 100, 100, 0)

  //stroke(100,100,255)
  /*box(mouseY+100 + factor *100)*/

  a += 0.001

  // andere Möglichkeit. Reset nach 10 sec: 
  /*let counter = frameCount % 6000
  if (counter == 5999) {
    clear()*/
  }
  

function mousePressed() {
  clear();
  background('#070719');
}