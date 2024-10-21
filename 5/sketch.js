// TODO: filter or sort array of colors

let mImg;
let mColors = [];

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mImg.resize(mImg.width / 2, 0);
  print(mImg.width, mImg.height);

  image(mImg, 0, 0);

  mImg.loadPixels();
  // TODO: for loop
  // TODO: sort pixels by red value
  // TODO: draw pixels at x,y locations

}

function draw() {}
