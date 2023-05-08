// Assignment Code
var generateBtn = document.querySelector("#generate");

const userChoice = {
  pwLength: "",
  lowerCase: null,
  upperCase: null,
  numbers: null,
  spChar: null
};

function writePassword() {
  var getLength = function(){
    userChoice.pwLength = window.prompt("Enter Desired Password Length between 8 and 128 character");
    userChoice.pwLength = Number(userChoice.pwLength);
    
  }
  getLength();
  // // Add event listener to generate button
  // generateBtn.addEventListener("click", getLength);
  
  while (!userChoice.pwLength || userChoice.pwLength < 8 || userChoice.pwLength >128) {
    window.alert("Please entre numeric value between 8 and 128");
    getLength();
  }
  var getType = function(){
    userChoice.lowerCase = confirm("Including lower case letter?");
    userChoice.upperCase = confirm("Including upper case letter?");
    userChoice.numbers = confirm("Including numbers?");
    userChoice.spChar = confirm("Including special characters?");
  }
  getType();

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(typeof userChoice.lowerCase);
console.log(userChoice.lowerCase.length);
console.log(userChoice.lowerCase);


console.log(typeof userChoice.upperCase);
console.log(userChoice.upperCase.length);
console.log(userChoice.upperCase);

console.log(typeof userChoice.numbers);
console.log(userChoice.numbers.length);
console.log(userChoice.numbers);

console.log(typeof userChoice.spChar);
console.log(userChoice.spChar.length);
console.log(userChoice.spChar);