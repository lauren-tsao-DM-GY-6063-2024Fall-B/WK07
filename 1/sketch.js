// TODO: load text
//       count words

let mString = "";

function preload() {
  mString = loadStrings("../assets/article.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  print(mString, mString.length);
}

function draw() {}
