// TODO:
//   look at dimensions
//   resize
//   filter

let mImg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  print(mImg.width, mImg.height);

  image(mImg, 0, 0);

  mImg.loadPixels();
  // TODO: for loop
  mImg.updatePixels();

  image(mImg, 0, 0);

}

function draw() {}
