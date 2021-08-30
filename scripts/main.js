window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

//grab page elements and create variables
let dealerHand = document.getElementById("dealer-hand");
let playerHand = document.getElementById("player-hand");
let playerH = [];
let dealerH = [];
let buttons = document.querySelector(".buttons");

//create decks, suffle and push into megaDeck
let deck1 = buildDeck();
shuffle(deck1);
let deck2 = buildDeck();
shuffle(deck2);
let deck3 = buildDeck();
shuffle(deck3);
let deck4 = buildDeck();
shuffle(deck4);
let megaDeck = deck1.concat(deck2,deck3,deck4);

//create event listeners
buttons.addEventListener("click", (e)=>{
  if(e.target.innerText === "Deal"){
    deal(2,megaDeck);
    let dealerPoints = totalPoints(basePoints,dealerH);
    let playerPoints = totalPoints(basePoints,playerH);
    displayPoints(playerPoints);
    playerBust(playerPoints,dealerPoints);
  }
  else if (e.target.innerText === "Hit") {
    hit(megaDeck);
    let dealerPoints = totalPoints(basePoints,dealerH);
    let playerPoints = totalPoints(basePoints,playerH);
    displayPoints(playerPoints);
    playerBust(playerPoints,dealerPoints);
  }
  else if (e.target.innerText === "Stand"){
    let dealerPoints = totalPoints(basePoints,dealerH);
    let playerPoints = totalPoints(basePoints,playerH);
    let y = stand(megaDeck,dealerPoints);
    displayPoints(playerPoints,y);
    isWinner(playerPoints,y);
}
else if (e.target.innerText === "Replay"){
  location.reload();
}
})

//create functions

//build deck of cards
function buildDeck(){
  let deck = [];
  let rank = [2,3,4,5,6,7,8,9,10,"ace","jack","king","queen"];
  let suit = ["clubs","diamonds","hearts","spades"];

  for(r = 0;r < rank.length; r++){
      for (s = 0; s < suit.length;s++){
        let card = {rank: rank[r], suit: suit[s], img:`images/${rank[r]}_of_${suit[s]}.png`};
        if (card.rank >= 2 && card.rank <= 10){
          card.points = card.rank;
        } 
        else if (card.rank === "jack"|| card.rank === "king"|| card.rank === "queen"){
          card.points = 10;
        } else{
          card.points = 1;
          card.altPoints = 11;
        }
        deck.push(card);
      }
  }
  return deck;
}
//shuffles deck, returns suffled deck
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

//deals the cards,renders images
function deal(num,deckName){
  if (dealerH.length < num){
    for(let i = 0; i < num; i++){
    //player
    let card = deckName.pop();
    playerH.push(card);
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",card.img);
    playerHand.append(cardImg);
    //dealer
    let card2 = deckName.pop();
    dealerH.push(card2);
    let cardImg2 = document.createElement("img");
    if(dealerH.length === 1){
      cardImg2.setAttribute("src","images/playersCardBack.png")
      cardImg2.setAttribute("id" ,"firstDealerCard")
    } else {
      cardImg2.setAttribute("src",card2.img);
    }
    dealerHand.append(cardImg2);
    }
  }

  
}

//adds card to players hand calls totalPoints
function hit(deckName){
  if(dealerH.length > 0 ){
    let card = deckName.pop();
    playerH.push(card);
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",card.img);
    playerHand.append(cardImg);
    totalPoints(basePoints,playerH);
  } else {
    //alert("You must deal first.");
    Alert.render("You must deal first.");
  }
}

//"flips" dealers first card, adds cards to dealers hand up to 17 points, calls total points, returns updated total points
function stand(deckName,dealerPoints){
  if(dealerH.length > 0){
    let y = dealerPoints;
    let firstCard = document.querySelector("#firstDealerCard");
    firstCard.setAttribute("src",dealerH[0].img);
    while(y < 17){
      let card2 = deckName.pop();
      dealerH.push(card2);
      let cardImg2 = document.createElement("img");
      cardImg2.setAttribute("src",card2.img);
      dealerHand.append(cardImg2);
      y = totalPoints(basePoints,dealerH);
    }
    return y;
  } else{
    Alert.render("You must deal first.");
  }
}

//calculates non ace points. callback for totalPoints, returns points
let basePoints = function basePoints(hand){
  let points = hand.reduce((accumlator,current)=>{
    if (current.rank != "ace"){
        accumlator += current.points;
        return accumlator;
    }else{
        accumlator += 0;
        return accumlator;
    }
  },0);
  return points;
}

//takes basePoints as an argument and calculates total points (with aces),returns points with aces added high or low
let totalPoints = function totalPoints(baseFn,hand){
  let points = baseFn(hand);
  if(hand.some(card => card.rank === "ace") && points <=10){
    points += 11;
    //console.log("ace = 11",points)
    return points;
  
  } else if(hand.some(card => card.rank === "ace") && points > 10){
    points += 1;
    //console.log("ace = 1",points)
    return points;
  } else{
    //console.log("there is no ace",points)
    return points;
  }
}

//displays points in #dealer-points 
function displayPoints(playerPoints, dealerPoints = ""){
  let dealerPointsDisp = document.getElementById("dealer-points");
  dealerPointsDisp.innerText = dealerPoints;
  //console.log(dealerPointsDisp)
  let playerPointsDisp = document.getElementById("player-points");
  playerPointsDisp.innerText = playerPoints;
  //console.log(playerPointsDisp)
}

// this group checks to see if anyone has won the game, displays winner.

//disables play buttons after a winner has been decided
function disableB(){
  document.getElementById("deal-button").disabled = true;
  document.getElementById("hit-button").disabled = true;
  document.getElementById("stand-button").disabled = true;
}

//populates #messages with results of the game
let message = function messageTag(messageText){
  let messageDiv = document.getElementById("messages");
  messageDiv.innerText = messageText;
}

//checks to see if the player has busted after each hit, calls message if needed
function playerBust(playerPoints,dealerPoints){
  if(playerPoints>21){
    message("Player Bust. Dealer Wins.");
  let firstCard = document.querySelector("#firstDealerCard");
  firstCard.setAttribute("src",dealerH[0].img);
  let dealerPointsDisp = document.getElementById("dealer-points");
  dealerPointsDisp.innerText = dealerPoints;
  disableB();
  }
  else if(playerPoints === 21){
    message("Exactly 21! You Win!");
  let firstCard = document.querySelector("#firstDealerCard");
  firstCard.setAttribute("src",dealerH[0].img);
  let dealerPointsDisp = document.getElementById("dealer-points");
  dealerPointsDisp.innerText = dealerPoints;
  disableB();
  }

}

//checks to see if dealer has busted or who has the higher hand at end of game, calls message
function isWinner(playerPoints,dealerPoints){
  
  if (dealerPoints>21){
    message("Dealer Bust. Player Wins!");
    disableB();
  }
  else if (playerPoints > dealerPoints){
    message("Player Wins!");
    disableB();
  }
  else if (dealerPoints > playerPoints){
    message("Dealer Wins!");
    disableB();
  } else if (dealerPoints === playerPoints && dealerPoints > 0){ 
    message("Its a Tie");
    disableB();
  }

}

//creates custom dialog box
  class CustomAlert {
    constructor(){
      this.render = function (dialog) {
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let dialogOverlay = document.getElementById("dialogOverlay");
        let dialogBox = document.getElementById("dialogBox");
  
        dialogOverlay.style.display = "block";
        dialogOverlay.style.height = winH+"px";
        dialogBox.style.display = "block";
        dialogBox.style.left = "25%";
        dialogBox.style.top = "30%"
  
        document.getElementById("dialogHead").innerHTML = "";
        document.getElementById("dialogBody").innerHTML = dialog;

        let dialogButton =  document.getElementById("dialogFoot");
        dialogButton.innerHTML = "<button>Close</button>";
        dialogButton.addEventListener("click",()=>{
          document.getElementById("dialogBox").style.display = "none";
          document.getElementById("dialogOverlay").style.display = "none";

        } )
      };

    }
}
let Alert = new CustomAlert();



// stays at eop
})

