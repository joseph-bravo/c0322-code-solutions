console.log('Lodash is loaded:', typeof _ !== 'undefined');
//! ------------------------------------------------------------
/*
  ! GAME LOOP

  each player draws a set amount of cards from a deck
  whoever has the highest score wins
  if tied, tied players draw one card until there's a winner
    each player will be put into array based on ranking
    if 2 or more players exist in first index (first place)
      tie breaker occurs within first index
*/
//! ------------------------------------------------------------
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
  ! Shuffle Source Into Target

  * param : array to shuffle to, deck to shuffle from
  * return : n/a
  take deck parameter, pass as argument to _.shuffle [Lodash] method
  return the return of the shuffle method

*/

function shuffleSourceIntoTarget(target, source) {
  var sourceShuffled = _.shuffle(source);
  _.forEach(sourceShuffled, function (sourceValue) {
    target.push(sourceValue);
  });
}

/*
  ! Draw Card function.

  * param : player to draw, count of cards to draw, deck to draw from
  * return : n/a
  for each count in parameter
    check if there are any cards left
      y: splice one card and push to player.hand
      n: reshuffle deck
*/

function drawCard(player, drawCount, sourceDeck) {
  // eslint-disable-next-line no-undef
  console.log(player.name, 'is drawing', drawCount, 'from the deck. cards left:', sourceDeck.length);

  for (var draws = 0; draws < drawCount; draws++) {
    if (sourceDeck.length < 1) {
      console.log('Not enough cards. Shuffling deck...');
      shuffleSourceIntoTarget(sourceDeck, initDeck);
    }
    var drawnCard = (sourceDeck.splice(0, 1))[0]; // this line is dumb stupid meanie
    player.hand.push(drawnCard);

    console.log(player.name, 'drew', drawnCard, 'draws left:', drawCount - 1 - draws, 'cards left:', sourceDeck.length);
  }

}

/*

  TODO:

  ! Initialize Players

  * param: number of players to initialize
  * return: array of players
  for each count in number of players
    create new object
      name: 'player' + current count
      hand: []
      score: 0
    push object to array
  return array

*/

function initializePlayers(playerCount) {
  var output = [];

  for (var p = 1; p <= playerCount; p++) {
    var objPlayer = {
      name: 'player' + p,
      hand: [],
      score: 0
    };
    output.push(objPlayer);
  }

  return output;
}

/*

  TODO

  ! Update Hand Score

  * param: player list
  * output: n/a

  for each player in the player list argument
    create new var output = 0
    get hand property of player object
    for each card in hand
      add value of card to output
    assign player.score to ouput

 */

function updateHandScore(playerList) {
  console.log('----- SCORE CHECK -----');
  for (var i = 0; i < playerList.length; i++) {
    var totalScore = 0;
    for (var c = 0; c < playerList[i].hand.length; c++) {
      totalScore += playerList[i].hand[c].value;
    }
    playerList[i].score = totalScore;

    console.log(playerList[i].name + ' has ' + playerList[i].score + ' points!');

  }
  console.log('----------------------');
}

/*

  TODO

  ! Get Rankings

  * param: player list
  * return: none

  playerList = [
    {playerA score: 40},
    {playerB score: 30},
    {playerC score: 40}
  ]

  create output array
  while there's still players in player list
    create empty array tempA
    find the highest player.score value using _.maxBy (Lodash)
      1st argument: playerlist
      2nd argument: shorthand for _.property, getting property 'score' of each index
    for each player in player list
      check if player's score = highest score
        y: splice and push into tempA
        n: pass
    push temp into sorted array

    output = [
      [
       {playerA score: 40},
      {playerC score: 30}
      ]
    ]
    playerList = [
      {playerB score: 40}
    ]

    call function

    output = [
      [
       {playerA score: 40},
      {playerC score: 30}
      ], [
      {playerB score: 40}
      ]
    ]

    playerList = []

  after while loop (no more players in player list) >
  > assign value of output array to player list

*/

function playerRankArrayByScore(playerList) {
  var sortedArray = [];
  while (playerList.length > 0) {
    var tempArray = [];
    var highestScore = _.maxBy(playerList, 'score');
    for (var i = 0; i < playerList.length; i++) {
      if (playerList[i].score === highestScore.score) {
        var playerWithHighScore = playerList.splice(i, 1)[0]; // this too
        tempArray.push(playerWithHighScore);
      }
    }
    sortedArray.push(tempArray);
  }
  _.forEach(sortedArray, function (value) {
    playerList.push(value);
  });
}

// ! GAME LOOP HERE

function runGame(playerCount, startingHand) {
  var playerList = initializePlayers(playerCount);
  var gameDeck = [];
  shuffleSourceIntoTarget(gameDeck, initDeck);

  _.forEach(playerList, function (player) {
    drawCard(player, startingHand, gameDeck);
  });
  updateHandScore(playerList);
  playerRankArrayByScore(playerList);

  if (playerList[0].length > 1) {
    console.log('=== TIE!!! First place holders are:', playerList[0], '===');
  } else {
    console.log('=== Winner is ' + playerList[0][0].name + '! ===');
  }
  console.log('players in array based on ranking:', playerList);
  console.log('flattened rankings array:', playerList.flat());
}

// ! initial loop...

runGame(4, 5);
