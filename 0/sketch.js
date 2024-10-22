// TODO: strings and text
//       iterate letters
//       iterate words


let mString = "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

textSize(16);

let mWords = mString.split("") // specifying to split where the spaces are
print(mWords);

  print(mString, mString.length, mString.toLowerCase()); //.length is the length of the text, in this case, its 89 letters

  textAlign(LEFT, TOP) //specify the location of the text box
  text(mString, 100, 100);

  for (let idx = 0; idx < mString.length; idx++) {
    let mChar = mString[idx];
    // let x = random(width);
    // let y = random(height);
    let pos = map(idx, 0, mString.length, 0, height);

    if (mChar == "a") {
      textSize(64);
    } else {
      textSize (16)
    }
    text(mChar, pos, pos);
    }
  }

function draw() {}
