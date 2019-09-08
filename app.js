const totalFlips = document.getElementById("total-flips");
const headsResults = document.getElementById("heads-results");
const tailsResults = document.getElementById("tails-results");
const previousTotalFlips = document.getElementById("previous-flips");
const previousHeadsResults = document.getElementById("previous-heads-results");
const previousTailsResults = document.getElementById("previous-tails-results");
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

function checkHeadsTails(array, headsElem, tailsElem) {
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

  previousCoinFlipResults = coinFlipResults.slice(0);
  coinFlipResults.length = 0;

  headsElem.innerHTML = headsCount;
  tailsElem.innerHTML = tailsCount;
}

function multipleFlips(flips) {
  for ( i = 0; i < flips; i++) {
    coinFlip()
  }
  totalFlips.innerHTML = flips;
  previousTotalFlips.innerHTML = flips;
  checkHeadsTails(coinFlipResults, headsResults, tailsResults);
  checkHeadsTails(previousCoinFlipResults, previousHeadsResults, previousTailsResults);
  return coinFlipResults;
}

