let song;

let a = 0; 
let c;

function preload (){
  song = loadSound('sound/geigerSound.mp3');
}

function setup() {
  song.play();
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  background('#070719');
  //c=100*0.551915024494;
 
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

  
  //translate (100 * factor, 100*factor, 100*factor)
  rotateX (-frameCount/100 * factor*1)
  //rotateY (frameCount/300 * factor*10)
  rotateZ (-frameCount/200 * factor*10)



  beginShape();
  vertex(-windowWidth/2, -windowHeight/2, 0)
  bezierVertex(300, 300, 300, -300, -300, -300, 300, windowWidth/4, 0)
  vertex(300,windowWidth/4, 0)
  bezierVertex(-100, -100, -100, 500, 500, 100, 700, -400, -300)
 //bezierVertex(100, -300, 100, 100, windowWidth/4, 0);
  //bezierVertex(100,-100,windowWidth/4,-400,0,-windowHeight);
  //bezierVertex (100,-100,100, -300,wind, 0)
  endShape();

  
}


  a += 0.01


  

function mousePressed() {
  clear();
  background('#070719');

 
}