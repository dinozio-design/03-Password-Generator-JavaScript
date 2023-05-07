// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// on click > call function generatePassword();
// define acceptable characters in array;
// prompt screen for user selection;
// save user selection in variable;
// random number generator to select randomly from the caracter array;
// contact the characters in a string;
// present the string in nameText.value;
// 
// ++ add select item 