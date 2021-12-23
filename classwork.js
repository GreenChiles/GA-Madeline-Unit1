/********
 * JavaScript data types
 * Booleans
 * Strings
 * Objects
 * Numbers
 * Null
 * Undefined
 * Symbol
 */

// Booleans
//let userHasQuit = false;
/*
Example of when we could use a boolean to continuously do something
for an unspecified amount of time

while(!userHasQuit){
 const selection = window.prompt('do you want to quit?', 'no')
 if(selection.toLowerCase().trim() === 'yes'){
    userHasQuit = true
  }
}
*/

const str = 'Hello World'
console.log(str.split(''))
const words = str.split(' ')
console.log(words)
console.log(str.charAt(2))
console.log(str.toLowerCase())

const myNum = 32
console.log(myNum * myNum)

/*NULL & UNDEFINED */

const socialLife = null
let future
// if you want something to be nothing, always set it to null!!
console.log(socialLife)
console.log(future)

/*Falsey vaules*/
//0, NaN, undefined, '' , Null, false

//Arrays
//common use case: store a list of things

const arr = [1,2,3]

arr.forEach((num) => {
    console.log(num * 2)
})

//get an item
console.log(arr[arr.length - 1])

/* Functions */ const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const reverseStringTwo = (str) => {
    const newString = []
    for(let i = str.length; i >= 0; i-- ){
        newString.push(str[i])
    }
    return newString.join('')
}

console.log(reverseStringTwo('arthur'))



const maxOfThree = (num1, num2, num3) => {
    const arr = [num1, num2, num3]
    arr.sort((a,b) =>{
        return b - a
    })
    return arr[0]
}
console.log(maxOfThree(7,3,4))

/* objects and Classes */
// Object is a noun 
// Object is an instance of a class

// Object Literal 
const myObj = {
    name: 'arthur',
    age: 'Nunya'
}

//class

class Cat {
    constructor(name, age, cuteness){
        this.name = name;
        this.age = age;
        this.cuteness = cuteness;
        this.legs = 4;
        this.hasClaws = true
    }

    scratch(){
        if(this.age < 2 && this.hasClaws){
            console.log('Your couch is destroyed')
        } else {
            console.log('nothing happens the cat cant scratch')
        }
    }
}


const huey = new Cat('Huey P Kitten', 4, Infinity)
console.log(huey)
huey.scratch()

class SuperCat extends Cat {
    constructor(name, age, cuteness, superPower){
        super(name, age, cuteness)
        this.superPower = superPower
    }
}

const patches = new SuperCat("patches", 9, Infinity, "flying")

console.log(patches)

class CrazyCatMan {
    constructor(){
        this.felineFriends = []
    }
    adoptCat(catName, age){
        const newFriend = new Cat(catName, age, Infinity)
        this.felineFriends.push(newFriend)
    }
}

const arthur = new CrazyCatMan()
arthur.adoptCat('patches jr', 0, Infinity - 1)

console.log(arthur)

//GIT
// initialize the git repo '''git init'''
// check my git status '''git status'''
// stage our commit '''git add *''' or '''git add -A'''
// git status
//git commit -m '''get commit -m "some message lol"'''