# <p align="center"> BlackJack</p>

<p align ="center" >
<img width="750" alt="Screen Shot 2021-07-27 at 12 06 39 PM" src="/images/weather.png">
</p>

Welcome to Blackjack!  This is a game where the player attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21. An ace is worth 1 or 11. Face cards are 10 and any other card is its value.


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

 <p align="center">This is the a snipet of the code used to call the api to be able to get the data for the weather. </p>

 ```jsx
 const input = document.querySelector('#city');
const button = document.getElementById('submit').addEventListener('click', userInput);

async function userInput(){
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${APIKEY}`;
const weatherData = await fetch (weatherURL);
const weatherJson = await weatherData.json();

 ```


## <p align="center"> Developer team</p>


<p align="center">LaQuinta-(https://github.com/willarmy20)</p>



