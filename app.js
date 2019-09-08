const totalFlips = document.getElementById("total-flips");
const headsResults = document.getElementById("heads-results");
const tailsResults = document.getElementById("tails-results");
const doFlips = document.getElementById("do-flips");
coinFlipResults = [];

function coinFlip() {
  var flipResult
  var flip = Math.floor(Math.random() * 2)
  if ( flip == 1) {
    flipResult = "heads";
  } else {
    flipResult = "tails";
  }

  coinFlipResults.push(flipResult);
};

function checkHeadsTails(array) {
  var headsCount = 0;
  var tailsCount = 0;
  for (var i = 0; i < array.length; i++) {
    if ( array[i] === "heads" ) {
      headsCount++
    }
  }
  for (var i = 0; i < array.length; i++) {
    if ( array[i] === "tails" ) {
      tailsCount++
    }
  }
  headsResults.innerHTML = headsCount;
  tailsResults.innerHTML = tailsCount;

  coinFlipResults.length = 0;
  console.log(headsCount + " number of heads");
  console.log(tailsCount + " number of heads");
}

function multipleFlips(flips) {
  for ( i = 0; i < flips; i++) {
    coinFlip()
  }
  totalFlips.innerHTML = flips;
  checkHeadsTails(coinFlipResults, "heads");
  return coinFlipResults;
}

