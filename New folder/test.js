function reportAnswer(text, userAnswer, correctAnswer) {
   

    if(userAnswer == correctAnswer){
        return true;
    } else { 
        return false;
       }       
}

let score1 = reportAnswer("Questions ..?", "A", "A");
let score2 = reportAnswer("Questions ..?", "A", "B");
let score3 = reportAnswer("Questions ..?", "A", "C");

console.log(score1, score2, score3);