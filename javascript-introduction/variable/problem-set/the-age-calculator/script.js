let currentAge = prompt("Your age now: ");
let yearsFromNow = prompt("Years: ");
currentAge = +currentAge;
yearsFromNow = +yearsFromNow;

const futureAge = currentAge + yearsFromNow;

console.log(`In ${yearsFromNow} years, you will be ${futureAge} years old.`);
