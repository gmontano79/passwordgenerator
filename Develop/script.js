// Assignment Code
var generateBtn = document.querySelector("#generate");


function randonInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randonInt(list.length)]
}

function generatePassword() {
  var userInput = window.prompt(
    "How long do you want your password? Minimun 8 to 128 characters"
  );

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Error: That's not a number");

    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be minimum 8 to 128 characters");
    return;
  }



  var wantLowerCase = window.confirm(
    "Would you like to include LOWERCASE letters in your password?"
  );
  var wantUpperCase = window.confirm(
    "Would you like to include UPPERCASE letters in your password?"
  );
  var wantNumbers = window.confirm(
    "Would you like to include NUMBERS in your password?"
  );
  var wantSymbols = window.confirm(
    "Would you like to include SYMBOLS in your password?"
  );

  console.log(userInput);
  console.log(wantLowerCase, wantNumbers, wantSymbols, wantNumbers)



  //  ****************** LOWERCASE, UPPERCASE, NUMBERS AND SYMBOLS ARRAYS *************
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numbers = [];
  for (var i = 0; i <= 9; i++) { numbers.push(i) }
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

  // **** PICK ARRAY ELEMENTS ******************
  var passwordCharacters = [];

  if (wantNumbers === true) {
    passwordCharacters.push(numbers);
  }
  if (wantLowerCase === true) {
    passwordCharacters.push(lowerCase);
  }
  if (wantUpperCase === true) {
    passwordCharacters.push(upperCase);
  }

  if (wantSymbols === true) {
    passwordCharacters.push(symbols);

  }


  console.log(passwordCharacters)

  if (passwordCharacters.length === 0) {
    window.alert("ERROR: You need to choose at least 1 type of character")
    return
  }

  //  ********* PICK RANDOM CHARACTERS *********

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomlist = getRandomItem(passwordCharacters)
    var randomChar = getRandomItem(randomlist)
    generatedPassword += randomChar
  }

  console.log(generatedPassword)


  return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
