/*
How do we assign a value to a variable?
-const, let, var
let donkey = true

How do we change the value of a variable?
-update it below: you can change it by assigning by a variable. 
use dot notation(classes).


How do we assign an existing variable to a new variable?
-what i said above.

Remind me, what are declare, assign, and define?
-declare a variable with a name. You assign a value. you define with ...

What is pseudocoding and why should you do it?
-ruber duck coding or psuedocodeing is when you talk fake code to understand what
-you have to do and if you get the concept

What percentage of time should be spent thinking about 
how you're going to solve a problem vs actually typing in code to solve it?
-50/50 split
*/


// B. STRINGS///
let firstVariable ="Hello World"
console.log(firstVariable)



firstVariable = 0
console.log(firstVariable)

let secondVariable = "Dogs"
firstVariable = secondVariable
console.log(secondVariable)
console.log(firstVariable)
//what is the value of var 1 and 2? its the same. It got reassigned.
const yourName  = "Logan"
console.log("Hello my name is " + yourName)


//C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  
  //D. The farm
  let animal = "cow"
  if (animal == "cow"){
      console.log("moooo")
  } else {
      console.log("Hey! Your not a Cow!")
  }

  //E. Drivers ED
  let myAge = 23
  if (myAge >= 16){
      console.log('Here\'s the Keys!')//notice the excape character '\'?
  } else {
      console.log("sorry your to young")
  }

  // ||. Loops A. The Basics
  for (let i = 1; i<=10; i++){
      console.log(i)
  }

  for (let i = 10; i<= 400; i++){
      console.log(i)
  }

  for (let i = 12; i<4000; i++){
      if (i % 3 ==0){
          console.log(i)
      }
  }

  //B. Get even{
  for (let i = 1; i <= 100; i++){
      console.log(i) //THis one prints duplicate evens and on the 
      //seccond even it prints the "<-- is an ..." Below i basically
      // do the same thing but use a IF else and it would only print
      //one (instead of two)
      if (i % 2 == 0){
          console.log(i + "<-- is an even number")
      } 
  }

  //C. Give me Five 

  for (let i = 0; i <= 100; i++){
     // console.log("I found a " + i)
      if(i % 15 == 0){
          console.log("I found a " + i + " which is both a crowd and a High five!!")
      } else if(i % 3 == 0) {
            console.log("I found a " + i + " Three is a crowd")
      } else if (i % 5 == 0){
            console.log("I found a " + i + " High five" )
      } else {
          console.log("I found a " + i)
      }
  }

  //D. Savings 

  //source: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  bankSum = [1,2,3,4,5,6,7,8,9,10].reduce(add, 0)

  function add(addall, a) {
      return addall + a
  }


  console.log(bankSum ** 2 * 52)

  // |||. Arrays and Control flow 
  // A. Talk about it

  // What are the things in an array called?
  // - elements
//Do Arrays guarantee those things will be in order?
// yes, unless its changed. Arrays have whats called place vaule of elements
//, which means that everything is assigned a number starting from zero
// in front of the array
//What real-life thing could you model with an array?
// lists of data

//B Easy Does It
let quotes = ["Quote 1", "Quote 2", "Quote 3"]

//C. 

randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])
randomThings[2] = "world"
console.log(randomThings)

//d. Changes values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])
ourClass[4] = "Octocat"
console.log(ourClass)
ourClass.push("Cloud City")
console.log(ourClass)

const myArray = [5, 10, 500, 20]
myArray.push("Aegon", "OctoCat")
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.unshift("Bob Marley")
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.reverse()
console.log(myArray) //The array mutated in a way that everthing but the middle
// number changed positions. When you console log the array after reversing it
// it fliped.

//F. Biggie Smalls
let biggeSmalls = 109
if (biggeSmalls < 100){
    console.log("little number")
}else {
    console.log("Big Number")
}

//G. Monkey in the middle
let num = 7
if (num < 5){
    console.log("little number")
}else if (num > 10) {
    console.log("big number")
} else {
    console.log("Monkey!")
}

//H. Whats in your closet///

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
  kristynsCloset.splice(6,0, "raybans")
  console.log(kristynsCloset)
  kristynsCloset[5] ="stained knit hat"
  console.log(kristynsCloset)
  console.log(thomsCloset[0][1],", " + thomsCloset[1][1],"and " + thomsCloset[2][0])
  console.log(thomsCloset[1][2]) //Pants
  console.log(thomsCloset[2][2]) //acceroies
  console.log("thom is looking fierece in a gray button-up, jeans and wool scarf!")
  // are you asking for a simple console.log? or me to combine a string with bracket
  //notation? for example of both, refer to line 232
  thomsCloset[1][2] = "Footie Pajamas"
  console.log(thomsCloset)

  // |V.Functions 
  // A. printGreeting

  const printGreeting = (name) => {
      return "Hello there, " + name
  }
console.log(printGreeting("Slimer"))

const printCool = (name) => {
    return name + " is cool"
}
console.log(printCool("Captain Reynolds"))

const calculateCube = (aSingleNumber) => {
    return aSingleNumber ** 3
}
console.log(calculateCube(3))  

const isVowel = (x) => {
    if(x == "a" || x == "A" || x == "e" || x == "E" || x == "i" || x == "I" 
    || x == "o" || x == "O" || x == "u" || x == "U"){
        return " its a vowel!"   
    } else {
        return "NO! not a vowel"
    }
} // yes I am aware that you can use a array and loop instead.

console.log(isVowel("e"))

const getTwoLengths = (word, word2) => {
    return [word.length , word2.length]
}
console.log(getTwoLengths("diggity", "dog"))

let words = ["Hello", "dogs"]
const getMultipleLengths = words.map(function(word){
    return word + ' : ' + word.length
})

console.log(getMultipleLengths)
// I had a really hard time with this one. I decided on the map method
// souce: stackoverflow.com/questions/33399786/get-length-of-every-element-in-array-javascript


const maxOfThree = (x,y,z) => {
    if (x >= y && x >= z){
        return x
    }else if (z >= y && z >= x){
        return z
    } else if(y >= x && y>= z){
        return y
    } else {
        return y
    }
}

console.log(maxOfThree(6, 9, 3))

const printLongestWord = (arr) => {
    let long = arr[0]
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i].length > long.length){
            long = arr[i]
        }
    }
    return long
}

console.log(printLongestWord(["Bojack", "princess", "dog", "Lochness Monster"]))

//OBJECTS
//A.Make a user object

const user = {
    name : "Jerry",
    email : "jerry@gmail.com",
    age : 38,
    purchased : []
}
//B. Update the User
user.email = "CoolGuy@gmail.com"
user.age ++  

//C. Adding keys and values
user.location ="New Mexico"


//D. ShopAholic
console.log(user)
user.purchased.push("carbohydrates")
console.log(user)
user.purchased.push("Peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])

//E. Object-within-object
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "New Zealand",
    purchased: []
}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
console.log(user.friend.age)
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend)
console.log(user.friend.purchased.indexOf("A latte"))
console.log(user.friend.purchased[1])

//F. Loops
for (let i  in user.purchased){
        console.log(user.purchased[i])
    }
//This is a for in loop. I originally got an error that:
//"for-in loop head declarations may not have initializers" 
//because i made i = 0 instead of just i alone. I found the solution
// to that on MDN Web Docs. And hey it worked!

for (let j  in user.friend.purchased){
    console.log( user.friend.purchased[j])}

//G. Functions
const updateUser = () => {
    user.age += 1
    user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

const oldAndLoud = (Person) => {
    user.age += 1
    user.name = user.name.toUpperCase()
}
// Like this?
updateUser(user)
console.log(user)



//BONUS
//Cat Combinator
const cat1 = {
    name: "Zoey",
    breed: "Cailco",
    age: 10
}
console.log(cat1.age)
console.log(cat1.breed)

const cat2 = {
    name: "Huey",
    breed: "American Shorthair",
    age: 6
}

const CombineCats = () => {
let combo = {}
    combo = cat1 + cat2 
return combo
}
//???
console.log(CombineCats())

