//What is the difference between a parameter and an argument?
// parameters are a part of a function that is a place holder for 
// an argument to fill. The placeholder makes functions more Dynamic. An 
// argument is code that takes up the placeholders and makes functions do
//more things

//Within a function, what is the difference between return and console.log?
// They both log stuff to the console, except
// return is like console.log, but its on hold till its called. 
// console.log runs immediattly when its written. Fun fact if you console.log
// a console.log you will get an extra 'undefined' with your output.

////PALINDROME////

const palindrome = (str) => {
var re = /[^A-Za-z0-9]/g
str = str.toLowerCase().replace(re, '')
var len = str.length
for(var i = 0; i < len/2; i++){
    if (str[i] !== str[len - 1 - i]){
        return false
    }
}
return true
}

console.log(palindrome("racecar"))
console.log(palindrome("overflow"))
//source: freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

//// SUM ARRAY////

const iAmAnArray = [1,1,2,3,4,5,6]

const sumArray = (arg) => {
    let sum = 0
    for (let i = 0; i < arg.length; i++){
        sum += arg[i]
    }
    return sum
}

console.log(sumArray(iAmAnArray)) //22

////PRIME NUMBERS////

const checkPrime = (num) => {
    for(let i = 2; i < num; i++){
    if(num % i === 0) return false
    return num > 1
}
}
console.log(checkPrime(4))
console.log(checkPrime(67))
//source : stackoverflow.com/questions/40200089/number-prime-test-in-javascript

//  const printPrimes = (num) => {
//      for (let i = 2; i <= 100; i++){
//         if ((i % 2 == 0) || (i % 3 == 0)){
//             return i + ""
            
//         }
//      }
//  }
 //??
// console.log(printPrimes())
// ROCK PAPER SCISSORS
const randomMove = () => {
    const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    const randomNum = Math.floor(Math.random() * 5)
    return options[randomNum]
}

//console.log(randomMove())


let theBrain = randomMove()
//console.log(theBrain)

 const RockPaperScissors = (user, computer) => {
     if (computer == "Rock" && user == "Rock"){
         return "Tie"
     } else if (computer == "Rock" && user == "Paper"){
         return "Paper covers Rock, I Win!"
     } else if (computer == "Rock" && user == "Scissors"){
         return "Rock crushes Scissors, I Lose!"
     } else if (computer == "Rock" && user == "Lizard"){
         return "Rock crushes Lizard, I Lose!"
     } else if (computer == "Rock" && user == "Spock"){
         return "Spock vaporizes Rock, I Win!"


     } else if (computer == "Paper" && user == "Paper"){
         return "Tie" 
     } else if (computer == "Paper" && user == "Rock"){
         return "Paper covers Rock, I Lose!"
     } else if (computer == "Paper" && user == "Scissors"){
         return "Scissors cuts Paper, I Win!"
     } else if (computer == "Paper" && user == "Lizard"){
         return "Lizard eats Paper, I Win!"
     } else if (computer == "Paper" && user == "Spock"){
         return "Paper disproves Spock"   


     } else if (computer == "Scissors" && user == "Scissors"){
         return "Tie"
     } else if (computer == "Scissors" && user == "Paper"){
         return "Scissors cuts Paper, I Lose!"
     } else if (computer == "Scissors" && user == "Rock"){
         return "Rock crushes Scissors, I Win!"
     } else if (computer == "Scissors" && user == "Lizard"){
         return "Scissors decapitates Lizard, I Lose!"
     } else if (computer == "Scissors" && user == "Spock"){
         return "Spock smashes Scissors, I Win!"


     } else if (computer == "Lizard" && user == "Lizard"){
         return "Tie"
     } else if (computer == "Lizard" && user == "Rock"){
         return "Rock crushes Lizard, I Win!"
     } else if (computer == "Lizard" && user == "Paper"){
         return "Lizard eats Paper, I Lose!"
     } else if (computer == "Lizard" && user == "Scissors"){
         return "Scissors decapitates Lizard, I Win!"
     } else if (computer == "Lizard" && user == "Spock"){
         return "Lizard poisons Spock, I Lose!"


     } else if (computer == "Spock" && user == "Spock"){
         return "Tie"
     } else if (computer == "Spock" && user == "Rock"){
         return "Spock vaporizes Rock, I Lose!"
     } else if (computer == "Spock" && user == "Paper"){
         return "Paper disproves Spock, I Win!"
     } else if (computer == "Spock" && user == "Scissors"){
         return "Spock smashes Scissors, I Lose!"
     } else if (computer == "Spock" && user == "Lizard"){
         return "Lizard poisons Spock, I Win!"
     }
 }

 console.log(RockPaperScissors("Rock", theBrain))

 

 ////BONUS/////
 ////(The Triangle upWards and upside down)/////
 const consoleTriangle = (length) => {
    let segment = ""
    for (let i = 1; i <= length; i++) {
      segment += "#".repeat(i)+ "\n"
    }
    return segment
  }
  console.log(consoleTriangle(7))

console.log("The Triangle....")
console.log("")

  const consoleUpsidedownTriangle = (length) => {
      let segment = ""
      for (let i = length; i > 0; i--){
          segment += "#".repeat(i) + "\n"
      }
      return segment
  }
  
console.log(consoleUpsidedownTriangle(7))
  //source: https://stackoverflow.com/questions/48930033/print-triangle-using-javascript-function/48930061