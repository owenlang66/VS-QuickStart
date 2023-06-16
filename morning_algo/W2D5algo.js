


function d6(min, max) {
    var roll = (Math.random()*(max - min + 1)+min); 
    return Math.floor(roll);
}

var playerRoll = d6(1,6);
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle (min,max) {
    var roll = (Math.random()*(max - min + 1)+min); 
    return Math.floor(roll)

}
var answer = oracle(0,19);
console.log(lifesAnswers[answer])
