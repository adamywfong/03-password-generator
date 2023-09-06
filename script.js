// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowABC = "abcdefghijklmnopqrstuvwxyz".split('');
var upABC = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var numList = '0123456789'.split('');
var specChars = "~`!@#$%^&*()_+-=[]{}|,<.>/?;:\\\"\'".split('');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generates password for writePassword() function
function generatePassword() {
  var pw = '';
  var minLength = Number(prompt("What is the minimum password length?"));
  var charSet = [];
  //verify minLength fits criteria
  while (isNaN(minLength) || minLength < 8 || minLength > 128) {
    var input = prompt("Value has to be a number between 8 and 128.\nWhat is the minimum password length?");
    minLength = Number(input);
  }
  //Construct charSet and ensures it is non-empty; also ensures passsword contains at least 1 character of each desired type
  while (charSet.length < 1) {
    if (confirm("Press 'OK' if you want your password to contain lowercase letters")) {
      charSet=charSet.concat(lowABC);
      pw+=lowABC[Math.floor(Math.random()*lowABC.length)];
    }
    if (confirm("Press 'OK' if you want your password to contain uppercase letters")) {
      charSet=charSet.concat(upABC);
      pw+=upABC[Math.floor(Math.random()*upABC.length)];
    }
    if (confirm("Press 'OK' if you want your password to contain numbers")) {
      charSet=charSet.concat(numList);
      pw+=numList[Math.floor(Math.random()*numList.length)];
    }
    if (confirm("Press 'OK' if you want your password to contain special characters")) {
      charSet=charSet.concat(specChars);
      pw+=specChars[Math.floor(Math.random()*specChars.length)];
    }
    if (charSet.length < 1) {
      alert("Your password needs to be made with something!");
    }
  }
  //create random password containing at least one of each character type
  while (pw.length < minLength) {
    pw+=charSet[Math.floor(Math.random()*charSet.length)];
  }
  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


