(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":1}]},{},[2]);
