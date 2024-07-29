let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg  =document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame=() =>{
    console.log("game was draw.");
    msg.innerText="Game Was Draw!";
    msg.style.backgroundColor=" #081b31";

}

const showWinner=(userWin,userchoice,compchoice) => {
    if (userWin){
        console.log("you Win");
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
    }else{
        console.log("you lose");
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText="you lose!";
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("userchoice:",userchoice);
    //genrete comp choice
    const compchoice=gencompchoice();
    console.log(compchoice);
    
    if(userchoice === compchoice){
        //draw game
            drawgame();
        }else{
            let userWin=true;
            if (userchoice=== "rock") {
                //paper,scissor
                userWin=compchoice==="paper" ? false:true;
            }else if(userchoice=== "paper"){
                //rock,scissor
                userWin=compchoice==="scissor"? false:true;
            }else{
                //rock,paper
                userWin=compchoice==="rock"? false:true;
            }
            showWinner(userWin,userchoice,compchoice);

            }
}



choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    })
});