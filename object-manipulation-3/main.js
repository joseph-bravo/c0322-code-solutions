console.log('Lodash is loaded:', typeof _ !== 'undefined');

var ranks = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
var suits = ['club', 'diamond', 'heart', 'spade'];

var initDeck = [];
_.forEach(suits, function (suitArg) {
  _.forEach(ranks, function (rankArg) {
    initDeck.push({ rank: rankArg, suit: suitArg });
  });
});

function initializeGame(numberOfPlayers, handSize) {
  var gameDeck = _.shuffle(initDeck);
  var players = [];
  for (var i = 1; i <= numberOfPlayers; i++) {
    players.push = {
      name: 'player' + i,
      hand: 5
    };
    console.log('initialized players:', players);
  }
}
function drawCard(count, deck) {
  var output = _.take(deck, count);
  deck = _.drop(deck, count);
  return output;
}
