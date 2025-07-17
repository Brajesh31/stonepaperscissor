let stone = document.querySelector("#stone")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let output = document.querySelector("#display")
let outputBox = document.querySelector("#result")
let userInput;
let compInput;
let result;

stone.addEventListener("click", function(){
    gameStarted("stone");
})

paper.addEventListener("click", function(){
    gameStarted("paper");
})

scissor.addEventListener("click", function(){
    gameStarted("scissor");
})

const gameStarted = (val) =>{
    userInput = val;
    compInput = computerChoice();
    result = fetchResult(userInput, compInput)
    console.log(result)
    output.innerHTML = result;
    outputBox.setAttribute("id", "result2")
}

const computerChoice = ()=>{
    let number = Math.floor(Math.random()*3)
    number = parseInt(number);
    if(number === 0)
    {
        return "stone";
    }
    else if(number === 1)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}

const fetchResult = (userInput, compInput) => {
    if(userInput === "stone" && compInput === "stone")
    {
        return "Draw, both of you chose Stone";
    }
    else if(userInput === "stone" && compInput === "paper")
    {
        let prevCompResult = document.querySelector("#compScore").innerText
        prevCompResult = parseInt(prevCompResult);
        console.log(prevCompResult)
        prevCompResult+= 1;
        document.querySelector("#compScore").innerText = prevCompResult;
        return "You lose, you are beaten by Paper";
    }
    if(userInput === "stone" && compInput === "scissor")
    {
        let prevUserResult = document.querySelector("#yourScore").innerText
        prevUserResult = parseInt(prevUserResult);
        console.log(prevUserResult)
        prevUserResult += 1;
        document.querySelector("#yourScore").innerText= prevUserResult;
        return "You Won, you beat Scissor";
    }


    if(userInput === "paper" && compInput === "stone")
    {
        let prevUserResult = document.querySelector("#yourScore").innerText
        prevUserResult = parseInt(prevUserResult);
        console.log(prevUserResult)
        prevUserResult += 1;
        document.querySelector("#yourScore").innerText= prevUserResult;
        return "You Won, you beat Stone";
    }
    if(userInput === "paper" && compInput === "paper")
    {
        return "Draw, both of you chose paper";
    }
    if(userInput === "paper" && compInput === "scissor")
    {
        let prevCompResult = document.querySelector("#compScore").innerText
        prevCompResult = parseInt(prevCompResult);
        console.log(prevCompResult)
        prevCompResult+= 1;
        document.querySelector("#compScore").innerText = prevCompResult;
        return "You lose, you are beaten by Scissor";
    }


    if(userInput === "scissor" && compInput === "stone")
    {
        let prevCompResult = document.querySelector("#compScore").innerText
        prevCompResult = parseInt(prevCompResult);
        console.log(prevCompResult)
        prevCompResult+= 1;
        document.querySelector("#compScore").innerText = prevCompResult;
        return "You lose, you are beaten by Stone";
    }
    if(userInput === "scissor" && compInput === "paper")
    {
        let prevUserResult = document.querySelector("#yourScore").innerText
        prevUserResult = parseInt(prevUserResult);
        console.log(prevUserResult)
        prevUserResult += 1;
        document.querySelector("#yourScore").innerText= prevUserResult;
        return "You Won, you beat Paper";
    }
    if(userInput === "scissor" && compInput === "scissor")
    {
        return "Draw, both of you chose Scissor";
    }
}