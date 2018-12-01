
var numberOptions = [];
var guessNumber;
var guessCounter = 0;
var wins = 0;
var losses = 0;
var fourimages = [];

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
$('#currentTotal').text(guessCounter);

function generateGuessNumber() {
  guessNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  $("#guess-number").text(guessNumber);
  return guessNumber;
}


var createNumArray = function () {
  for (var i = 0; i <= 3; i++) {
    numberOptions.push(Math.floor(Math.random() * (12 - 1 + 1) + 1));
  }
  return numberOptions;
}

var initGame = function () {
  guessCounter = 0;
  numberOptions = [];
  createNumArray();
  console.log('init num done')
  generateGuessNumber();
  console.log('init guess')
  crystalLoop();
  console.log('init loop done')
  $('#currentTotal').text(guessCounter);
  console.log('init done')
};

var fourimages = ["./assets/images/1.png", "./assets/images/2.png", "./assets/images/3.png", "./assets/images/4.png"]

var crystalLoop = function () {
  $("#crystals").empty();
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", fourimages[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }
}

$(document).on("click", ".crystal-image", function () {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  guessCounter += crystalValue;
  $('#currentTotal').text(guessCounter);

  if (guessCounter === guessNumber) {
    alert("You saved a zoombinie!");
    wins++;
    if (wins === 1) {
      zoom3across();
    }
    console.log('after zoom')
    if (wins === 2) {
      zoom2across();
    }
    if (wins === 3) {
      zoom1across();
      alert("You've Saved All The Zoombinies!");
    }
    console.log('start playing')
    console.log('start text')
    $('#numberWins').text(wins);
    console.log('start init')
    initGame();
  } else if (guessCounter >= guessNumber) {
    alert("You lose!!");
    losses++
    $('#numberLosses').text(losses);
    initGame();
  }
});

$("#instructions").click(function () {
  alert('To play the game, click on any of the four crystals. Each crystal has a hidden value for each round of play. Each time you click on a crystal you current score will change and display. The goal is to get your current score to match the current target total number which is displayed, without going over! Save all three zoombinies to win. Hit "PLAY AGAIN!" to start over.')
});

$("#playagain").click(function () {
  initGame();
});

var zoom1across = function () {
  $(".zoom1").animate({ left: '900px' });
}

var zoom2across = function () {
  $(".zoom2").animate({ left: '1000px' });
}

var zoom3across = function () {
  $(".zoom3").animate({ left: '1100px' });
}

initGame();
