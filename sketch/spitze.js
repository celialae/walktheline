let song;
let a = 0


function preload (){
    song = loadSound('sound/vinylSound.wav');
  }

function setup() {
    song.play();
    createCanvas(windowWidth, windowHeight, WEBGL);
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


    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(255, 0)
    factor = sin(a)

    //rotateX (-frameCount/100 + factor)
    rotateY(frameCount / 100 + factor)
    rotateZ(frameCount / 100 + factor)




    stroke(r, g, b)
    line(-100, 0, 100, 100, 0, 300)

    stroke(g, b, r)
    line(100, 0, 300, 300, -100, 0)

    stroke(b, g, r)
    line(0, windowWidth, 0, 100, 100, 0)

    stroke(b,b,b)
    box(200, 200, -200, 100, 100, 400)

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