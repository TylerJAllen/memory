var randomizeCards = require('./../js/scripts.js').memoryModule;


$(function() { console.log('test');
  var randomizedArray = randomizeCards();
  for (var i = 0; i < randomizedArray.length; i++) {
    var arrayPosition = 0;
    var winArray = [];
    $(".cardContainer").append('<div class="card"><div class="cardBack"><img src="image/sonic.png"></div>' + randomizedArray[i] + '</div></div>');
  };
  $(".card").click(function() {
    $(this).children(".cardFront").toggle();
    $(this).children(".cardBack").toggle();
    var cardValue = $(this).children(".cardFront").children('span').text();
    console.log(cardValue);
    winArray.push(cardValue);
    if(winArray.length % 2 === 0) {
      if (winArray[0] !== winArray[1]) {
        $(".cardFront").hide();
        $(".cardBack").show();
      } else {
        winArray.slice(0, 1);
      }
  }
  });
});
