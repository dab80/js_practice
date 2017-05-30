// Misc vars
let stdin = process.openStdin();
let counter = 0;
let letters = /^[a-zA-Z]+$/;

//Create a variable called word that contains a hangman word
let my_word = "IronYard";

//create an array to hold the correct guesses
let correct_array = [];

//add "_" for each letter in my_word
for (j = 0; j < my_word.length; j++) {
  correct_array[j] = "_"
}

//create a second variable called letter that indicates the letter that the player guessed
let the_guess = "";

//Prompt for a letter and save it
console.log("");
console.log("              This is Hangman Lite");
console.log("");
process.stdout.write("Please enter a letter that you link is in the my word --> ");

stdin.addListener("data", function(d) {
  the_guess = d.toString().trim();
  // console.log("Your guess was: [" + the_guess + "]");
  process_guess();
  // stdin.end();

})

function process_guess() {
  // console.log("The Guess is " + the_guess.length + " charaters long.");
  //check to make sure only one letter was entered
  if (the_guess.length > 1) {
    process.stdout.write("Please enter only one letter --> ");
  } else if (the_guess.length === 0 || the_guess.match(letters) === null) {
    process.stdout.write("Invalid Input - Please enter a letter --> ");
  } else if (my_word.indexOf(the_guess.charAt(0)) < 0) {
    console.log("");
    //else, the letter doesn't exist so print out "Nope, that letter doesn't exist in my word."
    console.log("Nope, that letter doesn't exist in my word.");
    console.log("");
    process.stdout.write("Please enter a letter that you link is in the my word --> ");

  } else {
    for (i = 0; i < my_word.length; i++) {
      if (my_word.charAt(i) === the_guess.charAt(0)) {
        counter++;
        correct_array[i] = the_guess.charAt(0);
      }
    }
    //if the letter exists, then Print out "Yeah, the letter x exists y times in my word
    console.log("");
    console.log("              Yeah!");
    console.log("");

    //if the letter exists, print the actual letter and the number of times that it appears
    if (correct_array.indexOf("_") < 0) {
      console.log("              " + correct_array);
      console.log("");
      console.log("         Congratulations!!! You Guessed The Word!");
      console.log("");
      stdin.end();
    } else {
      console.log("Your guess of '" + the_guess.charAt(0) + "' exists " + counter + " times!");
      console.log("");
      console.log("You have guessed the following correct letters so far.");
      console.log("");
      console.log("              " + correct_array);
      console.log("");
      process.stdout.write("There are more unknown letters, please again --> ");
    }
    //reset the counter
    counter = 0;
  } //end of if
}
