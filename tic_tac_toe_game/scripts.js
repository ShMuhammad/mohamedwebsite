const buttonsList = document.querySelectorAll("input[type=button]");
let isItX = true;
let firstPlayer = "xChoice";
let secondPlayer = "oChoice";
let xPlayerScore = 0;
let oPlayerScore = 0;
let playerXScore = document.getElementById("playerXScore");
let playerOScore = document.getElementById("playerOScore");
let resultText = document.getElementById("resultText");


function disableButtons(){
  for(button of buttonsList){
    button.disabled = true;
  }
}

function playAgain(){
  for(button of buttonsList){
    button.className = "";
    resultText.innerHTML = "PLAY";
    button.disabled = false;
  }
}

function finishTheGame(){
  if (xPlayerScore > oPlayerScore) {
    confirm("X Player Won!");
  } else if(xPlayerScore < oPlayerScore) {
    confirm("O Player Won!")
  }else{
    confirm("DRAW!");
  }
  playAgain();
  xPlayerScore = 0;
  oPlayerScore = 0;
  playerXScore.innerHTML = xPlayerScore;
  playerOScore.innerHTML = oPlayerScore;
}

for(button of buttonsList){
  button.addEventListener('click', (e) => {    
      let clickedButton = e.target;
      
      if(isItX  == true){
        clickedButton.className = firstPlayer;
        clickedButton.disabled = true;
        isItX = false;
      }else{
        clickedButton.className = secondPlayer;
        clickedButton.disabled = true;
        isItX = true;
      }  
      
      if(buttonsList[0].className == firstPlayer  && buttonsList[1].className == firstPlayer  && buttonsList[2].className == firstPlayer ){
        xPlayerScore += 1;
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
        resultText.innerHTML = "X's Win";
      }else if(buttonsList[3].className == firstPlayer && buttonsList[4].className == firstPlayer && buttonsList[5].className == firstPlayer ){
        xPlayerScore += 1;
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
        resultText.innerHTML = "X's Win";
      }else if(buttonsList[6].className == firstPlayer && buttonsList[7].className == firstPlayer && buttonsList[8].className == firstPlayer ){
        xPlayerScore += 1;
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
        resultText.innerHTML = "X's Win";
      }else if(buttonsList[0].className == firstPlayer && buttonsList[3].className == firstPlayer && buttonsList[6].className == firstPlayer ){
        xPlayerScore += 1;
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
        resultText.innerHTML = "X's Win";
      }else if(buttonsList[1].className == firstPlayer && buttonsList[4].className == firstPlayer && buttonsList[7].className == firstPlayer ){
        xPlayerScore += 1;
        resultText.innerHTML = "X's Win";
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
      }else if(buttonsList[2].className == firstPlayer && buttonsList[5].className == firstPlayer && buttonsList[8].className == firstPlayer ){
        xPlayerScore += 1;
        resultText.innerHTML = "X's Win";
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
      }else if(buttonsList[0].className == firstPlayer && buttonsList[4].className == firstPlayer && buttonsList[8].className == firstPlayer ){
        xPlayerScore += 1;
        disableButtons();
        resultText.innerHTML = "X's Win";
        playerXScore.innerHTML = xPlayerScore;
      }else if(buttonsList[2].className == firstPlayer && buttonsList[4].className == firstPlayer && buttonsList[6].className == firstPlayer ){
        xPlayerScore += 1;
        disableButtons();
        playerXScore.innerHTML = xPlayerScore;
        resultText.innerHTML = "X's Win";
      }
    
      if(buttonsList[0].className == secondPlayer && buttonsList[1].className == secondPlayer && buttonsList[2].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }else if(buttonsList[3].className == secondPlayer && buttonsList[4].className == secondPlayer && buttonsList[5].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }else if(buttonsList[6].className == secondPlayer && buttonsList[7].className == secondPlayer && buttonsList[8].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }else if(buttonsList[0].className == secondPlayer && buttonsList[3].className == secondPlayer && buttonsList[6].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
      }else if(buttonsList[1].className == secondPlayer && buttonsList[4].className == secondPlayer && buttonsList[7].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }else if(buttonsList[2].className == secondPlayer && buttonsList[5].className == secondPlayer && buttonsList[8].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }else if(buttonsList[0].className == secondPlayer && buttonsList[4].className == secondPlayer && buttonsList[8].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }else if(buttonsList[2].className == secondPlayer && buttonsList[4].className == secondPlayer && buttonsList[6].className == secondPlayer){
        oPlayerScore += 1;
        disableButtons();
        playerOScore.innerHTML = oPlayerScore;
        resultText.innerHTML = "O's Win";
      }
  })    
}
