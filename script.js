//variable option for password
var characterlength = 8;
var choiceArr = [];

var specialCharaArr = ["!","@","#","$","%","^","&","*","(",")","<",">","?",":"];
var upperCaseArr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","*U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","*u","v","w","x","y","z"];
var numberArr = ["0","1","2","3","4","5","6","7","8","9"];

//Assignment code
var generateBtn = document.querySelector("#generate");


//add event.listnere to the generate button
generateBtn.addEventListener("click", writePassword);

//write password to #password input
function writePassword() 
{
  var correctPrompts = getPrompts();  
  var passwordText = document.querySelector('#password');
  
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
      passwordText.value = '';
  }
}

function generatePassword()
{
  //would generate password based on the prompts
  var password = '';
  for(var i = 0; i < characterlength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr [randomIndex];
  }
  return password;
}
 
function getPrompts()
{
  //prompts option for secured password
  choiceArr = [];

  characterlength = parseInt(window.prompt("how many characters would you like? (8 - 128)"));
    
    if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
      window.alert("character length has to be a number, 8 - 128 digits. - please try again.");
      return false;
    }

    var numSeletions = 0;
    while (numSeletions<1) {
    if (window.confirm("Do you want uppercase?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
      numSeletions++;
    }
    if (window.confirm("Do you want lowercase?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
      numSeletions++;
    }
    if (window.confirm("would you like specail characters?")) {
      choiceArr = choiceArr.concat(specialCharaArr);
      numSeletions++;
    }
    if (window.confirm("Do you want numbers?")) {
        choiceArr = choiceArr.concat(numberArr);
        numSeletions++;
    }
    if(numSeletions < 1)
    window.alert ("You must select at least one of the following option. uppercase, lowercase, special character or number. - please try again.");
  }
    return true;
}
