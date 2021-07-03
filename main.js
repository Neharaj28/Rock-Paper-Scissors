let pscore=cscore=0;
function playRound(playerSelection, computerSelection) {
    // your code here!
    
    
        if(playerSelection==computerSelection){
            return "Its a TIE!!";
        }else if((playerSelection=="paper" && computerSelection=="scissors")||(playerSelection=="rock" && computerSelection=="paper")||(playerSelection=="scissors"&&computerSelection=="rock")){
            cscore++;
        }else if((playerSelection=="scissors" && computerSelection=="paper")||(playerSelection=="paper"&& computerSelection=="rock")||(playerSelection=="rock"&&computerSelection=="scissors")){
            pscore++;
        }
        if(cscore > pscore){
            return "YOU LOSE!!"
        }else{
            return "YOU WIN!!!"
        }
    
  }

  function computerPlay(){
      let arr= ["rock", "paper", "scissors"];
      let res= arr[Math.floor(Math.random()*arr.length)];
      console.log(res);
      return res;
  }
  for(let i=0;i<5;i++){
  const playerSelection = prompt("Enter your choice \nRock \nPaper \nScissors")
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  }