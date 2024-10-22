// TODO: load text
//       count words

//let mString = ""; //indicates that this variable will eventually hold a string

let mStrings =[];

function preload() {
  mString = loadStrings("../assets/article.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  let mString = mStrings[0]; //grabs that one member and puts into a varaible
  //print(mString, mString.length);

  let mWords = mString.toLowerCase().split(" "); //it creates a list of words in lowercase
  //print(mWords, mWords.length);

  let wordCounts = {}; //this is a dictionary

  for (let idx = 0; idx < mWords.length; idx++) { //arrange everything alphabetically and count the number of times each word is mentioned
    let mWord = mWords[idx].replace(".", "").replace(",", "");

    if (mWord in wordCounts) { //counter for the number of words the code spots
      wordCounts[mWord] = wordCounts[mWord] + 1;
    } else {
      wordCounts[mWord] = 1;
    }

    }

    print(wordCounts);
  }


function draw() {}
