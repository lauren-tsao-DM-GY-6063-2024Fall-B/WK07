// TODO:
//   load image
//   pixel list
//   channels


//removing certain colors to reveal the hidden message
let mImg; //mImg = my image

function preload() {
  mImg = loadImage("../assets/secret_01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  image(mImg, 0, 0);

  mImg.loadPixels();

  //for loop below
  for (let idx = 0; idx < mImg.pixels.length; idx += 4) { //accessing the pixel array, starting with red
    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let alphaVal = mImg.pixels[idx + 3];

// mImg.pixels[idx + 1] = 0 //remove the green
// mImg.pixels[idx + 2] = 0 //remove the blue

mImg.pixels[idx + 0] = 0 //remove the red
mImg.pixels[idx + 2] = 0 //remove the blue

  }

  mImg.updatePixels();

  image(mImg, 0, 0);
}

function draw() {}
