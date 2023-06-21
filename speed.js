
//Prompt the user to enter speed
const prompt =require('prompt-sync')();
let speed = parseInt(prompt('Speed: '));
//Gives the user the allowed limit and the repercation that may come with overspeeding
function speedLimitCheck(speed){
let limitcheck =70;
let points = 5;
let threshHold = 12;
let excessSpeed =speed - limitcheck;
//Calculates the points when speed exceeds the limit
let thePoints = Math.floor(excessSpeed/ points);
if (speed < limitcheck){
    console.log('OK')
}
//Calculates the points when the limitcheck is exceeded
else if (thePoints > threshHold){
    console.log('License suspended');
}
else {
    console.log(`points: ${thePoints}`)
}
}
speedLimitCheck(speed)

    