//
// LHL - timer1.js project
// expected usage: node timer1.js 10 3 5 15 9
// where beep occurs at the specified SECONDS
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/390?journey_step=32&workbook=7
//

// GLOBAL variables & style function(s)
const conColorCyan="\x1b[36m", conColorRed='\x1b[91m', conColorGreen='\x1b[92m', conColorReset="\x1b[0m";
function drawDivideLine(lineColor,lineLength,lineMessage) { 
  if(lineMessage) {
    lineMessage = '--[ ' + lineMessage + ' ]';
  } else { lineMessage = '';}
  const consoleLine = '-'.repeat((process.stdout.columns)*((lineLength/100))-((lineMessage.length)));
  return (`${lineColor}${lineMessage}${consoleLine}${conColorReset}`);
}

//
// OUTPUT alerts - setTimeOut only runs once, so no need to clear timers
//
function myAlert(timesUp) {
  console.log(conColorGreen + '⏲️  ' + (timesUp / 1000) + ' seconds are up!' + conColorReset);
  process.stdout.write("\u0007"); // several ways for system BEEP - this works on MACm1
}


//
// MAIN program:
//

console.log(drawDivideLine(conColorGreen,50,"LHL - Simple Timer Project"));


//
// INPUT, INPUT CHECKS & CONVERSION
// timer data as number array in parsedData[]
//
let inputData = process.argv.slice(2);
let parsedData = [];
inputData.forEach(function(timeVal) {
  if (Number(timeVal) > 0) { // filter out NaN and negatives
    parsedData.push(Number(timeVal) * 1000); // convert the supplied number to MILLISECONDS
  }
});
// no data supplied (or remaining after error checks)
if (parsedData.length < 1) {
  console.log(`\n${conColorRed}No input for timers specified!\n\n${conColorCyan}USAGE:\t\t${conColorGreen}timer1.js x y z\n${conColorCyan}Where x, y, z... etc can be any number of timers and seconds.\nExample:\t${conColorGreen}timer1.js 5 10 3${conColorReset}`);
  return;
}

// DEBUG error checking and input routines:
// console.log(parsedData);

// CREATE & START TIMERS
let timerInstance = [];

// display timer start & show number of timers that are running
let modifier = ' is';
if (parsedData.length > 1) {
  modifier = 's are';
}
console.log(`${conColorCyan}${parsedData.length} timer${modifier} currently running.\nUse ${conColorRed}CTRL-C${conColorCyan} to exit if needed.${conColorReset}\n`);

for (let x = 0; x < parsedData.length; x++) {
  timerInstance[x] = setTimeout(myAlert,parsedData[x],parsedData[x]); // send timer value too
}

