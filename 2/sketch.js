// TODO:
//   load image
//   pixel list
//   channels

let mImg;

function preload() {
  mImg = loadImage("../assets/secret_01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  image(mImg, 0, 0);

  mImg.loadPixels();
  // TODO: for loop here
  mImg.updatePixels();

  image(mImg, 0, 0);
}

function draw() {}
