//Part 1 HTML & CSS
//5 I am very comfortable with HTML and CSS. Javascript, not so much


////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++){
    console.log(i)
} 

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i<= 200; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i<= 100; i++){
    if (i % 15 == 0){
        console.log(i + " FizzBuzz")
    } else if (i % 5 == 0){
        console.log(i + " buzz")
    } else if (i % 3 == 0){
        console.log (i + " Fizz")
    } else {
        console.log(i)
    }
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

console.log(plantee.indexOf(5000))// I dont have to indexOf to know what it is
//I could always count but its nice to have a method to do it for me. (index: 2)
plantee[2] += 1
console.log(plantee)
wolfy[3] = "Gotham City"
console.log(wolfy)
// D'Art? you mean dart?
dart.push("Hawkins")
console.log(dart)

const Gameboy = Object.assign([], wolfy)
//Object assign apperenty works on arrays. I think it might
//be unnessary tho... i guess i could of just changed the name Wolfy to Gameboy
// above or used another constant named Gameboy to store wolfy.
Gameboy[0] = "Gameboy"
console.log(Gameboy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////