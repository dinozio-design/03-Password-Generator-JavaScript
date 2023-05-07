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