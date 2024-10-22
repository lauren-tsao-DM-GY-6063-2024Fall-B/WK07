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
  print(mImg.width, mImg.height); //shows how big the original image is in the debugging console

mImg.resize(width, 0); //resizing the image

  mImg.loadPixels();
  for (let idx = 0; idx < mImg.pixels.length; idx += 20*4) { //every 20 pixels draw a circle thats 20px in diameter
    let redVal = mImg.pixels[idx + 0];
    let greenVal = mImg.pixels[idx + 1];
    let blueVal = mImg.pixels[idx + 2];
    let alphaVal = mImg.pixels[idx + 3];

    noStroke();
    fill(redVal, greenVal, blueVal);

    let pixIdx = idx / 4;
    let y = int(pixIdx / mImg.width);
    let x = pixIdx % mImg.width;

    ellipse(x, y, 20) //draw the image using circles
  }
  mImg.updatePixels();

  // image(mImg, 0, 0);
}
function draw() {

}
