let particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  
  frameRate(20)
  

}

function draw() {
  //background(100);
  

  //rotate (10)
  let p = new Particle();
  // console.log("Draw: Add new particle")
  particles.push(p);
  for (let i = 0; i < particles.length; i ++) {
    // console.log(particles[i])
    particles [i].update();
    particles[i].show();
  }

}


class Particle {
  constructor(){
    this.x = random(0, windowWidth);
    this.y = random (0,windowHeight);
    this.vx = random(-10, 1);
    this.vy = random (10, -1);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }



  show(){
    stroke(random (0, 255), random(255,0), random (0, 255));
    strokeWeight (0.01)
    noFill ();
    line(this.x, this.y, this.x + random(10,100), this.y + random (10,100), random (1, 200))
    line(this.x, this.y, this.x + random(100,300), this.y + random (100,300), random (1, 200))
  }
}