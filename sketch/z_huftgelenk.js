let song;

let a = 0; 
let c;

function preload (){
  song = loadSound('sound/geigerSound.wav');
}

function setup() {
  song.play();
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  c=100*0.551915024494;
}
function draw() {
  // orbitControl();
  //background(50);
  let r = random (0, 255)
  let g = random (0,255)
  let b = random (255, 0)
  factor = sin(a)
  stroke(r,g,b);
  

  strokeWeight(0.01);
  noFill();


  

  rotateX (-frameCount/100 + factor)
  // rotateY (frameCount/300 + factor)
  rotateZ (-frameCount/200 + factor)

  beginShape();
  vertex(0, windowWidth/2);
  bezierVertex(c, 100, 100, c, 100, 0);
  bezierVertex(100,-c,c,-100,0,-100);
  endShape();


  // beginShape();
  // vertex(-300, windowWidth);
  // bezierVertex(c, -300, 100, c, 100, 0);
  // bezierVertex(100,-c,c,-100,0,-100);
  // endShape();


  // beginShape();
  // vertex(-300, windowWidth/4);
  // bezierVertex(100, -300, 100, 100, windowWidth/4, 0);
  // bezierVertex(100,-100,windowWidth/4,-100,0,-300);
  // endShape();

  
}


  a += 0.01


  

function mousePressed() {
  clear();
  background(0);
}