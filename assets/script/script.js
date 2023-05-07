// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaNumChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&* ".split("");


var pwObject = {
  pWord : "",

  prompt1: function(){
    var userChoiceLength = window.prompt("Enter Desired Password Length between 8 and 128 character");
    userChoiceLength = Number(userChoiceLength);
  },








  generate: function(){
    this.prompt1();
  }
}

pwObject.generate();
console.log(pwObject.prompt1.userChoiceLength);



// 
// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaNumChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&* ".split("");


// Write password to the #password input
function writePassword() {
  let pWord = "";


  // Prompt for criteria 1 - password length
  prompt1: function(){
    var userChoiceLength = window.prompt("Enter Desired Password Length between 8 and 128 character");
    userChoiceLength = Number(userChoiceLength);
  }
  // Validating user input
  if (!userChoiceLength || userChoiceLength < 8 || userChoiceLength >128) {
    window.alert("Please entre numeric value between 8 and 128");
    userChoiceLength;
  }

  // Prompt for criteria 2 - charType
  

  // generatePassword: function () {
  //   var RAND = Math.floor(Math.random()*alphaNumChar.length);
  //   pWord += alphaNumChar[RAND];
  //   console.log(pWord);
  // },

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  // console.log(alphaNumChar[62]);



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

