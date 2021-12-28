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