# <p align="center"> BlackJack</p>
<p align="center"><a href="https://blackjackgame2021.netlify.app">Live Demo</a></p>


<p align ="center" >
<img width="750" alt="landing page" src="/images/landingPage.png">
<img width="750" alt="game play" src="/images/blackjack.png">
</p>

Welcome to Blackjack!  This is a game where the player attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21. An ace is worth 1 or 11. Face cards are 10 and any other card is its value. When you hit the deal button you as the player will get two cards and the dealer also. If your score is blow 21 and you think you can get more cards without going over press the Hit button. You will receive one more card. If you are happy with your card then hit stands. The dealer will go and you either win or lose. Good Luck!


<p align="center"> Languages Used and Technology 💻</p><hr>

<hr>
<br>
 <p align="center"> 
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
</p>
<br>

 <p align="center">Code Snipets</p><hr>

 <p align="center">This is the a snipet of the code used check if the dealer has busted or who has the higer hand at the end of the game.

 ```jsx
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

 ```

## <p align="center"> MVP</p>
<p aling="center">
-Your game has to be 2D. Isometric view is OK as long as there are only 2 dimensions that your character can move in.
-Your game must have a clear win condition. For example, in some games, beating the boss monster.
-Your game must have a clear lose condition. For example, in some games, losing all your lives.
-Your game's frontend must be built in JavaScript or Typescript.
-You can only use packages that you can download off NPM, and you cannot use professional game engines like Unreal, Unity or Godot. (If in doubt, ask)
-Your application must have a clear landing page. See the Hiring Hackathon Guide for more info.
</p>

## <p align="center"> Stretch Goals (Future)</p>
- Be able to add more players
- Have the cards move in a way that it looks like they are atucally being dealt.

## <p align="center"> Developer team</p>


<p align="center">LaQuinta-(https://github.com/willarmy20)</p>



