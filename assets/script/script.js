// Assignment Code

var generateBtn = document.querySelector("#generate");
function writePassword() {
  
  var pWord = "";
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nUM = "0123456789";
  var characters = "!@#$%^&*";
  var alphaNumChar = "";
  var passwordText = document.querySelector("#password");
  // passwordText.value = pWord;

  const userChoice = {
    pwLength: "",
    lowerCase: null,
    upperCase: null,
    numbers: null,
    spChar: null
  };
  var getLength = function(){
    userChoice.pwLength = window.prompt("Enter Desired Password Length between 8 and 128 character");
    userChoice.pwLength = Number(userChoice.pwLength);
    
  }
  getLength(); 
  // validate input
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
  // validate input
  getType();
  if (!userChoice.lowerCase&&!userChoice.upperCase&&!userChoice.numbers&&!userChoice.spChar){
    window.alert("You must choose at lease one option to include");
    getType();
  }
  // set up the character index
  if (userChoice.lowerCase){
    alphaNumChar += alpha;
  }
  if (userChoice.upperCase){
    alphaNumChar += ALPHA;
  }
  if (userChoice.numbers){
    alphaNumChar += nUM;
  }
  if (userChoice.spChar){
    alphaNumChar += characters;
  }

  console.log(alphaNumChar);
  // articulate the password
  
  do {
    var RAND = Math.floor(Math.random()*alphaNumChar.length);
    pWord += alphaNumChar[RAND];
  } while (pWord.length < userChoice.pwLength);
  // update html element
  passwordText.value = pWord;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
