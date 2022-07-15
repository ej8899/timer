//
// LHL - timer1.js project
// expected usage: node timer1.js 10 3 5 15 9 
// where beep occurs at the specified SECONDS
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/390?journey_step=32&workbook=7
//

//
// COLLECT INPUT & convert to Int.
//
let inputData = process.argv.slice(2);

//
// INPUT CHECKS & CONVERSION
// timer data as number array in parsedData[]
//
let parsedData = [];
inputData.forEach(function (timeVal) {
  if(Number(timeVal) > 0) { // filter out NaN and negatives
    parsedData.push(Number(timeVal)*1000); // convert the supplied number to MILLISECONDS 
  }
} );
// no data supplied (or remaining after error checks)
if (parsedData.length < 1) {
  console.log('No input for timers specified!\n\nUSAGE:  timer1.js x y z\nWhere x, y, z... etc can be any number of timers and seconds.\nExample: timer1.js 5 10 3');
}

//DEBUG error checking and input routines:
// console.log(parsedData);

// CREATE & START TIMERS
let timerInstance=[];
for (let x = 0; x < parsedData.length; x++) {
  timerInstance[x] = setTimeout(myAlert,parsedData[x],parsedData[x]); // send timer value too
}

//
// OUTPUT alerts - setTimeOut only runs once, so no need to clear timers
//
function myAlert(timesUp) {
  console.log((timesUp/1000) + ' seconds are up!\n');
  process.stdout.write("\u0007"); // several ways for system BEEP - this works on MACm1
}