let stdin = process.openStdin();
let palidrome_input = "";
let palidrome = "";
let palidrome_flip = "";
let palidrome_array = [];
let letters = /^[a-zA-Z]+$/;

console.log("");
console.log("              Welcome to the Palidrome Checker!");
console.log("");
process.stdout.write("Enter a palidrome as a single word or a sentence. (Q|q to quit) --> ");

//listener for command line input from stdin
stdin.addListener("data", function(d) {
  palidrome_input = d.toString().trim();
  process_palidrome();
})

function process_palidrome() {
  //check for quit
  if (palidrome_input.charAt(0) === 'Q' || palidrome_input.charAt(0) === 'q') {
    console.log("");
    console.log("              Exiting Palidrome Checker!");
    console.log("");
    stdin.end();
    console.log("");
    return;
  }

  //remove all non letters or numbers
  for (i = 0; i < palidrome_input.length; i++) {
    if (palidrome_input.charAt(i).match(letters) !== null) {
      palidrome = palidrome + palidrome_input.charAt(i);
    }
  }
  //force all letters to lower case
  palidrome = palidrome.toLowerCase();

  //create a array from the processed string
  palidrome_array = palidrome.split("");

  //create a flipped string
  palidrome_flip = palidrome_array.reverse().join("");

  // console.log("Before = " + palidrome);
  // console.log("After = " + palidrome_flip);
  console.log("");

  if (palidrome == palidrome_flip) {
    console.log(palidrome_input + " is a palidrome!");
  } else {
    console.log(palidrome_input + " is a NOT a palidrome!");
  }
  console.log("");

  //reset variables
  palidrome_input = "";
  palidrome_array = [];
  palidrome = "";
  palidrome_flip = "";
  process.stdout.write("Enter a palidrome as a single word or a sentence. (Q|q to quit) --> ");
} //end of process_change
