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
  let i = 0;
  while (i < lengthOfPassword) {
    i++;
    let randomNum = Math.floor(Math.random() * mix.length);
    password += mix[randomNum];
  }
  document.getElementById("passwordOutput").value = password;
});
