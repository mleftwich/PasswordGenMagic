// Assignment Code
const generateBtn = document.querySelector("#generate");

// Length of the password
function askPasswordLength() {
  let passwordLength = prompt(
    "How long will the password be? Between 8-128 characters only"
  );

  const passwordNan = isNaN(passwordLength);
  const noInput = passwordLength === 0;
  const biggySmalls = passwordLength < 8 || passwordLength > 128;

  if (passwordNan || noInput || biggySmalls) {
    alert("You need to set a valid length");
    return askPasswordLength();
  }
  return passwordLength;
}

/* Style of Password */
function isPasswordStyled() {
  var passwordUpper = confirm("Do you want UPPERCASE?");
  var passwordLower = confirm("do you want lowercase?");
  var passwordSymbols = confirm("Do you want $ymb*!5?");
  var passwordNumbers = confirm("Numbers? 24343");

  if (passwordUpper || passwordLower || passwordSymbols || passwordNumbers) {
    return {
      passwordUpper,
      passwordLower,
      passwordSymbols,
      passwordNumbers,
    };
  }
  alert("You need to select at least one value");
  return isPasswordStyled();
}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  let passwordLength = askPasswordLength();
  let passwordStyle = isPasswordStyled();
  let styledPWD = "";
  if (passwordStyle.passwordUpper) {
    styledPWD = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordStyle.passwordLower) {
    styledPWD = styledPWD + "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordStyle.passwordSymbols) {
    styledPWD = styledPWD + "!#$%&'*+,-./:;<=>?@/^_`~";
  }
  if (passwordStyle.passwordNumbers) {
    styledPWD = styledPWD + "0123456789";
  }

  let password = "";
  console.log(styledPWD);
  let size = "";
  for (let size = 0; size < passwordLength; size++) {
    const randomChar = styledPWD[Math.floor(Math.random() * styledPWD.length)];
    password += randomChar;
  }

  console.log(password);
  // Write password to the #password input
  function writePassword() {
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  writePassword();
});

const copyBTN = document.querySelector("#copy");

copyBTN.addEventListener("click", function (event) {
  function copytoClipboard() {
    let copyText = document.querySelector("#password");
    navigator.clipboard.writeText(copyText.value);
  }
  copytoClipboard();
});
