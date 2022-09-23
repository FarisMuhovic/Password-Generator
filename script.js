// *** Password Length Slider *** //
const rangeInput = document.getElementById("rangeinput");
const numberInput = document.getElementById("inputnumbers");

rangeInput.oninput = function () {
  numberInput.value = rangeInput.value;
};

numberInput.oninput = function () {
  rangeInput.value = numberInput.value;
};
