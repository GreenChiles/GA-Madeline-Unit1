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
    const options = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    return options[randomNum]
}
let theBrain = randomMove()
console.log(theBrain)

 const RockPaperScissors = (user, computer) => {
     if (computer == "Rock" && user == "Rock"){
         return "tie"
     } else if (computer == "Rock" && user == "Paper"){
         return " I lost. rats!!"
     } else if (computer == "Rock" && user == "Scissors"){
         return " Take that!"
     } else if (computer == "Paper" && user == "Paper"){
         return "..." 
     } else if (computer == "Paper" && user == "Rock"){
         return "*tears*"
     } else if (computer == "Paper" && user == "Scissors"){
         return "LOL, i won"
     } else if (computer == "Scissors" && user == "Scissors"){
         return "*game intensfies*"
     } else if (computer == "Scissors" && user == "Paper"){
         return "dead lol"
     } else if (computer == "Scissors" && user == "Rock"){
         return "Im a winner, Smash!!"
     }
 }

 console.log(RockPaperScissors("Rock", theBrain))
 // This RockPaperScissors function was made on the spot, by me. No reference
 // to my RPS file or Stack overflow(LOL). Im pretty positive that there are shorter 
 // and more effecient functions out there, but im very happy with this one. Its
 //very easy to track. Nothings confusing here

 ////BONUS/////
 const consoleTriangle = (length) => {
    let segment = ""
    for (let i = 1; i <= length; i++) {
      segment += "#".repeat(i)+ "\n"
    }
    return segment
  }
  console.log(consoleTriangle(7))

  //source: https://stackoverflow.com/questions/48930033/print-triangle-using-javascript-function/48930061