// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // password = "hello"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lengthOfPassword = prompt("How long would you like your password to be? (8-128)")
  if(lengthOfPassword < 8) {
    alert("bad input");
    return "bad input, error, or else"
  }

  if(lengthOfPassword > 128) {
    alert("bad input");
    return "bad input, error, or else"
  }
  var passwordCriteria= "";

  var lowercase = confirm ("Do you want lower in your password?");
  if(lowercase === true) {
    passwordCriteria += "abcdefghijklmnopqrstuvwxyz"
  }

  var uppercase = confirm ("Do you want uppercase in your password?");
  if (uppercase ===true){
    passwordCriteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  // use confirm instead of prompt for acceptance criteria about (lower case, upper case, etc)
  return passwordCriteria
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
