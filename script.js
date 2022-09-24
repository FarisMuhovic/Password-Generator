// *** Password Length Slider *** //
const rangeInput = document.getElementById("rangeinput");
const numberInput = document.getElementById("inputnumbers");
let root = document.documentElement;
rangeInput.oninput = function () {
  numberInput.value = rangeInput.value;
  // *** Input Range Color *** //
  let cssVars = getComputedStyle(document.documentElement).getPropertyValue(
    "--sliderpercentage"
  );
  let percentage = Number(rangeInput.value) * 2.5 - 25;
  root.style.setProperty("--sliderpercentage", String(percentage + "%"));
};
numberInput.oninput = function () {
  rangeInput.value = numberInput.value;
  // *** Input Range Color *** //
  let cssVars = getComputedStyle(document.documentElement).getPropertyValue(
    "--sliderpercentage"
  );
  let percentage = Number(rangeInput.value) * 2.5 - 25;
  root.style.setProperty("--sliderpercentage", String(percentage + "%"));
};

// *** Password types for checkboxes *** //
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_><+=-";
//new variable
const passwordOutput = document.getElementById("passwordOutput");
const generateBtn = document.getElementById("generatebtn");
generateBtn.addEventListener("click", function () {
  let lengthOfPassword = rangeInput.value;
  let password = "";
  let mix = "";
  let upperCheckbox = document.getElementById("upper").checked;
  if (upperCheckbox === true) {
    mix += upperCase;
  }
  let lowerCheckbox = document.getElementById("lower").checked;
  if (lowerCheckbox === true) {
    mix += lowerCase;
  }
  let numberCheckbox = document.getElementById("number").checked;
  if (numberCheckbox === true) {
    mix += numbers;
  }
  let symbolCheckbox = document.getElementById("symbol").checked;
  if (symbolCheckbox === true) {
    mix += symbols;
  }
  if (
    (upperCheckbox === false) &
    (lowerCheckbox === false) &
    (numberCheckbox === false) &
    (symbolCheckbox === false)
  ) {
    alert("Please Select Properties");
  }
  let i = 0;
  while (i < lengthOfPassword) {
    i++;
    let randomNum = Math.floor(Math.random() * mix.length);
    password += mix[randomNum];
  }

  passwordOutput.value = password;
});
// copy password function
const copyAsset = document.getElementById("copy");
const copyPopUp = document.getElementById("copiedtext");
copyAsset.addEventListener("click", function () {
  let password = passwordOutput.value;
  copyPopUp.style.opacity = 1;
  navigator.clipboard.writeText(password);
  if (copyPopUp.style.opacity == "1") {
    console.log("111", copyPopUp.style.opacity);
    setInterval(() => {
      copyPopUp.style.opacity = 0;
    }, 2500);
  }
});
