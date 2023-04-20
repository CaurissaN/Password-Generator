// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // password = "hello"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // this variable holds the length of password
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
  var answer = ""

  var lowercase = confirm ("Do you want lower in your password?");
  if(lowercase === true) {
    passwordCriteria += "abcdefghijklmnopqrstuvwxyz"
  }
  var uppercase = confirm ("Do you want uppercase in your password?");
  if (uppercase ===true){
    passwordCriteria += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var numbers = confirm ("Do you want numbers in your password?");
  if(numbers === true) {
    passwordCriteria += "1234567890"
  }
  var symbols = confirm ("Do you want symbols in your password?");
  if(symbols === true) {
    passwordCriteria += "!@#$%^&*()_"
  }

  if(passwordCriteria.length == 0) {
    alert("You must choose atleast one type of character, to create a password.")
    return "You must choose atleast one type of character, to create a password."
  }

  for(let i = 0; i < lengthOfPassword; i++) {
    var random = Math.floor(Math.random() * passwordCriteria.length)
    answer += passwordCriteria[random]
  }



  // use confirm instead of prompt for acceptance criteria about (lower case, upper case, etc)
  return answer
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);