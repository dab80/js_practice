
let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;
let runningPopulation = startingPopulation;

//add 10% per week to the running population
for (i = 0; i < numberOfWeeks; i++) {
  runningPopulation = (runningPopulation * birthRate) + runningPopulation;
}

console.log("---------------- Cherokee Hare ----------------");
console.log("");
console.log("   Hare starting population = " + startingPopulation);
console.log("   Hare birth rate = " + (birthRate * 100) + "% per week.");
console.log("   Hare population studied for " + numberOfWeeks + " weeks.");
console.log("");
console.log("There will be " + Math.trunc(runningPopulation) + " Cherokee Hares after " + numberOfWeeks + " weeks.");
console.log("");
