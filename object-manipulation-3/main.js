console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
  ! create initial deck
    empty array to store objects
    create list of ranks
    create list of suits
    create faceranks for comparison
    create score values for facerank and aces
    for each suit present in list, create cards of all ranks (runs 4 * 13 times)
      object cardBuild to push into array deck later
        take value of rank to string and assign to property
        take current suit and assign to property suit
      for each rank, check if === 'a' (is ace?)
        y: assign acesvalue to property value
        n: check if it's included in faceranks array
          y: assign faceRankValue to property value
          n: assign rank itself to property value
*/

var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
var suits = ['club', 'diamond', 'heart', 'spade'];
var aceCard = 'ace';
var faceRanks = ['jack', 'queen', 'king'];
var faceRankValue = 10;
var acesValue = 11;

var initDeck = [];
_.forEach(suits, function (suitArg) {
  _.forEach(ranks, function (rankArg) {
    var cardBuild = { rank: rankArg.toString(), suit: suitArg };
    if (rankArg === aceCard) {
      cardBuild.value = acesValue;
    } else if (_.includes(faceRanks, rankArg)) {
      cardBuild.value = faceRankValue;
    } else {
      cardBuild.value = rankArg;
    }
    initDeck.push(cardBuild);
  });
});

/*

  TODO: Draw Card function.
  * parameters: player to draw, count of cards to draw, deck to draw from
  for each count in parameter
    check if there are any cards left
      y: splice one card and append to player.hand
      n: reshuffle deck

*/
