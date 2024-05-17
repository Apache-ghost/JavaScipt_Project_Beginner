// Get the required elements from the DOM
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue'); // Corrected ID
const colorBox = document.getElementById('colorBox');
const copyButton = document.getElementById('copyButton');
const inputType = document.getElementById('inputType');

// Update the color box and input type value
function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  const color = `rgb(${red}, ${green}, ${blue})`;

  colorBox.style.backgroundColor = color;
  inputType.textContent = color;
}

// Update the slider values and color on slider change
redSlider.addEventListener('input', () => {
  redValue.textContent = redSlider.value;
  updateColor();
});

greenSlider.addEventListener('input', () => {
  greenValue.textContent = greenSlider.value;
  updateColor();
});

blueSlider.addEventListener('input', () => {
  blueValue.textContent = blueSlider.value;
  updateColor();
});

// Copy the RGB value to the clipboard
copyButton.addEventListener('click', () => {
  const range = document.createRange();
  range.selectNode(inputType);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy RGB Value';
  }, 1500);
});