// setAlarm

const setAlarm = (employed, vacationing)=> {
if(employed == true && vacationing == true){
    return false
} else if(employed == false && vacationing == false){
    return false
} else if(employed == false && vacationing == true){
    return false
} else if(employed == true && vacationing == false){
    return true
}
}
console.log(setAlarm(true, false)) //true


// const countOddNumbers = (num) => {
//     for (let i = 1; i <= num; i++){
//         if (i % 2 !== 0){
//             //return i
//             console.log(i)
//         } 
//     }
// }
// //Console.log vs return....Question for office hours
// wait, is it because return always stop for-loops?? 
//stackoverflow.com/questions/11714503/does-return-stop-a-loop

// countOddNumbers(20)
//console.log(countOddNumbers(20))


  const countOddNumbers = (num) => {
    let count = 0
    for (let i = 1; i <= num; i++){
         if (i % 2 !== 0){
             count++
         } 
     }
     return count
 }


 console.log(countOddNumbers(20))
// Shout out to my classmate Luke Fleming, He reallly helped me get this one
// i was stuck on it for hours!






