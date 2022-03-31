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
[x]new function: drawCards (parameters: player to draw, cards to draw, deck to draw from)
  splice method to remove from given index
    start: 0
    end: cardCount
  for each card in return array, push into player's hand property array

[x]new function: shuffleDeck (parameter: deck to shuffle)
  _.shuffle lodash method, pass arg deck, return the return

[X]new function: initialize players (parameter: number of players)
  array to return
  for each count in number of players
    create new object
      name: 'player' + current count
      hand: []
      score: 0
    push object to array
  return array

[x]new function: update hand score (parameter: player)
  number for output
  for each item in player's hand
    add value of card to output
  player.score = output

[x] new function: compare score (playerlist)
  _.orderBy Lodash function, sort by score value of player in descending order

[x] new function: check for ties (playerlist sorted)
  highest = player1.score
  var tieCount
  for each player in sorted player list (in order)
    use _.takeWhile player.score = highest, assign to tiecount
  return length of tiecount

[]new function: startGame (number of players, handsize)
  shuffle initDeck with Lodash method _.shuffle, assign to new var for game's playing deck
  new array players = return of initialize players (number of players)

  gameDeck
  gamePlayers

  for each player in array of players
    drawCards(), provide current player, handsize, gameDeck

  compareScore(playerList) to sort descending player score

  get return of checkForTies(playerList) which is already sorted = tiedCount
    if tiedCount > 1
      var tieBreakerPlayers array, slice to count of tiedCount
    while tieBreakerPlayers array.length > 1 && gamedeck > 0
      for each player in tiebreakerplayers array
        draw() 1 card from gamedeck
        compare scores() of tiebreakerplayers, return to tiedCount
        tieBreakerPlayers array slice to count of tiedCount
*/

function initializePlayers(count) {
  var output = [];
  for (var i = 1; i <= count; i++) {
    var player = {
      name: 'player' + i.toString(),
      hand: [],
      score: 0
    };
    output.push(player);
  }
  console.log('initialized ' + count.toString() + ' players...');
  return output;
}

function drawCards(player, count, deck) {
  console.log('----- CARD DRAW -----');
  var cards = deck.splice(0, count);
  _.forEach(cards, function (value, index) {
    player.hand.push(cards[index]);
  });
  console.log(player.name + ' draws ' + cards.length + ' cards from the deck!');
  updateHandScore(player);
}

function updateHandScore(player) {
  var output = 0;
  _.forEach(player.hand, function (card) {
    output += card.value;
  });
  player.score = output;
  console.log(player.name + '\'s score is ' + player.score);
}

function compareScores(players) {
  console.log('----- SORTING -----');
  var sorted = _.orderBy(players, ['score'], ['desc']);
  console.log(sorted);
  return sorted;
}

function shuffleDeck(deck) {
  return _.shuffle(deck);
}

function checkForTies(players) {
  var highest = players[0].score;
  var tieCount = 0;
  for (var i = 0; i < players.length; i++) {
    if (players[i].score === highest) {
      tieCount++;
    }
  }
  console.log('Potential Winners:', tieCount);
  return tieCount;
}

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

function runGame(playerCount, handSize) {
  console.log('starting game!!!');

  var playerList = initializePlayers(playerCount);
  var gameDeck = shuffleDeck(initDeck);

  console.log('player list:', playerList);
  console.log('game deck:', gameDeck);

  _.forEach(playerList, function (player) {
    drawCards(player, handSize, gameDeck);
  });

  playerList = compareScores(playerList);

  // tie breaker checking
  var tiedCount = checkForTies(playerList);
  var tieBreakerPlayers = playerList.slice(0, tiedCount);
  console.log('tie breakers', tieBreakerPlayers);
  if (tiedCount > 1) {
    console.log('----- TIE -----');
    while (tiedCount > 1 && gameDeck.length > tiedCount) {
      if (gameDeck.length > 0) {
        _.forEach(tieBreakerPlayers, function (player) {
          console.log('tied!', player);
          drawCards(player, 1, gameDeck);
        });
        compareScores(tieBreakerPlayers);
        tiedCount = checkForTies(tieBreakerPlayers);
      } else {
        console.log('we\'re out of cards!');
      }
    }
  }
  var winner = tieBreakerPlayers[0];
  console.log('the winner is:', winner.name);

}

runGame(4, 5);
