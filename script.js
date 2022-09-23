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
