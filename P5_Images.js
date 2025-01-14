let robot = [];

function preload() {
  for (var i = 0; i < 48; i++) {
    robot[i] = loadImage('data/robot/robot_' + nf(i, 4) + '.png');
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(30);
}


function draw() {
 background(31);
 //clear();
  image(robot[frameCount%48], width/2, height/2, height, height);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
