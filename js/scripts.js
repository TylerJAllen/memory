
var imagesArray = ['raccoon.png', 'frog.gif', 'luigi.gif', 'bowser.png', 'toad.jpg'];

var imageOutputArray = [];

function randomizeCards(){
  for (var i = 1; i < 3; i++) {
    var arrayPosition = 0;
    imagesArray.forEach(function(image) {
      imageOutputArray.push('<div class = "cardFront"><span>' + arrayPosition + '</span><img src="image/' + image + '"></div>');
      arrayPosition += 1;
    });
  };
  // console.log(imageOutputArray);
  imageOutputArray.sort(function(a, b){return 0.5 - Math.random()});
  return imageOutputArray;
  // console.log(imageOutputArray);
};


exports.memoryModule = randomizeCards;
