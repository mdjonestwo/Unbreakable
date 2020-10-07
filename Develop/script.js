// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialChar = [
  "!",
  "@",
  "#",
  "4",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "_",
  "+",
  "~",
  "?",
];

let lowerCase = [
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

let upperCase = [
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

let number = [
  "1", 
  "2",
  "3", 
  "4",
  "5",
  "6", 
  "7", 
  "8", 
  "9",
  "0"
];



generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);