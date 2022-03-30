console.log('Lodash is loaded:', typeof _ !== 'undefined');

var ranks = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
var suits = ['club', 'diamond', 'heart', 'spade'];

var initDeck = [];
_.forEach(suits, function (suitArg) {
  _.forEach(ranks, function (rankArg) {
    initDeck.push({ rank: rankArg, suit: suitArg });
  });
});

function initializePlayers(numberOfPlayers) {

}
