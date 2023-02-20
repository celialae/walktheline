let font;

function preload() {
  font = loadFont('TTNormsThin.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background ('#070719');
  textFont (font)

}

function draw() {
  
  textSize(50);
  text('The extremities of a surface are lines', windowWidth/2, windowHeight/2);
  fill(255);
  textAlign(CENTER, CENTER);

}