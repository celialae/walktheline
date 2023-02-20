let song;

let a = 0; 
let voice;
/*let c;*/

function preload (){
  song = loadSound('sound/deepblueQualle.mp3');
}
function setup() {
  song.play();
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  background('#070719')
  // let voice = new p5.Speech(); 
  // voice.speak ('The extremities of a surface are lines');
  //c=100*0.551915024494;
}



function draw() {
  // orbitControl();
  //background(50);
  blendMode()
  let r = random (0, 255)
  let g = random (0,255)
  let b = random (255, 0)
  factor = sin(a)
  stroke(r,g,b);
  

  strokeWeight(0.01);
  noFill();

  

  rotateX (-frameCount/100 + factor)
  rotateY (frameCount/300 + factor)
  rotateZ (-frameCount/200 + factor)



  beginShape();
  vertex(-300, windowWidth/4);
  bezierVertex(100, -300, 100, 100, windowWidth/4, 0);
  bezierVertex(100,-100,windowWidth/4,-100,0,-300);
  endShape();
}


  a += 0.01


function reset () {
  frameCount = 0
  a = 0
}

function mousePressed() {
  reset ();
  //clear();
  background('#070719');

 
}
