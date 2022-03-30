console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
  create initial deck
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
new function: drawCards (parameters: player to draw, cards to draw, deck to draw from)
  splice method to remove from given index
    start: 0
    end: cardCount
  add return of splice to player's hand property

new function: shuffleDeck (parameter: deck to shuffle)
  _.shuffle lodash method, pass arg deck, assign return to deck to shuffle

new function: initialize players (parameter: number of players)
  array to return
  for each count in number of players
    create new object
      name: 'player' + current count
      hand: []
      score: 0
    push object to array

new function: check hand score (parameter: player)
  number for output
  for each item in player's hand
    add value of card to output
  player.score = output

new function: compare score function (playerlist, potential array)
  for each player in array of players
    for each potential in highest players
      check if player.score > potential
        y: remove potential and push player to potential
        n: pass
        else if player.score === potential
          y: push player to potential
          n: pass

new function: startGame (number of players, handsize)
  shuffle initDeck with Lodash method _.shuffle, assign to new var for game's playing deck
  new array players = return of initialize players (number of players)

  gameDeck
  gamePlayers

  for each player in array of players
    drawCards(), provide current player, handsize, gameDeck
    checkHandScore(), player

  highest players = [x]

  compare score function()

  while highest players.length > 1
    for each highestplayer
      drawCard function, pass highest player, 1, gamedeck
      checkhandscore(), highest player
      compare score function
  after while loop (highet player is only 1), log the winner

*/
